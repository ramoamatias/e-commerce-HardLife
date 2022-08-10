import React from 'react'
import CompraItem from '../../components/ComprasItem/CompraItem'
import './OrdenesList.css'

const OrdenesList = ({ordenes}) => {
  return (
    <div className='ordenesListContainer'>
      <h2 className='ordenesListTitulo'>Mis Compras</h2>
        { ordenes.length == 0 
          ? <p>No hay compras disponibles</p>
          : ordenes.map(el => <CompraItem 
              key = {el.id}
              id = {el.id}
              productos = {el.productos}
              total = {el.total}
              fechaEmision = {el.fechaEmision}
              />)}
    </div>
  )
}

export default OrdenesList