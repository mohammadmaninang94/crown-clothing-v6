import { useEffect, useState } from 'react';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import ShopContext from '../../context/shop/shop.context';

const ShopProvider = ({ children }) => {
    const [collections, setCollections] = useState(null);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const collectionsSnapshot = firestore.collection('collections');
        collectionsSnapshot.get().then(snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            setCollections(collectionsMap);
            setMessage('');
        }).catch(error => {
            setMessage(error.message);
        });
    }, [setCollections]);

    return (
        <ShopContext.Provider value={{
            collections,
            message
        }}>
            {children}
        </ShopContext.Provider>
    );
};

export default ShopProvider;