import { Fragment, useContext } from 'react';

import CartContext from '../../context/cart/cart.context';

import CheckoutTable from '../../components/checkout-table/checkout-table.component';
import StripeButton from '../../components/stripe-button/stripe-button.component';

import { CheckoutPageContainer, CheckoutPageEmpty, StripeButtonContainer } from './checkout-page.styles';

const CheckoutPage = () => {
    const { cartItems, cartTotalPrice } = useContext(CartContext);

    return (
        <CheckoutPageContainer>
            {cartTotalPrice ? (
                <Fragment>
                    <CheckoutTable cartItems={cartItems} cartTotalPrice={cartTotalPrice} />
                    <StripeButtonContainer>
                        <StripeButton total={cartTotalPrice} />
                    </StripeButtonContainer>
                </Fragment>
            ) : <CheckoutPageEmpty>You cart is empty</CheckoutPageEmpty>}
        </CheckoutPageContainer>
    )
};

export default CheckoutPage;