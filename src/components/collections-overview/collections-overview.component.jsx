import CollectionPreview from '../collection-preview/collection-preview.component';

const CollectionsOveriew = ({ collections }) => {
    const collectionForPreview = collections ?
        Object.keys(collections).map(key => collections[key]) : null;
    return (
        <div className='collection-overview'>
            { collectionForPreview.map(({ id, ...otherProps }) => (
                <CollectionPreview key={id} {...otherProps} />
            ))}
        </div>
    )
};

export default CollectionsOveriew;