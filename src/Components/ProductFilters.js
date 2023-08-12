import React, { useContext } from 'react'
import { productContext } from '../Context/ContextProvider'
import "../Style/ProductFilters.css"
import { Link } from 'react-router-dom'

const ProductFilters = () => {
  const { state, dispatch } = useContext(productContext)
  return (
    <div className='productFilter-main flex-around'>
      <h1>Products</h1>

      <select onChange={(e) => dispatch({ type: "DPRT_FILTER", payload: e.target.value })} value={state.dprtFilter}>
        <option value="All">All departments</option>
        <option value="Kitchen">Kitchen</option>
        <option value="Clothing">Clothes</option>
        <option value="Toys">Toys</option>
      </select>

      <div>
        <input
          type="checkbox"
          checked={state.LSIFilter}
          onChange={(e) => dispatch({ type: "LSI_FILTER", payload: !state.LSIFilter })}
        />
        <span
        >
          Low stock items
        </span>
      </div>

      <select onChange={(e) => dispatch({ type: "SORT_FILTER", payload: e.target.value })} defaultValue={"none"}>
        <option value="none" disabled >Sort by : </option>
        <option value="Name">Name</option>
        <option value="Price">Price</option>
        <option value="Stock">Stock</option>
      </select>

<Link to={"/add-product"}>
      <button className='new-btn'>New</button>
      </Link>
    </div>
  )
}

export default ProductFilters