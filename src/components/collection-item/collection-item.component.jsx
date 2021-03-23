import { useContext } from 'react';

import CartContext from '../../context/cart/cart.context';

import { convertToPHPCurrency } from '../component.utils';

import {
    CollectionItemContainer, CollectionItemImg,
    CollectionItemFigCaption, CollectionItemTitle,
    CollectionItemPrice, CollectionItemButton
} from './collection-item.styles';

const CollectionItem = ({ item }) => {
    const { name, imageUrl, price } = item;
    const { addItem } = useContext(CartContext);
    return (
        <CollectionItemContainer>
            <CollectionItemImg src={imageUrl} alt={name} />
            <CollectionItemFigCaption>
                <CollectionItemTitle>{name}</CollectionItemTitle>
                <CollectionItemPrice>{convertToPHPCurrency(price)}</CollectionItemPrice>
            </CollectionItemFigCaption>
            <CollectionItemButton
                isInverted onClick={() => addItem(item)}
            >add to cart</CollectionItemButton>
        </CollectionItemContainer>
    )
};

export default CollectionItem;