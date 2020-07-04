import React from 'react';

import Text from '../Text';
import {Row, Photo, ItemInfo} from './styles';

const MenuItem = ({item}) => {
    return (
        <Row onPress={() => console.warn(item.name)}>
            <ItemInfo>
                <Text color="#808080" weight="bold" numberOfLines={1}>
                    {item.name}
                </Text>
                <Text color="#808080" size="10px" numberOfLines={2}>
                    {item.description}
                </Text>
                <Text
                    color="#ff5300"
                    size="12px"
                    weight="bold"
                    numberOfLines={1}>
                    R$ {item.price}
                </Text>
            </ItemInfo>
            <Photo>
                <Text>Foto</Text>
            </Photo>
        </Row>
    );
};

export default MenuItem;
