import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./components/Layout";

import NuevoCliente, {
  action as actionNuevoCliente,
} from "./pages/NuevoCliente";
import Clientes, { loader as clientesLoader } from "./pages/Clientes";
import EditarCliente, {
  loader as editarLoader,
  action as editarAction,
} from "./pages/EditarCliente";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Clientes />,
        loader: clientesLoader,
      },
      {
        path: "/clientes/nuevo",
        element: <NuevoCliente />,
        action: actionNuevoCliente,
      },
      {
        path: "/clientes/editar/:id",
        element: <EditarCliente />,
        loader: editarLoader,
        action: editarAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
