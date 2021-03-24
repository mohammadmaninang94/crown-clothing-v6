import { useContext } from 'react';

import ShopContext from '../../context/shop/shop.context';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { CollectionPageTitle, CollectionPageItems } from './collection-page.styles';

const CollectionPage = (props) => {
    const { collections } = useContext(ShopContext);
    const { title, items } = collections[props.match.params.collectionId];
    return (
        <div className='collection-page'>
            <CollectionPageTitle>{title}</CollectionPageTitle>
            <CollectionPageItems>
                {items.map(item => (<CollectionItem key={item.id} item={item} />))}
            </CollectionPageItems>
        </div>
    )
};

export default CollectionPage;