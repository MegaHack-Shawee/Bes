import React from 'react';
import {FlatList} from 'react-native';

import OrderItem from '../OrderItem';
// import { Container } from './styles';

const MenuItemList = ({items}) => {
    function handleOrder() {
        console.warn('ordering');
    }

    return (
        <FlatList
            data={items}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
                <OrderItem item={item} callback={handleOrder} />
            )}
        />
    );
};

export default MenuItemList;
