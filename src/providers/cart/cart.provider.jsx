import { useEffect, useState } from 'react';

import CartContext from '../../context/cart/cart.context';

import {
    addItemToCart, removeItemFromCart,
    clearItemFormCart, getCartTotalPrice,
    getCartItemsCount
} from './cart.utils';

const CartProvider = ({ children }) => {
    const [hidden, setHidden] = useState(true);
    const [cartItems, setCartItems] = useState([]);
    const [cartTotalPrice, setCartTotalPrice] = useState(0);
    const [cartItemsCount, setCartItemsCount] = useState(0);
    const toggleCartHidden = () => setHidden(!hidden);

    const addItem = item => setCartItems(addItemToCart(cartItems, item));
    const removeItem = item => setCartItems(removeItemFromCart(cartItems, item));
    const clearItem = item => setCartItems(clearItemFormCart(cartItems, item));

    useEffect(() =>{
        setCartTotalPrice(getCartTotalPrice(cartItems));
        setCartItemsCount(getCartItemsCount(cartItems));
    }, [cartItems]);

    return (
        <CartContext.Provider
            value={{
                hidden,
                cartItems,
                toggleCartHidden,
                addItem,
                removeItem,
                clearItem,
                cartTotalPrice,
                cartItemsCount
            }}
        >
            {children}
        </CartContext.Provider>
    )
};

export default CartProvider;