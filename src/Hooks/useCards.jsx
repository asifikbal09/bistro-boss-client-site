import { useContext } from "react";
import { AuthContext } from "../Firebase/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useCards = () => {
  const { user,loader } = useContext(AuthContext);
  const token = localStorage.getItem("access-token");
  if (!user) {
    return [];
  }
  const [axiosSecure] = useAxiosSecure();
  const { data: card=[], refetch } = useQuery({
    queryKey: ["/cards", user?.email],
    enabled:!loader,
    queryFn: async () => {
      const res = await axiosSecure.get(`cards?email=${user?.email}`);
      return res.data;
    },
    // queryFn: async () => {
    //   const res = await fetch(
    //     `http://localhost:5000/cards?email=${user?.email}`,{
    //       headers:{
    //         authorization : `bearer ${token}`
    //       }
    //     }
    //   );
    //   return res.json();
    // },
  });
  return [card, refetch];
};

export default useCards;
