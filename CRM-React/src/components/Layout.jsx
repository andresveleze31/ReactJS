import { Outlet, Link, useLocation } from "react-router-dom";

function Layout() {
  const location = useLocation();

  return (
    <div className="flex min-h-screen">
      <aside className="w-1/5 bg-blue-800 p-[2rem] flex flex-col items-center ">
        <h2 className="font-bold text-white">CRM - Clientes</h2>

        <nav className="flex flex-col gap-[2rem] w-full pl-[2rem] ">
          <Link
            className={`${
              location.pathname === "/" ? "bg-gray-500" : "bg-blue-800"
            } text-white uppercase rounded-xl hover:bg-gray-500 py-[.5rem] px-[2rem] font-bold `}
            to="/"
          >
            Clientes
          </Link>
          <Link
            className={`${
              location.pathname === "/clientes/nuevo"
                ? "bg-gray-500"
                : "bg-blue-800"
            } text-white uppercase rounded-xl hover:bg-gray-500 py-[.5rem] px-[2rem] font-bold `}
            to="/clientes/nuevo"
          >
            Nuevo Cliente
          </Link>
        </nav>
      </aside>

      <main className=" w-4/5 h-screen overflow-y-scroll px-[5rem] py-[2rem] ">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
