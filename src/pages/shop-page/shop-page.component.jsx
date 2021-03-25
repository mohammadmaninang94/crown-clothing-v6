import { Route } from 'react-router-dom';
import { Fragment } from 'react';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection-page/collection-page.container';

const ShopPage = ({ match }) => (
    <Fragment>
        <Route exact path={match.path} render={() => {
            return (
                <div className='shop-page'>
                    <CollectionsOverviewContainer />
                </div>
            )
        }} />
        <Route path={`${match.path}/:collectionId`} render={routerProps => <CollectionPageContainer {...routerProps} />} />
    </Fragment>
);

export default ShopPage;