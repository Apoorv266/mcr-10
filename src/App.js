import { Route, Routes } from 'react-router-dom';
import './App.css';
import SideBar from './Components/SideBar';
import Inventory from './Components/Inventory';

function App() {
  return (
    <div className="App">
      <SideBar />
      <div className="left-bar">
        <Routes>
          <Route path="/" element={<Inventory />} />
          <Route />
          <Route />
        </Routes>
      </div>
    </div>
  );
}

export default App;
