import { createContext } from 'react';

const ShopContext = createContext({
    collections: null,
    message: '',
    fetchCollections: () => {}
});

export default ShopContext;