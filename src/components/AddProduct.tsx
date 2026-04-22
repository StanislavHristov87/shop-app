
import { useState } from "react";
import type { Product } from "../types";

type Props = {
    addProduct: (product: Product) => void;
};

const AddProduct = ({ addProduct }: Props) => {
    
    const [name, setName] = useState("");
    const [price,setPrice] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        addProduct({
            name,
            price: Number(price),
        });

        setName("");
        setPrice("");
    };

    return(
        <form 
        onSubmit={handleSubmit}
        className="bg-white p-4 rounded-xl shadow space-y-3"
        >

            <h2 
            className=" bg-green-700 text-xl font-semibold" >
                Add Product
            </h2>
        
            <input
            className="w-full border p-2 rounded"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />

            <input
            className="w-full border p-2 rounded"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            />

            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700" >Add</button>
        </form>
    );


}

export default AddProduct;