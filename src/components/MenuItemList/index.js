import React from 'react';

import MenuItem from '../MenuItem';
import {ItemList} from './styles';

const MenuItemList = ({items}) => {
    return (
        <ItemList
            data={items}
            keyExtractor={item => item.id}
            renderItem={({item}) => <MenuItem item={item} />}
        />
    );
};

export default MenuItemList;
