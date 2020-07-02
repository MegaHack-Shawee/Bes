import React, {useState} from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import map from '../../../assets/images/map.png';

import Container from '../../../components/Container';
import Header from '../../../components/Header';
import Modal from '../../../components/Modal';
import Text from '../../../components/Text';
import Button from '../../../components/Button';
import {
    Body,
    InputView,
    Input,
    Touch,
    GPS,
    Place,
    PlaceInfo,
    PlaceIcon,
} from './styles';

const places = [
    {
        id: '1',
        name: 'Fulanos bar',
        street: 'Av. Paulista',
        number: '1027',
        distance: '7.8 km',
    },
    {
        id: '2',
        name: 'Beltranos bar & lanchonete',
        street: 'Av. Paulista',
        number: '1900',
        distance: '11.2 km',
    },
];

const Map = ({navigation}) => {
    const [found, setFound] = useState(false);

    function renderPlaces() {
        return places.map(place => (
            <Place
                key={place.id}
                onPress={() => navigation.navigate('HomeScreen', {place})}>
                <PlaceInfo>
                    <Text color="#808080" weight="bold">
                        {place.name}
                    </Text>
                    <Text color="#808080">
                        {place.street}, {place.number}
                    </Text>
                    <Text color="#808080" size="8px">
                        {place.distance}
                    </Text>
                </PlaceInfo>
                <PlaceIcon />
            </Place>
        ));
    }

    return (
        <Container>
            <Header callback={null} />
            <Modal>
                <Body>
                    <InputView>
                        <Input
                            placeholder="Rua/CEP"
                            placeholderTextColor="#ddd"
                        />
                        <Touch onPress={() => setFound(!found)}>
                            <Icon name="search" color="#ddd" size={30} />
                        </Touch>
                    </InputView>
                    <InputView>
                        <Input
                            placeholder="Nome do estabelecimento"
                            placeholderTextColor="#ddd"
                        />
                        <Touch onPress={() => setFound(!found)}>
                            <Icon name="search" color="#ddd" size={30} />
                        </Touch>
                    </InputView>
                    {found && renderPlaces()}
                    <GPS source={map} />
                </Body>
            </Modal>
        </Container>
    );
};
export default Map;
