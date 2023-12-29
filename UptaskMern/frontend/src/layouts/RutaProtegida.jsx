import React, { useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
function RutaProtegida() {
  const { auth, cargando } = useAuth();

  if(cargando) return "Cargando...";

  return <>{auth._id ? (
  <div className="bg-gray-100">
    <Header />

    <div className="flex gap-[2rem] ">
        <Sidebar />
        <main className="py-[5rem] px-[3rem] ">
            <Outlet />
        </main>
    </div>

  </div>) : <Navigate to="/" />}</>;
}

export default RutaProtegida;
