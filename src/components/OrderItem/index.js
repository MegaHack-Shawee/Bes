import React, {useState} from 'react';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';

import {addItem} from '../../store/modules/Order/actions';

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

const OrderItem = ({item}) => {
    const [checked, setChecked] = useState(false);
    const [ammount, setAmmount] = useState(1);
    const dispatch = useDispatch();

    function handleAddItem() {
        if (ammount <= 9) {
            setAmmount(ammount + 1);
        }
    }
    function handleRemoveItem() {
        if (ammount > 1) {
            setAmmount(ammount - 1);
        }
    }

    function handleOrder() {
        dispatch(addItem({item, ammount}));
        setChecked(false);
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
                    <OrderButton onPress={() => handleOrder()}>
                        <Text color="#fff" weight="bold">
                            Pedir
                        </Text>
                    </OrderButton>
                    <NumberOfItems>
                        <PlusLessButton onPress={handleRemoveItem}>
                            <Text weight="bold">-</Text>
                        </PlusLessButton>
                        <Text>{ammount}</Text>
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
