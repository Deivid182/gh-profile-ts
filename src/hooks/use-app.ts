import { useContext } from "react";
import { UserGHContext } from "../context/app-provider";
export const useApp = () => {
  return useContext(UserGHContext);
}