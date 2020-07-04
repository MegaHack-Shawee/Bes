import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import cardIcon from '../../../assets/icons/card_icon.png';

import {addItem} from '../../../store/modules/Order/actions';

import Container from '../../../components/Container';
import Header from '../../../components/Header';
import Modal from '../../../components/Modal';
import Text from '../../../components/Text';
import Place from '../../../components/Place';
import OrderItemList from '../../../components/OrderItemList';
import OrderList from '../../../components/Order';
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
    Check,
    CheckStatus,
    Footer,
    CheckItemsList,
    CheckItem,
    Total,
    Payment,
    Info,
    PaymentCode,
} from './styles';

const Order = ({navigation}) => {
    const [tab, setTab] = useState('menu');
    const [tableNumber, setTableNumber] = useState('');
    const [isTableSet, setIsTableSet] = useState(false);
    const [isCheckClosed, setIsCheckClosed] = useState(false);
    const [isPaid, setIsPaid] = useState(false);

    const place = useSelector(state => state.CurrentPlace);
    const menu = useSelector(state => state.CurrentMenu);

    const dispatch = useDispatch();

    const order = useSelector(state => state.Order);

    function handleOrder() {
        setTab('order');
    }

    return (
        <Container>
            <Header />
            <Modal>
                <Place place={place} />
                <Body>
                    {!isCheckClosed && (
                        <Row>
                            <Buttons>
                                <Touch
                                    onPress={() => setTab('menu')}
                                    borderRight="1px">
                                    <Text
                                        color={
                                            tab === 'menu' ? '#ff5300' : '#ddd'
                                        }>
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
                    )}
                    {!isTableSet && !isCheckClosed && (
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
                    {isTableSet && !isCheckClosed && (
                        <TableInfo>
                            <Text color="#ff5300">{tableNumber}</Text>
                        </TableInfo>
                    )}
                    {tab === 'menu' && !isCheckClosed && (
                        <>
                            <OrderItemList items={menu} />
                            {isTableSet && (
                                <Button
                                    width="170px"
                                    padding="5px 10px"
                                    onPress={handleOrder}>
                                    <Text color="#fff">Pedir</Text>
                                </Button>
                            )}
                        </>
                    )}
                    {tab === 'menu' && isCheckClosed && (
                        <>
                            <Check>
                                <TableInfo border="1px solid #808080">
                                    <Text color="#808080" weight="bold">
                                        {tableNumber}
                                    </Text>
                                </TableInfo>
                                <CheckStatus>
                                    <Text
                                        color="#808080"
                                        size="17px"
                                        numberOfLines={1}>
                                        COMANDA FECHADA
                                    </Text>
                                    <Text
                                        color="#808080"
                                        size="20px"
                                        weight="bold">
                                        36721982
                                    </Text>
                                </CheckStatus>
                                <CheckItemsList
                                    data={menu}
                                    keyExtractor={item => item.id}
                                    renderItem={({item}) => (
                                        <CheckItem>
                                            <Text color="#808080" size="8px">
                                                {item.name}
                                            </Text>
                                            <Text color="#999999" size="8px">
                                                R$ {item.price}
                                            </Text>
                                        </CheckItem>
                                    )}
                                />
                            </Check>
                            <Footer>
                                {!isPaid && (
                                    <>
                                        <Total>
                                            <Text>Total</Text>
                                            <Text color="#ff5300" weight="bold">
                                                R$ 256.70
                                            </Text>
                                        </Total>
                                        <Button
                                            width="200px"
                                            onPress={() => setIsPaid(true)}>
                                            <Text color="#fff" weight="bold">
                                                PAGAR
                                            </Text>
                                        </Button>
                                    </>
                                )}
                                {isPaid && (
                                    <>
                                        <Payment>
                                            <Info width="15%">
                                                <Image source={cardIcon} />
                                            </Info>
                                            <Info width="60%">
                                                <Text size="8px">
                                                    Crédito **** **** **** 3682
                                                </Text>
                                            </Info>
                                            <Info width="25%">
                                                <Text
                                                    size="10px"
                                                    color="#ff5300"
                                                    weight="bold">
                                                    R$ 256.70
                                                </Text>
                                            </Info>
                                        </Payment>
                                        <PaymentCode>
                                            <Text color="#808080" weight="bold">
                                                PAGAMENTO REALIZADO
                                            </Text>
                                            <Text color="#ff5300" weight="bold">
                                                CÓD 23
                                            </Text>
                                            <Text color="#808080" size="8px">
                                                Dia 23/07 de 2020 às 23hrs
                                            </Text>
                                        </PaymentCode>
                                    </>
                                )}
                            </Footer>
                        </>
                    )}
                    {tab === 'order' && <OrderList items={order} />}
                </Body>
            </Modal>
        </Container>
    );
};

export default Order;
