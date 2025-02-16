import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import CarShop from "./components/CarShop";
import Owners from "./components/Owners";

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="carShop">Car Shop</Link>
          </li>
          <li>
            <Link to="ownerList">Owners</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/carShop" element={<CarShop />} />
        <Route path="/ownerList" element={<Owners />} />
      </Routes>
    </Router>
  );
};

export default App;
