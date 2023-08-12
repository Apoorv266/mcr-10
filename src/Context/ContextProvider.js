import React, { createContext, useReducer } from 'react'
import { initialData, reducerFunc } from '../Reducer/Reducer'

export const productContext = createContext()
const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducerFunc, initialData)

    const inventoryFunc = () => {
        const obj = state.data.reduce((acc, curr) => {
            return {
                ...acc,
                Tstock : acc.Tstock += curr.stock, 
                Tdelivered: acc.Tdelivered += curr.delivered, 
                LSI: curr.stock <= 10 ? acc.LSI += 1 : acc.LSI
            }
        }, {
            Tstock: 0,
            Tdelivered: 0,
            LSI: 0
        })
        return obj
    }

    return (
        <productContext.Provider value={{ state, dispatch , inventoryFunc}}>{children}</productContext.Provider>
    )
}

export default ContextProvider