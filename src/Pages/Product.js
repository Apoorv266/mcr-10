import React, { useContext } from "react";
import ProductFilters from "../Components/ProductFilters";
import "../Style/Product.css";
import { productContext } from "../Context/ContextProvider";

const Product = () => {
  const { filterFunc } = useContext(productContext);
  return (
    <div>
      <ProductFilters />

      <table>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Stock</th>
          <th>Supplier</th>
        </tr>

        {filterFunc()?.length > 0 ? filterFunc()?.map((item) => {
          return (
            <tr key={item.id}>
              <td>
                <img
                  src={item.imageUrl}
                  alt="product"
                  srcset=""
                  width={"250px"}
                />
              </td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>${item.price}</td>
              <td>{item.stock}</td>
              <td>{item.supplier}</td>
            </tr>
          );
        }) :<tr><td className="empty-product" colSpan={10}>No products to display</td></tr> }
      </table>
    </div>
  );
};

export default Product;
