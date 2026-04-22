import type { Product } from "../types";

type Props = {
    cart: Product[];
};

const Cart = ({ cart }: Props) => {

    const total = cart.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className="bg-white mt-11 p-4 rounded-xl shadow" >
            <h2 className="text-xl font-semibold bg-black">Cart</h2>
            {cart.map((item, index) => (
                <div
                className="flex justify-between"
                key={index} >
                    <span>{item.name}</span>
                    <span>{item.price} lv
                </span>
                </div>
                
            ))}

            <h3 className="font-bold mt-11 bg-blue-700">
                total: {total} lv
            </h3>
        </div>
    )
}

export default Cart;