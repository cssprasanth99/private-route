import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Product } from "./pages/Product";
import { Contact } from "./pages/Contact";
import { Login } from "./pages/Login";
import { authContext } from "./context/AuthContext";
import { useContext } from "react";
import { PrivateRoute } from "./PrivateRoute";

function App() {
  const { isAuth, setIsAuth } = useContext(authContext);

  return (
    <>
      <div style={{ display: "flex", gap: "10px" }}>
        <Link to="/">Home</Link>
        <Link to="/product">Product</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Login</Link>
        <button onClick={() => setIsAuth(!isAuth)}>{`Login ${isAuth}`}</button>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/product"
          element={
            <PrivateRoute>
              <Product />
            </PrivateRoute>
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
