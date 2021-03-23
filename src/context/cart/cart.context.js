import { createContext } from 'react';

const CartContext = createContext({
    hidden: true,
    items: [],
    cartTotalPrice: 0,
    cartItemsCount: 0,
    toggleCartHidden: () => {},
    addItem: () => {},
    removeItem: () => {},
    clearItem: () => {}
});

export default CartContext;