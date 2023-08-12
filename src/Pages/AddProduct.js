import React, { useContext, useState } from "react";
import "../Style/Addproduct.css";
import { productContext } from "../Context/ContextProvider";
import { useNavigate } from "react-router-dom";
const AddProduct = () => {
  const { dispatch } = useContext(productContext);
  const navigate = useNavigate()
  const inputValues = {
    name: "",
    department: "",
    description: "",
    price: 0,
    stock: 0,
    sku: "",
    supplier: "",
    delivered: 0,
    imageUrl: "",
  }
  const [value, setvalue] = useState(inputValues);

  const handleInputFunc = (e) => {
    setvalue({ ...value, [e.target.name]: e.target.value });
  };

  const handleProductFunc = () => {
    if (!Object.values(value).includes("")) {
      dispatch({type : "ADD_PRODUCT", payload :value })
      setvalue(inputValues)
      navigate("/products")
    }
  };
  return (
    <div className="addproduct-main flex-center">
      <h1>Add new Product !</h1>
      <h4>Department : </h4>
      <select name="department" onChange={handleInputFunc} defaultValue={"All"}>
        <option value="All" disabled>
          Select department
        </option>
        <option value="Kitchen" name="department">
          Kitchen
        </option>
        <option value="Clothing" name="department">
          Clothes
        </option>
        <option value="Toys" name="department">
          Toys
        </option>
      </select>
      <h4>Name : </h4>
      <input
        type="text"
        name="name"
        value={value.name}
        onChange={handleInputFunc}
      />
      <h4>description : </h4>
      <textarea
        name="description"
        value={value.description}
        onChange={handleInputFunc}
      />
      <h4>Price : </h4>
      <input
        type="number"
        defaultValue={0}
        name="price"
        value={value.price}
        onChange={handleInputFunc}
      />
      <h4>Stock : </h4>
      <input
        type="number"
        defaultValue={0}
        name="stock"
        value={value.stock}
        onChange={handleInputFunc}
      />
      <h4>sku : </h4>
      <input
        type="text"
        name="sku"
        value={value.sku}
        onChange={handleInputFunc}
      />
      <h4>Supplier : </h4>
      <input
        type="text"
        name="supplier"
        value={value.supplier}
        onChange={handleInputFunc}
      />
      <h4>Delivered : </h4>
      <input
        type="number"
        defaultValue={0}
        name="delivered"
        value={value.delivered}
        onChange={handleInputFunc}
      />
      <h4>image URL : </h4>
      <input
        type="text"
        name="imageUrl"
        value={value.imageUrl}
        onChange={handleInputFunc}
      />

      <button className="new-btn" onClick={handleProductFunc}>
        Add product
      </button>
    </div>
  );
};

export default AddProduct;
