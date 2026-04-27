
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ShopProvider } from './context/ShopContext.tsx'


createRoot(document.getElementById('root')!).render(
 
  <ShopProvider>
  <App/>
 </ShopProvider>
 
)
