import type { Product } from "../types";

type Props = {
    products: Product[];
    addToCart: (product: Product) => void;
};

const ProductList = ({ products, addToCart }: Props) => {
    return (
        <div>
            <h2>Products</h2>

            {products.map((p, index) => (
                <div key={index} >
                    <h3>{p.name}</h3>
                    <p>{p.price}</p>


                <button onClick={() => addToCart(p)} >
                    Add to Cart
                </button>
                </div>
            ))}
        </div>
    );

}

export default ProductList;