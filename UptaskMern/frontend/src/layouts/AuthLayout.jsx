import React from 'react'
import { Outlet } from 'react-router-dom'

function AuthLayout() {
  return (
    <div>
      <main className='contenedor min-h-screen flex justify-center items-center'>
        <Outlet />
      </main>
    </div>
  );
}

export default AuthLayout
