import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {View} from 'react-native';
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
} from './styles';

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
    const [numberOfTables, setNumberOfTables] = useState(1);
    const [menu, setMenu] = useState([]);
    const dispatch = useDispatch();
    const {place} = route.params;

    // useEffect(() => {
    //     setMenu(mockedMenus.getMenuById(place.id));
    // }, [place.id]);

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
                    {tab === 'reservation' && (
                        <>
                            <ReservationData>
                                <Text color="#808080" weight="bold">
                                    Data
                                </Text>
                                <Text>00/00</Text>
                            </ReservationData>
                            <ReservationData>
                                <Text color="#808080" weight="bold">
                                    Horário
                                </Text>
                                <Text>00:00</Text>
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
                            <Button>
                                <Text color="#fff" weight="bold">
                                    Reservar
                                </Text>
                            </Button>
                        </>
                    )}
                </Body>
            </Modal>
        </Container>
    );
};

export default Home;
