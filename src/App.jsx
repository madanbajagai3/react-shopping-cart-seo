import { Helmet } from "react-helmet-async";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <Helmet>
        <title>React Helmet</title>
        <meta name="keywords" content="HTML, CSS, JavaScript, e-commerce" />
        <meta name="author" content="Madan Bazgai" />
      </Helmet>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </div> 
    </>
  );
}

export default App;
