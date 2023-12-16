import { useContext } from "react";
import ClimaContext from "../context/ClimaProvider";

export function useClima() {
  return useContext(ClimaContext);
}
