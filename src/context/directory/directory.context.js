import { createContext } from 'react';

import SECTIONS_DATA from '../../assests/data/sections.data';

const DirectoryContext = createContext(SECTIONS_DATA);

export default DirectoryContext;