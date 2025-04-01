import { forwardRef, useContext } from "react";
import Button from "./Button";
import CartContext from "../../store/CartContext";

const Modal = forwardRef(({ onCloseModal, onCheckout }, ref) => {
	const cartCtx = useContext(CartContext);
	const { items } = cartCtx;
    console.log("Cart Context:", cartCtx);


    console.log("Cart Items:", items);

	const totalAmount = items
    .reduce((sum, item) => sum + parseFloat(item.price) * item.quantity, 0)
    .toFixed(2);


	const formattedTotal = new Intl.NumberFormat("et-EE", {
        style: "currency",
        currency: "EUR",
    }).format(Number(totalAmount));

	return (
		<dialog className="modal cart" ref={ref}>
			<h2>Your Cart</h2>

			<ul>
				{items.length > 0 ? (
					items.map((item) => (
						<li className="cart-item" key={item.id}>
							<h3>{item.name}</h3>
							<p>
								Quantity: {item.quantity} | Price: €{Number(item.price).toFixed(2)}
							</p>
						</li>
					))
				) : (
					<p>Your cart is empty.</p>
				)}
			</ul>

			{items.length > 0 && (
				<div className="cart-total">
					<h3>Total: {formattedTotal}</h3>
				</div>
			)}

			<div className="modal-actions">
				<Button textOnly={true} onClick={onCloseModal}>
					Close
				</Button>

				{items.length > 0 && (
					<Button textOnly={false} onClick={onCheckout}>
						Checkout
					</Button>
				)}
			</div>
		</dialog>
	);
});

export default Modal;
