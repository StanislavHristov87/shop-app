import { Link } from "react-router-dom";
import { useShop } from "../context/ShopContext";


const Navbar = () => {
const user = useShop();
    return (
        <nav className="bg-green-700" >
            <h1 className="bg-white font-bold mb-11 mt-11 text-xl flex flex-col items-center justify-center text-center" >Online shopping</h1>
        
        
            <div>
                {user ? 
                <>
                
                <Link className="font-bold mr-11 ml-11" to="cart" > Cart </ Link>
                <Link className="font-bold mr-11 ml-11" to="products" > Product list </ Link>
                <Link className="font-bold mr-11 ml-11" to="addproduct" > Add Product </ Link>
                <Link className="font-bold mr-11 ml-11" to="profile" > Profile </ Link>

                </> : <>
                <Link className="font-bold mr-11 ml-11" to="login" > Login </ Link>
                <Link className="font-bold mr-11 ml-11" to="register" > Register </ Link>
                </>}
            </div>
        </nav>
    )
}

export default Navbar;