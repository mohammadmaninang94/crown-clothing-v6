import { useContext } from 'react';

import DirectoryContext from '../../context/directory/directory.context';

import MenuItem from '../menu-item/menu-item.components';

import { DirectoryContainer } from './directory.styles';

const Directory = () => {
    const sections = useContext(DirectoryContext);
    return (
        <DirectoryContainer>
            {
                sections.map(({ id, ...otherProps }) => (
                    <MenuItem key={id} {...otherProps} />
                ))
            }
        </DirectoryContainer>
    )
};

export default Directory;