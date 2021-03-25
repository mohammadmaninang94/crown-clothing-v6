import CollectionItem from '../../components/collection-item/collection-item.component';

import { CollectionPageTitle, CollectionPageItems } from './collection-page.styles';

const CollectionPage = ({ collection: { title, items } }) => (
    <div className='collection-page'>
        <CollectionPageTitle>{title}</CollectionPageTitle>
        <CollectionPageItems>
            {items.map(item => (<CollectionItem key={item.id} item={item} />))}
        </CollectionPageItems>
    </div>
);

export default CollectionPage;