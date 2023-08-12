import { inventoryData } from "../Data/Data"

export const initialData = {
    data: inventoryData,
    dprtFilter: "All",
    LSIFilter: false,
    sortFilter: "none"
}

export const reducerFunc = (state, action) => {
    const { type, payload } = action
    switch (type) {
        case "DPRT_FILTER":
            return { ...state, dprtFilter: payload }
        case "LSI_FILTER":
            return { ...state, LSIFilter: payload }
        case "SORT_FILTER":
            return { ...state, sortFilter: payload }
            case "ADD_PRODUCT":
                
                const obj = {...payload, id : state.data.length + 1, price : parseInt(payload.price), stock :parseInt(payload.stock), delivered : parseInt(payload.delivered)}

                return { ...state, data: [...state.data,obj] }
        default:
            return state
    }
}