import { useContext } from "react";
import { AuthContext } from "../Firebase/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useCards = () => {
  const { user,loading } = useContext(AuthContext);
  const token = localStorage.getItem("access-token");
  // const [axiosSecure] = useAxiosSecure();
  if (!user) {
    return [];
  }
  const { refetch, data: card = [] } = useQuery({
    queryKey: ["/cards", user?.email],
    enabled:!loading,
    // queryFn: async () => {
    //   const res = await axiosSecure.get(`cards?email=${user?.email}`);
    //   return res.data;
    // },
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/cards?email=${user?.email}`,{
          headers:{
            authorization : `bearer ${token}`
          }
        }
      );
      return res.json();
    },
  });
  return [card, refetch];
};

export default useCards;
