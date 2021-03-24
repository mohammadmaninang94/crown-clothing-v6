import { Route } from 'react-router-dom';
import { useContext, Fragment } from 'react';

import ShopContext from '../../context/shop/shop.context';

import CollectionPage from '../collection-page/collection-page.component';
import CollectionsOveriew from '../../components/collections-overview/collections-overview.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionsOveriewWithSpinner = WithSpinner(CollectionsOveriew);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({ match }) => {
    const { collections } = useContext(ShopContext);
    return (
        <Fragment>
            <Route exact path={match.path} render={() => {
                return (
                    <div className='shop-page'>
                        <CollectionsOveriewWithSpinner isLoading={!collections} collections={collections} />
                    </div>
                )
            }} />
            <Route path={`${match.path}/:collectionId`} render={routerProps => <CollectionPageWithSpinner isLoading={!collections} collections={collections} {...routerProps} />} />
        </Fragment>
    )
}

export default ShopPage;