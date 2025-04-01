import { createContext, useState } from "react";

const CartContext = createContext({
	items: [],
	addItem: () => {},
	removeItem: () => {},
	clearItems: () => {},
});

export const CartContextProvider = ({ children }) => {
	const [items, setItems] = useState([]);

	const addItem = (item) => {
		setItems((prevItems) => {
			const existingItemIndex = prevItems.findIndex(
				(cartItem) => cartItem.id === item.id
			);

			if (existingItemIndex !== -1) {
				const updatedItems = [...prevItems];
				updatedItems[existingItemIndex].quantity += item.quantity;
				return updatedItems;
			} else {
				return [...prevItems, { ...item, quantity: item.quantity }];
			}
		});
	};

	const removeItem = (id, amount = 1) => {
		setItems((prevItems) => {
			const existingItemIndex = prevItems.findIndex(
				(cartItem) => cartItem.id === id
			);

			if (existingItemIndex !== -1) {
				const updatedItems = [...prevItems];
				updatedItems[existingItemIndex].quantity -= amount;

				if (updatedItems[existingItemIndex].quantity <= 0) {
					updatedItems.splice(existingItemIndex, 1);
				}
				return updatedItems;
			}
			return prevItems;
		});
	};

	const clearItems = () => {
		setItems([]);
	};

	return (
		<CartContext.Provider value={{ items, addItem, removeItem, clearItems }}>
			{children}
		</CartContext.Provider>
	);
};

export default CartContext;
