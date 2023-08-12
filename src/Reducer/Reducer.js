import { inventoryData } from "../Data/Data"

export const initialData = {
    data : inventoryData
}

export const reducerFunc = (state, action) => {
const {type, payload}  = action
switch (type) {
    case "value":
        
        break;

    default:
        break;
}
}