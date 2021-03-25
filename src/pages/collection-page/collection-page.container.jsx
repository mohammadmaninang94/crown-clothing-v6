import { useContext } from 'react';

import ShopContext from '../../context/shop/shop.context';

import CollectionPage from '../collection-page/collection-page.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const CollectionPageContainer = ({ match }) => {
    const { collections } = useContext(ShopContext);
    const collection = collections ? collections[match.params.collectionId] : null;
    return (
        <CollectionPageWithSpinner isLoading={!collections} collection={collection} />
    )
};


export default CollectionPageContainer;