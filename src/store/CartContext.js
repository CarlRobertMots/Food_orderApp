import { createContext, useReducer } from "react";

const cartReducer = (state, action) => {
    if (action.type === "ADD_ITEM") {
        const existingItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
        );

        let updatedItems;

        // Konverteeri `price` numberiks enne lisamist
        const itemWithNumericPrice = {
            ...action.item,
            price: parseFloat(action.item.price), // Veendu, et price on number
        };

        if (existingItemIndex !== -1) {
            updatedItems = [...state.items];
            updatedItems[existingItemIndex] = {
                ...updatedItems[existingItemIndex],
                quantity: updatedItems[existingItemIndex].quantity + 1,
            };
        } else {
            updatedItems = [...state.items, { ...itemWithNumericPrice, quantity: 1 }];
        }

        return { items: updatedItems };
    }

    if (action.type === "REMOVE_ITEM") {
        const existingItemIndex = state.items.findIndex(
            (item) => item.id === action.id
        );

        if (existingItemIndex === -1) return state;

        let updatedItems = [...state.items];

        if (updatedItems[existingItemIndex].quantity > 1) {
            updatedItems[existingItemIndex] = {
                ...updatedItems[existingItemIndex],
                quantity: updatedItems[existingItemIndex].quantity - 1,
            };
        } else {
            updatedItems.splice(existingItemIndex, 1);
        }

        return { items: updatedItems };
    }

    if (action.type === "CLEAR_CART") {
        return { items: [] };
    }

    return state;
};

const CartContext = createContext({
    items: [],
    addItem: () => {},
    removeItem: () => {},
    clearCart: () => {},
});

export const CartContextProvider = ({ children }) => {
    const [cartState, dispatch] = useReducer(cartReducer, { items: [] });

    const addItem = (item) => {
        dispatch({ type: "ADD_ITEM", item });
    };

    const removeItem = (id) => {
        dispatch({ type: "REMOVE_ITEM", id });
    };

    const clearCart = () => {
        dispatch({ type: "CLEAR_CART" });
    };

    return (
        <CartContext.Provider value={{ 
            items: cartState.items, 
            addItem, 
            removeItem, 
            clearCart 
        }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;
