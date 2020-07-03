import React, {useState} from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Container from '../../../components/Container';
import Header from '../../../components/Header';
import Modal from '../../../components/Modal';
import Text from '../../../components/Text';
import Place from '../../../components/Place';
import MenuItemList from '../../../components/MenuItemList';
import OrderItemList from '../../../components/OrderItemList';
import {
    Body,
    Row,
    Buttons,
    Touch,
    Stars,
    InputView,
    Input,
    Button,
    TableInfo,
} from './styles';

const place = {
    id: '1',
    name: 'Fulanos bar',
    street: 'Av. Paulista',
    number: '1027',
    distance: '7.8 km',
};

const items = [
    {
        id: '1',
        name: 'pizza',
        description: 'calabresa com cebola',
        price: '50,00',
    },
    {
        id: '2',
        name: 'petiscos',
        description: 'calabresa, frango, carne, azeitona',
        price: '35,00',
    },
    {
        id: '3',
        name: 'Combo long neck 6un',
        description: 'skol, brahma ou antarctica',
        price: '72,00',
    },
];

const Order = () => {
    const [tab, setTab] = useState('menu');
    const [tableNumber, setTableNumber] = useState('');
    const [isTableSet, setIsTableSet] = useState(false);

    return (
        <Container>
            <Header />
            <Modal>
                <Place place={place} />
                <Body>
                    <Row>
                        <Buttons>
                            <Touch
                                onPress={() => setTab('menu')}
                                borderRight="1px">
                                <Text
                                    color={tab === 'menu' ? '#ff5300' : '#ddd'}>
                                    Menu
                                </Text>
                            </Touch>
                            <Touch onPress={() => setTab('order')}>
                                <Text
                                    color={
                                        tab === 'order' ? '#ff5300' : '#ddd'
                                    }>
                                    Pedido
                                </Text>
                            </Touch>
                        </Buttons>
                        <Stars>
                            <Text size="15px" weight="bold">
                                5.0
                            </Text>
                            <Icon name="star" color="#ffcc00" size={25} />
                        </Stars>
                    </Row>
                    {!isTableSet && (
                        <InputView>
                            <Input
                                placeholder="Número da mesa"
                                placeholderTextColor="#808080"
                                keyboardType="numeric"
                                value={tableNumber}
                                onChangeText={setTableNumber}
                            />
                            <Button
                                disabled={tableNumber === '' ? true : false}
                                onPress={() => setIsTableSet(true)}>
                                <Text color="#fff">Ok</Text>
                            </Button>
                        </InputView>
                    )}
                    {isTableSet && (
                        <TableInfo>
                            <Text color="#ff5300">{tableNumber}</Text>
                        </TableInfo>
                    )}
                    {tab === 'menu' && <OrderItemList items={items} />}
                    {tab === 'order' && <Text>Order</Text>}
                </Body>
            </Modal>
        </Container>
    );
};

export default Order;
