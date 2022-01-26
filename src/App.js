import logo from "./logo.svg";
import "./App.css";
import ShipmentList from "./components/shipmentList/ShipmentList";
import Shipment from "./components/shipment/Shipment";
import NavBar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <div>
        <Routes>
          <Route path="/" element={<ShipmentList />} />
          <Route path="/shipment/:shipmentId" element={<Shipment />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
