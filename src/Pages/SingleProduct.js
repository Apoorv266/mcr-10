import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { productContext } from '../Context/ContextProvider'

const SingleProduct = () => {
    const { productId } = useParams()
    const {state} = useContext(productContext)

    const obj = state?.data.find(item => item.id === Number(productId))  
    return (
        <div className='flex-center product-detail'>
            <img src={obj?.imageUrl} alt="" height={"400px"}/>
            <p>Price : {obj?.price}</p>
            <p>Stock : {obj?.stock}</p>
            <p>Supplier : {obj?.supplier}</p>
            <p>Department : {obj?.department}</p>
            <p>SKU : {obj?.sku}</p>
            <p>Delivered : {obj?.delivered}</p>
            <p>Name: {obj?.name}</p>
            <p>Description : {obj?.description}</p>
        </div>
    )
}

export default SingleProduct