import { useContext } from "react";
import NoticiasContext from "../context/NoticiasProvider";

export default function useNoticias() {
  return useContext(NoticiasContext);
}
