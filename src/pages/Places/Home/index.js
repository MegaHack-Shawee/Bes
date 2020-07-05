import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {setCurrentPlace} from '../../../store/modules/CurrentPlace/actions';
import {setCurrentMenu} from '../../../store/modules/CurrentMenu/actions';

import petisco from '../../../assets/images/petisco.jpg';
import pizza from '../../../assets/images/pizza.jpg';
import longneck from '../../../assets/images/longneck.jpg';

import Container from '../../../components/Container';
import Header from '../../../components/Header';
import Modal from '../../../components/Modal';
import Text from '../../../components/Text';
import Place from '../../../components/Place';
import MenuItemList from '../../../components/MenuItemList';
import mockedMenus from '../../../database/mockedMenus';
import {
    Body,
    Row,
    Buttons,
    Touch,
    Stars,
    ReservationData,
    Button,
    NumberOfTables,
    PlusLessButton,
    ConfirmationData,
    ConfirmationView,
    ReservationButtons,
    ReservationButton,
    ReservationMessage,
} from './styles';
import {ScrollView} from 'react-native-gesture-handler';

const items = [
    {
        id: '1',
        name: 'pizza',
        description: 'calabresa com cebola',
        price: '50.00',
        photo: pizza,
    },
    {
        id: '2',
        name: 'petiscos',
        description: 'calabresa, frango, carne, azeitona',
        price: '35.00',
        photo: petisco,
    },
    {
        id: '3',
        name: 'Combo long neck 6un',
        description: 'skol, brahma ou antarctica',
        price: '72.00',
        photo: longneck,
    },
    {
        id: '4',
        name: 'Combo long neck 6un',
        description: 'skol, skol ou antarctica',
        price: '72.00',
        photo: longneck,
    },
    {
        id: '5',
        name: 'Combo long neck 6un',
        description: 'skol, antarctica ou antarctica',
        price: '72.00',
        photo: longneck,
    },
];

const Home = ({route, navigation}) => {
    const [tab, setTab] = useState('menu');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [numberOfTables, setNumberOfTables] = useState(1);
    const [isBooked, setIsBooked] = useState(false);
    const [btnColor, setBtnColor] = useState('#e25822');
    // const [menu, setMenu] = useState([]);
    const dispatch = useDispatch();
    const {place} = route.params;
    console.log(place);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    // useEffect(() => {
    //     setMenu(mockedMenus.getMenus());
    // });

    function handleGoToOrderMenu() {
        dispatch(setCurrentPlace(place));
        dispatch(setCurrentMenu(items));
        navigation.navigate('Comanda');
    }

    function handleAddTable() {
        if (numberOfTables <= 9) {
            setNumberOfTables(numberOfTables + 1);
        }
    }
    function handleRemoveTable() {
        if (numberOfTables > 1) {
            setNumberOfTables(numberOfTables - 1);
        }
    }
    return (
        <Container>
            <Header callback={() => navigation.goBack()} />
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
                            <Touch onPress={() => setTab('reservation')}>
                                <Text
                                    color={
                                        tab === 'reservation'
                                            ? '#ff5300'
                                            : '#ddd'
                                    }>
                                    Reserva
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
                    {tab === 'menu' && (
                        /*menu.length > 0 &&*/ <>
                            <MenuItemList items={items} />
                            <Button
                                padding="8px 15px"
                                onPress={handleGoToOrderMenu}>
                                <Text color="#fff">Entrar no menu</Text>
                            </Button>
                        </>
                    )}
                    {tab === 'reservation' && !isBooked && (
                        <>
                            <ReservationData>
                                <Text color="#808080" weight="bold">
                                    Data
                                </Text>
                                <TextInput
                                    placeholder="00/00"
                                    placeholderTextColor="#000"
                                    maxLength={5}
                                    value={date}
                                    onChangeText={setDate}
                                />
                            </ReservationData>
                            <ReservationData>
                                <Text color="#808080" weight="bold">
                                    Horário
                                </Text>
                                <TextInput
                                    placeholder="00:00"
                                    placeholderTextColor="#000"
                                    maxLength={5}
                                    value={time}
                                    onChangeText={setTime}
                                />
                            </ReservationData>
                            <ReservationData>
                                <Text color="#808080" weight="bold">
                                    Quantidade de mesas
                                </Text>
                                <NumberOfTables>
                                    <PlusLessButton onPress={handleAddTable}>
                                        <Text weight="bold">+</Text>
                                    </PlusLessButton>
                                    <Text>{numberOfTables}</Text>
                                    <PlusLessButton onPress={handleRemoveTable}>
                                        <Text weight="bold">-</Text>
                                    </PlusLessButton>
                                </NumberOfTables>
                            </ReservationData>
                            <Button onPress={() => setIsBooked(true)}>
                                <Text color="#fff" weight="bold">
                                    Reservar
                                </Text>
                            </Button>
                        </>
                    )}
                    {tab === 'reservation' && isBooked && (
                        <>
                            <Text color="#808080" size="20px" weight="bold">
                                Reserva 637827
                            </Text>
                            <ConfirmationView>
                                <ConfirmationData>
                                    <Text color="#808080" weight="bold">
                                        Data
                                    </Text>
                                    <Text color="#808080" weight="bold">
                                        {date}/2020
                                    </Text>
                                </ConfirmationData>
                                <ConfirmationData>
                                    <Text color="#808080" weight="bold">
                                        Horário
                                    </Text>
                                    <Text color="#808080" weight="bold">
                                        {time}
                                    </Text>
                                </ConfirmationData>
                                <ConfirmationData>
                                    <Text color="#808080" weight="bold">
                                        Quantidade de mesas
                                    </Text>
                                    <Text color="#808080" weight="bold">
                                        {numberOfTables}
                                    </Text>
                                </ConfirmationData>
                            </ConfirmationView>
                            <Text color="#808080">
                                Nome: Rogério dos Santos
                            </Text>
                            <ReservationButtons>
                                <ReservationButton
                                    onPress={() => setBtnColor('#808080')}
                                    background={btnColor}
                                    width="45%">
                                    <Text color="#fff" weight="bold">
                                        Check In
                                    </Text>
                                </ReservationButton>
                                <ReservationButton
                                    onPress={() => setIsBooked(false)}
                                    background="#fff"
                                    width="45%">
                                    <Text color="#e25822" weight="bold">
                                        Cancelar
                                    </Text>
                                </ReservationButton>
                            </ReservationButtons>
                            <ReservationMessage>
                                Atenção: Ao chegar ao local apresente o número
                                da reservaao garçon e faça o check in
                            </ReservationMessage>
                        </>
                    )}
                </Body>
            </Modal>
        </Container>
    );
};

export default Home;
