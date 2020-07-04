import React from 'react';

import OrderItem from '../OrderItem';
import {OrderList} from './styles';

const MenuItemList = ({items}) => {
    function handleOrder() {
        console.warn('ordering');
    }

    return (
        <OrderList
            data={items}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
                <OrderItem item={item} callback={handleOrder} />
            )}
        />
    );
};

export default MenuItemList;
