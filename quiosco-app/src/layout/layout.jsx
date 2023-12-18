import Head from "next/head";
import React, { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Modal from "react-modal";
import { useQuiosco } from "@/hooks/useQuiosco";
import ModalProducto from "@/components/ModalProducto";
import Link from "next/link";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#__next");

function Layout({ children }) {
  const { modal, added, setAdded } = useQuiosco();

  useEffect(() => {
    if (added === true) {
      setTimeout(() => {
        setAdded(false);
      }, 3000);
    }
  }, [added]);

  return (
    <div>
      <div className="flex">
        <aside className="w-1/4">
          <Sidebar />
        </aside>
        <main className="w-3/4 p-[5rem] h-screen overflow-y-scroll ">
          <nav className="flex justify-between border-b p-[2rem] ">
            <Link href="/">Menu</Link>
            <Link href="/resumen">Resumen</Link>
            <Link href="/total">Total</Link>
          </nav>
          {children}
        </main>
      </div>

      {modal && (
        <Modal isOpen={modal} style={customStyles}>
          <ModalProducto />
        </Modal>
      )}

      {added && (
        <div className="absolute top-5 right-0 p-[2rem] bg-green-400">
          <p className="uppercase text-white font-bold">
            Producto Añadido Correctamente
          </p>
        </div>
      )}
    </div>
  );
}

export default Layout;
