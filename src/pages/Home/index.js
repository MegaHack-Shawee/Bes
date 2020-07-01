import React, {useState} from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Container from '../../components/Container';
import Header from '../../components/Header';
import Modal from '../../components/Modal';
import Text from '../../components/Text';
import MenuItemList from '../../components/MenuItemList';
import {PlaceName, Body, Row, Buttons, Touch, Stars} from './styles';

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
    return (
        <Container>
            <Header callback={() => navigation.goBack()} />
            <Modal>
                <PlaceName>Place Name</PlaceName>
                <Body>
                    <Row>
                        <Buttons>
                            <Touch onPress={() => setTab('menu')}>
                                <Text
                                    color={tab === 'menu' ? '#e25822' : '#ddd'}>
                                    Menu
                                </Text>
                            </Touch>
                            <Touch onPress={() => setTab('reservation')}>
                                <Text
                                    color={
                                        tab === 'reservation'
                                            ? '#e25822'
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
                            <Icon name="star" color="#ffd700" size={25} />
                        </Stars>
                    </Row>
                    {tab === 'menu' && <MenuItemList items={items} />}
                </Body>
            </Modal>
        </Container>
    );
};

export default Home;
