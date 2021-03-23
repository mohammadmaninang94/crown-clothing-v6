import { useContext } from 'react';

import CartContext from '../../context/cart/cart.context';

import { CartIconContainer, ShoppingIcon, ItemCountContainer } from './cart-icon.styles';

const CartIcon = () => {
    const { toggleCartHidden, cartItemsCount } = useContext(CartContext);

    return (
        <CartIconContainer onClick={toggleCartHidden}>
            <ShoppingIcon />
            <ItemCountContainer>{cartItemsCount}</ItemCountContainer>
        </CartIconContainer>
    )
};

export default CartIcon;