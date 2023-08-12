import { Route, Routes } from 'react-router-dom';
import './App.css';
import SideBar from './Components/SideBar';
import Inventory from "./Pages/Inventory";
import Department from "./Pages/Department"
import Product from './Pages/Product';
function App() {
  return (
    <div className="App">
      <SideBar />
      <div className="left-bar">
        <Routes>
          <Route path="/" element={<Inventory />} />
          <Route path="/departments" element={<Department/>} />
          <Route path="/products" element={<Product/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
