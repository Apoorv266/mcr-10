import React, { useContext } from 'react'
import "../Style/Inventory.css"
import { productContext } from '../Context/ContextProvider'

const Inventory = () => {
  const {inventoryFunc} = useContext(productContext)
  const {Tstock, Tdelivered, LSI} = inventoryFunc()
  return (
    <div className='inventory-main flex-around'>
        <div className='intentory-card flex-center'>
            <h2>{Tstock}</h2>
        <p>Total Stock</p>
        </div>

        <div className='intentory-card flex-center'>
            <h2>{Tdelivered}</h2>
        <p>Total delivered</p>
        </div>

        <div className='intentory-card flex-center'>
            <h2>{LSI}</h2>
            <p>Total low stock item</p>
        </div>
    </div>
  )
}

export default Inventory