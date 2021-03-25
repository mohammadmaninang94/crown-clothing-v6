import { useContext } from 'react';

import ShopContext from '../../context/shop/shop.context';

import CollectionsOveriew from '../../components/collections-overview/collections-overview.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionsOveriewWithSpinner = WithSpinner(CollectionsOveriew);


const CollectionsOverviewContainer = () => {
    const { collections } = useContext(ShopContext);

    return (
        <CollectionsOveriewWithSpinner isLoading={!collections} collections={collections} />
    )
};


export default CollectionsOverviewContainer;