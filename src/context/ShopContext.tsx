import { createContext, useContext, useState } from "react";
import type { Product } from "../types";
import { ref, push } from "firebase/database";
import { db } from "../firebase/firebase";
import { useEffect } from "react";
import { onValue } from "firebase/database";
import { auth } from '../firebase/firebase';
import { onAuthStateChanged, type User } from 'firebase/auth';


type ShopContextType = {
    products: Product[];
    cart: Product[];
    addProduct: (p: Product) => void;
    addToCart: (p: Product) => void;
    removeFromCart: (p: Product) => void;
    user: User | null;
    profile: Profile | null;
};

type Profile = {
  uid: string;
  firstName: string;
  lastName: string;
  handle: string;
  email: string;
};

 const ShopContext = createContext<ShopContextType | null>(null);
  

 export const ShopProvider = ({ children }: { children: React.ReactNode }) => {
    
    const [products, setProducts] = useState<Product[]>([]);
    const [cart, setCart] = useState<Product[]>([]);
    const [profile, setProfile] = useState<Profile | null >(null);
    const [user, setUser] = useState<User | null>(null);
    

useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  return () => unsubscribe();
}, []);


    useEffect(() => {
        const productsRef = ref(db, "products");

        onValue(productsRef, (snapshot) => {
            const data = snapshot.val();

            if (data) {
                const loaded = Object.values(data);
                setProducts(loaded as Product[]);
            } else {
                setProducts([])
            }
        })


    }, []);

    useEffect(() => {
      if (!user?.uid) return;

      const userRef = ref(db, `users/${user.uid}`);
      const unsub = onValue(userRef, (snapshot) => {
        setProfile(snapshot.val());
      })
    
      return () => unsub();
    }, [user]);
    

    const addProduct = (p: Product) => {
       push(ref(db, "products"), p)
    };

    const addToCart = (p: Product) => {
        setCart([...cart, p]);
    };

    const removeFromCart = (p: Product) => {
  setCart(prev => prev.filter(item => item !== p));
};

    

    return (
        <ShopContext.Provider
        value={{
            products,
             cart, 
             addProduct, 
             addToCart, 
             removeFromCart, 
             user, 
             profile
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