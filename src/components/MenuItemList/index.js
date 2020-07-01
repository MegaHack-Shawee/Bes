import React from 'react';
import {FlatList} from 'react-native';

import MenuItem from '../MenuItem';
// import { Container } from './styles';

const MenuItemList = ({items}) => {
    return (
        <FlatList
            data={items}
            keyExtractor={item => item.id}
            renderItem={({item}) => <MenuItem item={item} />}
        />
    );
};

export default MenuItemList;
