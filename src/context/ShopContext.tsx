import { createContext, useContext, useState } from "react";
import type { Product } from "../types";

type ShopContextType = {
    products: Product[];
    cart: Product[];
    addProduct: (p: Product) => void;
    addToCart: (p: Product) => void;
    removeFromCart: (p: Product) => void;
};


 const ShopContext = createContext<ShopContextType | null>(null);
  

 export const ShopProvider = ({ children }: { children: React.ReactNode }) => {
    
    const [products, setProducts] = useState<Product[]>([]);
    const [cart, setCart] = useState<Product[]>([]);

    const addProduct = (p: Product) => {
        setProducts([...products, p]);
    };

    const addToCart = (p: Product) => {
        setCart([...cart, p]);
    };

    const removeFromCart = (p: Product) => {
  setCart(prev => prev.filter(item => item !== p));
};

    return (
        <ShopContext.Provider
        value={{products, cart, addProduct, addToCart, removeFromCart
        }}
        >
            {children}
        </ShopContext.Provider>
    )
 };

// eslint-disable-next-line react-refresh/only-export-components
export const useShop = () => {
    const context = useContext(ShopContext);
    if (!context) throw new Error("useShop must be used inside Provider");
    return context;
    
 };