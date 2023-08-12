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
        default:
            return state
    }
}