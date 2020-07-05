import React, {useState, useEffect, useCallback} from 'react';
import {useSelector} from 'react-redux';
import {Image, Modal} from 'react-native';
import Toast from 'react-native-simple-toast';
import Icon from 'react-native-vector-icons/MaterialIcons';

import cardIcon from '../../../assets/icons/card_icon.png';

import Container from '../../../components/Container';
import Header from '../../../components/Header';
import ContainerModal from '../../../components/Modal';
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
    CheckModal,
    CheckView,
    PlaceView,
    PlaceLogo,
    PlaceInfo,
    PaymentButtons,
    PaymentButton,
    Title,
} from './styles';

const Order = ({navigation}) => {
    const [tab, setTab] = useState('menu');
    const [tableNumber, setTableNumber] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(true);
    const [isTableSet, setIsTableSet] = useState(false);
    const [isCheckClosed, setIsCheckClosed] = useState(false);
    const [isPaid, setIsPaid] = useState(false);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setIsModalVisible(true);
        });

        return unsubscribe;
    }, [navigation]);

    const place = useSelector(state => state.CurrentPlace);
    const menu = useSelector(state => state.CurrentMenu);
    const order = useSelector(state => state.Order);

    const handleOrder = useCallback(() => {
        setTab('order');
    }, []);

    const calculateTotal = useCallback(() => {
        var total = 0;
        order.map(or => {
            total += parseFloat(or.item.price) * or.ammount;
        });
        return total;
    }, [order]);

    const handlePayment = useCallback(() => {
        const cashBack = calculateTotal() * 0.02;
        Toast.show(`Você acaba de ganhar R$ ${cashBack.toFixed(2)} de cashbes`);
        // Add new cashback to cashbes list
        setIsPaid(true);
        setIsModalVisible(false);
    }, [calculateTotal]);

    function renderModal() {
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={() => {
                    console.warn('Modal has been closed.');
                }}>
                <CheckModal>
                    <Text
                        color="#fff"
                        weight="bold"
                        size="18px"
                        onPress={() => setIsModalVisible(false)}>
                        Sair
                    </Text>
                    <CheckView>
                        <PlaceView>
                            <PlaceLogo />
                            <PlaceInfo>
                                <Text
                                    size="18px"
                                    weight="bold"
                                    color="#ff5300"
                                    numberOfLines={2}>
                                    {place.name}
                                </Text>
                                <Text color="#808080" weight="bold">
                                    {place.street}, {place.number}
                                </Text>
                                <Text color="#808080" size="8px" weight="bold">
                                    {place.distance}
                                </Text>
                            </PlaceInfo>
                        </PlaceView>
                        <PaymentButtons>
                            <PaymentButton
                                background="#ff5300"
                                width="60%"
                                onPress={handlePayment}>
                                <Text color="#fff" weight="bold">
                                    Encerrar comanda
                                </Text>
                            </PaymentButton>
                            <PaymentButton
                                background="#fff"
                                width="40%"
                                disabled={true}>
                                <Text color="#ff5300" weight="bold">
                                    Mesa {tableNumber}
                                </Text>
                            </PaymentButton>
                        </PaymentButtons>
                        <Title>
                            <Text size="18px" color="#ff5300">
                                COMANDA
                            </Text>
                            <Text size="18px" color="#39ff14">
                                ABERTA
                            </Text>
                        </Title>
                        <CheckItemsList
                            data={order}
                            keyExtractor={item => item.item.id}
                            renderItem={({item}) => (
                                <CheckItem>
                                    <Text color="#808080" size="8px">
                                        {item.item.name} x{item.ammount}
                                    </Text>
                                    <Text color="#999999" size="8px">
                                        R$ {item.item.price}
                                    </Text>
                                </CheckItem>
                            )}
                        />
                        <Total>
                            <Text>Total</Text>
                            <Text color="#ff5300" weight="bold">
                                R$ {calculateTotal()}
                            </Text>
                        </Total>
                    </CheckView>
                </CheckModal>
            </Modal>
        );
    }

    return (
        <Container>
            <Header />
            <ContainerModal>
                {renderModal()}
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
                                        Mesa {tableNumber}
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
                                    data={order}
                                    keyExtractor={item => item.item.id}
                                    renderItem={({item}) => (
                                        <CheckItem>
                                            <Text color="#808080" size="8px">
                                                {item.item.name} x{item.ammount}
                                            </Text>
                                            <Text color="#999999" size="8px">
                                                R$ {item.item.price}
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
                                                R$ {calculateTotal()}
                                            </Text>
                                        </Total>
                                        <Button
                                            width="200px"
                                            onPress={() => handlePayment()}>
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
                                                    R$ {calculateTotal()}
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
            </ContainerModal>
        </Container>
    );
};

export default Order;
