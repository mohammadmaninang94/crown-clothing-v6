import { useContext } from 'react';

import { useHistory } from 'react-router-dom';

import CartContext from '../../context/cart/cart.context';

import CartItem from '../cart-item/cart-item.component';

import {
    CartDropdownContainer, CartDropdownItems,
    CartDropdownButton, CartDropdownEmptyMessage
} from './cart-dropdown.styles';

const CartDropdown = () => {
    const { cartItems, toggleCartHidden } = useContext(CartContext);
    const history = useHistory();

    return (
        <CartDropdownContainer>
            <CartDropdownItems itemsCount={cartItems.length}>
                {cartItems.length ?
                    cartItems.map(item => (
                        <CartItem key={item.id} item={item} />
                    )) :
                    <CartDropdownEmptyMessage>You cart is empty</CartDropdownEmptyMessage>
                }
            </CartDropdownItems>
            {cartItems.length ? (
                <CartDropdownButton onClick={() => {
                    history.push('/checkout');
                    toggleCartHidden();
                }}>go to checkout</CartDropdownButton>
            ) : null}
        </CartDropdownContainer>
    )
};

export default CartDropdown;