import { useShop } from "../context/ShopContext";

 const ProductList = () => {
    const { products, addToCart } = useShop();

    return (
        <div className="ml-11" >

        {products.map((p, i) => (
            
            
            <div key={i} >
                
                 <button 
                 className="bg-blue-700 rounded "
                 onClick={() => addToCart(p)} >
                 {`Add ${p.name} = ${p.price} lv`}
            </button>
            </div>
            
           
        ))}
        </div>
        
        
    )
}

export default ProductList;

// import type { Product } from "../types";

// type Props = {
//     products: Product[];
//     addToCart: (product: Product) => void;
// };

// const ProductList = ({ products, addToCart }: Props) => {
//     return (
//         <div className="grid gap-4" >
//             <h2 
//             className="mt-11 text-xl bg-red-700"
//             >Products</h2>

//             {products.map((p, index) => (
//                 <div
//                 className="bg-white p-4 mt-11 rounded-xl shadow flex justify-between items-center"
//                 key={index} >
//                     <h3 className="font-bold" >{p.name}</h3>
//                     <p className="text-gray-600" >{p.price}</p>


//                 <button 
//                 className="bg-green-700 text-white px-3 py-1 rounded hover:bg-green-600"
//                 onClick={() => addToCart(p)} >
//                     Add to Cart
//                 </button>
//                 </div>
//             ))}
//         </div>
//     );

// }

// export default ProductList;