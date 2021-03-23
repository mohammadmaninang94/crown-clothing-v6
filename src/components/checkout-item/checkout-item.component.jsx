import { useContext } from 'react';

import CartContext from '../../context/cart/cart.context';

import { convertToPHPCurrency } from '../../components/component.utils.js';

import {
    CheckoutItemContainer, CheckoutItemProduct, CheckoutItemImg,
    CheckoutItemQty, CheckoutItemArrow, CheckoutItemRemove
} from './checkout-item.styles';

const CheckoutItem = ({ item }) => {
    const { addItem, removeItem, clearItem } = useContext(CartContext);
    const { name, imageUrl, price, quantity } = item;
    const minQtyPerItem = 1;
    const maxQtyPerItem = 10;
    return (
        <CheckoutItemContainer>
            <td>
                <CheckoutItemProduct>
                    <CheckoutItemImg src={imageUrl} alt={name} />
                    <figcaption>{name}</figcaption>
                </CheckoutItemProduct>
            </td>
            <td>
                <CheckoutItemArrow onClick={() => quantity > minQtyPerItem ? removeItem(item) : null}>&#10094;</CheckoutItemArrow>
                <CheckoutItemQty>{quantity}</CheckoutItemQty>
                <CheckoutItemArrow onClick={() => quantity < maxQtyPerItem ? addItem(item) : null}>&#10095;</CheckoutItemArrow>
            </td>
            <td>{convertToPHPCurrency(price)}</td>
            <td><CheckoutItemRemove onClick={() => clearItem(item)}>&#10005;</CheckoutItemRemove></td>
        </CheckoutItemContainer>
    )
};


export default CheckoutItem;