import { useContext } from "react";
import { UserGHContext } from "../../context/user-gh";

export const useUserGH = () => {
  return useContext(UserGHContext);
}