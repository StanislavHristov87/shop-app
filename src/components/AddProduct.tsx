
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
        <form onSubmit={handleSubmit}>
            <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />

            <input
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            />

            <button>Add</button>
        </form>
    );


}

export default AddProduct;