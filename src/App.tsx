

import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import Cart from './components/Cart';


const App = () => {


  return (
    <>
     <h1 className="text-3xl font-bold mb-6 bg-green-100 text-center" >Online shop</h1>
    
      <AddProduct  />
      <ProductList  />
      <Cart  />
      
    </>
  )
}

export default App
