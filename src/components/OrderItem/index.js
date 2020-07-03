import React, {useState} from 'react';
import {View} from 'react-native';

import Text from '../Text';
import {
    ItemBody,
    Row,
    Photo,
    ItemInfo,
    RadioButtonView,
    RadioButton,
    Checked,
    OrderButtonsRow,
    OrderButton,
    NumberOfItems,
    PlusLessButton,
} from './styles';

const OrderItem = ({item, callback}) => {
    const [checked, setChecked] = useState(false);
    const [numberOfItems, setNumberOfItems] = useState(1);

    function handleAddItem() {
        if (numberOfItems <= 9) {
            setNumberOfItems(numberOfItems + 1);
        }
    }
    function handleRemoveItem() {
        if (numberOfItems > 1) {
            setNumberOfItems(numberOfItems - 1);
        }
    }

    return (
        <ItemBody>
            <Row>
                <RadioButtonView>
                    <RadioButton onPress={() => setChecked(!checked)}>
                        <Checked background={checked ? '#ff5300' : '#fff'} />
                    </RadioButton>
                </RadioButtonView>
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
            {checked && (
                <OrderButtonsRow>
                    <OrderButton onPress={callback}>
                        <Text color="#fff" weight="bold">
                            Pedir
                        </Text>
                    </OrderButton>
                    <NumberOfItems>
                        <PlusLessButton onPress={handleRemoveItem}>
                            <Text weight="bold">-</Text>
                        </PlusLessButton>
                        <Text>{numberOfItems}</Text>
                        <PlusLessButton onPress={handleAddItem}>
                            <Text weight="bold" color="#ff5300">
                                +
                            </Text>
                        </PlusLessButton>
                    </NumberOfItems>
                </OrderButtonsRow>
            )}
        </ItemBody>
    );
};

export default OrderItem;
