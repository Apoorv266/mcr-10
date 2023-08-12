import React, { createContext, useReducer } from 'react'
import { initialData, reducerFunc } from '../Reducer/Reducer'

export const productContext = createContext()
const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducerFunc, initialData)

    const inventoryFunc = () => {
        const obj = state.data.reduce((acc, curr) => {
            return {
                ...acc,
                Tstock: acc.Tstock += curr.stock,
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

    const filterFunc = () => {
        let filterArr

        let newArr = state.LSIFilter ? state.data.filter(item => item.stock <= 10) : state.data

        let categoryFilter = state.dprtFilter === "All" ? newArr : newArr.filter((item) => item.department === state.dprtFilter)

        filterArr = state.sortFilter === "none" ? categoryFilter : [...categoryFilter].sort((a, b) => {
            switch (state.sortFilter) {
                case "Name":
                    return a.name.localeCompare(b.name);
                case "Price":
                    return a.price - b.price
                default:
                    return a.stock - b.stock
            }
        })
        return filterArr
    }

    console.log("func", filterFunc())
    return (
        <productContext.Provider value={{ state, dispatch, inventoryFunc, filterFunc }}>{children}</productContext.Provider>
    )
}

export default ContextProvider