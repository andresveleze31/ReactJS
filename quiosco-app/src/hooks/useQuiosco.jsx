import { useContext } from "react";
import QuioscoContext from "@/context/QuiscoProvider";

export function useQuiosco() {
  return useContext(QuioscoContext);
}
