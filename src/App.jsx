import "./assets/css/app.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Details from "./pages/Details";
import Cart from "./pages/Cart";
import Congratulation from "./pages/Congratulation";
import NotFound from "./pages/NotFound";
import Provider from "./helpers/hooks/useGlobalContext";

function App() {
  return (
    <Provider>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/categories/:idc" element={<Details />} />
          <Route path="/categories/:idc/products/:idp" element={<Details />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/congratulation" element={<Congratulation />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
