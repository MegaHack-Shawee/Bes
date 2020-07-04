import React from 'react';
import {View} from 'react-native';

import Text from '../Text';
import {OrderList, ItemBody, Row, ItemInfo, Photo} from './styles';

const renderItem = order => {
    return (
        <ItemBody>
            <Row>
                <ItemInfo>
                    <Text color="#808080" weight="bold" numberOfLines={1}>
                        {order.item.name}
                    </Text>
                    <Text color="#808080" size="10px" numberOfLines={2}>
                        {order.item.description}
                    </Text>
                    <Text color="#808080" size="10px" numberOfLines={2}>
                        Qtd: {order.ammount}
                    </Text>
                    <Text
                        color="#ff5300"
                        size="12px"
                        weight="bold"
                        numberOfLines={1}>
                        R$ {order.item.price}
                    </Text>
                </ItemInfo>
                <Photo>
                    <Text>Foto</Text>
                </Photo>
            </Row>
        </ItemBody>
    );
};

const Order = ({items}) => {
    return (
        <OrderList
            data={items}
            keyExtractor={item => item.id}
            renderItem={({item}) => renderItem(item)}
        />
    );
};

export default Order;
