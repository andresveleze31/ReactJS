import React from 'react'

function Productos() {
  return (
    <div className='contenedor'>
      <h1>Productos</h1>

      <table>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Acciones</th>
            </tr>
        </thead>
      </table>
    </div>
  )
}

export default Productos
