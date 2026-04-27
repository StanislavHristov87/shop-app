import { Routes, Route, BrowserRouter } from "react-router-dom";
import AddProduct from "./components/AddProduct";
import Cart from "./components/Cart";
import ProductList from "./components/ProductList";
import Register from "./components/Register";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Profile from "./components/Profile";



const App = () => {


  
  return (
<BrowserRouter>
    <>
    
    <Navbar />
    
    </>
     <Routes>
<Route path="/" element={<HomePage />} />
<Route path="/profile" element={<Profile />} />
<Route path="/cart" element={<Cart/>} />
<Route path="/addproduct" element={<AddProduct />} />
<Route path="/products" element={<ProductList />} />
<Route path="/register" element={<Register />} />
<Route path="/login" element={<Login />} />

     </Routes>
</BrowserRouter>
  )

}
export default App;
