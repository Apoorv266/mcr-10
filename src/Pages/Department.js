import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { productContext } from '../Context/ContextProvider'

const Department = () => {
    const { dispatch } = useContext(productContext)
    const navigate = useNavigate()
    const handleClickFunc = (categoryName) =>{
        dispatch({ type: "DPRT_FILTER", payload: categoryName })
        navigate("/products")
    }
    return (
        <div className='inventory-main flex-around'>
            <div className='intentory-card flex-center clickable' onClick={()=>handleClickFunc("Kitchen")}>
                <h1>Kitchen</h1>
            </div>

            <div className='intentory-card flex-center clickable' onClick={()=>handleClickFunc("Clothing")}>
                <h1>Clothes</h1>
            </div>

            <div className='intentory-card flex-center clickable' onClick={()=>handleClickFunc("Toys")}>
                <h1>Toys</h1>
            </div>
        </div>
    )
}

export default Department