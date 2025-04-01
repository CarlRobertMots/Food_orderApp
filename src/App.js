import { useReducer } from "react";

import Header from "./components/Header";
import Meals from "./components/Meals";

import { CartContextProvider } from "./store/CartContext";

const initialState = {
	items: [],
};

const reducer = (state, action) => {
	switch (action.type) {
		case "ADD_ITEM":
			const existingItemIndex = state.items.findIndex(
				(cartItem) => cartItem.id === action.item.id
			);

			if (existingItemIndex !== -1) {
				const updatedItems = [...state.items];
				updatedItems[existingItemIndex] = {
					...updatedItems[existingItemIndex],
					quantity: updatedItems[existingItemIndex].quantity + 1,
				};
				return { ...state, items: updatedItems };
			} else {
				return {
					...state,
					items: [...state.items, { ...action.item, quantity: 1 }],
				};
			}

		case "REMOVE_ITEM":
			const updatedItemsAfterRemoval = state.items
				.map((item) =>
					item.id === action.id
						? { ...item, quantity: item.quantity - action.amount }
						: item
				)
				.filter((item) => item.quantity > 0);
			return { ...state, items: updatedItemsAfterRemoval };

		case "CLEAR_ITEMS":
			return { ...state, items: [] };

		default:
			return state;
	}
};

const App = () => {
	const [cartState, dispatchCartAction] = useReducer(reducer, initialState);

	const addItemToCartHandler = (item) => {
		dispatchCartAction({ type: "ADD_ITEM", item });
	};

	const removeItemFromCartHandler = (id, amount = 1) => {
		dispatchCartAction({ type: "REMOVE_ITEM", id, amount });
	};

	const clearCartHandler = () => {
		dispatchCartAction({ type: "CLEAR_ITEMS" });
	};

	const cartContextValue = {
		items: cartState.items,
		addItem: addItemToCartHandler,
		removeItem: removeItemFromCartHandler,
		clearItems: clearCartHandler,
	};

	return (
		<CartContextProvider value={cartContextValue}>
			<Header />
			<main>
				<Meals />
			</main>
		</CartContextProvider>
	);
};

export default App;
