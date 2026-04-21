import { useState } from 'react'

import './App.css'
import type { Product } from './types'
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

const App = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);

    const addProduct = (product: Product) => {
      setProducts([...products, product]);
    };

    const addToCart = (product: Product) => {
      setCart([...cart, product])
    };

  return (
    <>
     <h1>Online shop</h1>

      <AddProduct addProduct={addProduct} />
      <ProductList products={products} addToCart={addToCart} />
      <Cart cart={cart} />
    </>
  )
}

export default App
