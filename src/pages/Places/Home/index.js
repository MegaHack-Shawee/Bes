import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Container from '../../../components/Container';
import Header from '../../../components/Header';
import Modal from '../../../components/Modal';
import Text from '../../../components/Text';
import Place from '../../../components/Place';
import MenuItemList from '../../../components/MenuItemList';
import mockedMenus from '../../../database/mockedMenus';
import {
    PlaceName,
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

const Home = ({route, navigation}) => {
    const [tab, setTab] = useState('menu');
    const [numberOfTables, setNumberOfTables] = useState(1);
    const [menu, setMenu] = useState([]);
    const {place} = route.params;

    useEffect(() => {
        setMenu(mockedMenus.getMenuById(place.id));
    }, [place.id]);

    function handleGoToOrderMenu() {
        navigation.navigate('Comanda', {Place, menu});
        //Passar o restaurante como parametro para a rota
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
                    {tab === 'menu' && menu.length > 0 && (
                        <>
                            <MenuItemList items={menu} />
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
