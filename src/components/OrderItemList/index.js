import React from 'react';
import {FlatList} from 'react-native';

import OrderItem from '../OrderItem';
import {OrderList} from './styles';

const MenuItemList = ({items}) => {
    return (
        <OrderList
            data={items}
            keyExtractor={item => item.id}
            renderItem={({item}) => <OrderItem item={item} />}
        />
    );
};

export default MenuItemList;
