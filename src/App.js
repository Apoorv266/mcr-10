import { Route, Routes } from 'react-router-dom';
import './App.css';
import SideBar from './Components/SideBar';
import Inventory from "./Pages/Inventory";
import Department from "./Pages/Department"
import Product from './Pages/Product';
import AddProduct from './Pages/AddProduct';
import SingleProduct from './Pages/SingleProduct';
function App() {
  return (
    <div className="App">
      <SideBar />
      <div className="left-bar">
        <Routes>
          <Route path="/" element={<Inventory />} />
          <Route path="/departments" element={<Department/>} />
          <Route path="/products" element={<Product/>}/>
          <Route path="/add-product" element={<AddProduct/>}/>
          <Route path="/product/:productId" element={<SingleProduct/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
