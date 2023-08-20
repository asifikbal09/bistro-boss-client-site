import { useContext } from "react";
import { AuthContext } from "../Firebase/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useCards = () => {
  const { user } = useContext(AuthContext);

  const { refetch, data: card = [] } = useQuery({
    queryKey: ["cards", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/cards?email=${user.email}`
      );
      return res.json();
    },
  });
  return [card, refetch];
};

export default useCards;
