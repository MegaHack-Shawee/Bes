import React, {useState} from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Container from '../../../components/Container';
import Header from '../../../components/Header';
import Modal from '../../../components/Modal';
import Text from '../../../components/Text';
import MenuItemList from '../../../components/MenuItemList';
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

const Home = ({navigation}) => {
    const [tab, setTab] = useState('menu');
    const [numberOfTables, setNumberOfTables] = useState(1);

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
                <PlaceName>Place Name</PlaceName>
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
                    {tab === 'menu' && <MenuItemList items={items} />}
                    {tab === 'reservation' && (
                        <>
                            <ReservationData>
                                <Text color="#1c1c1c" weight="bold">
                                    Data
                                </Text>
                                <Text>00/00</Text>
                            </ReservationData>
                            <ReservationData>
                                <Text color="#1c1c1c" weight="bold">
                                    Horário
                                </Text>
                                <Text>00:00</Text>
                            </ReservationData>
                            <ReservationData>
                                <Text color="#1c1c1c" weight="bold">
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
