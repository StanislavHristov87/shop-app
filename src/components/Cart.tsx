import type { Product } from "../types";

type Props = {
    cart: Product[];
};

const Cart = ({ cart }: Props) => {

    const total = cart.reduce((sum, item) => sum + item.price, 0);

    return (
        <div>
            <h2>Cart</h2>
            {cart.map((item, index) => (
                <p key={index} >
                    {item.name} - {item.price} lv
                </p>
            ))}

            <h3>
                total: {total} lv
            </h3>
        </div>
    )
}

export default Cart;