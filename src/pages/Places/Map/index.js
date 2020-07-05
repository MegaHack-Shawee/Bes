import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import map from '../../../assets/images/map.png';

import Container from '../../../components/Container';
import Header from '../../../components/Header';
import Modal from '../../../components/Modal';
import Place from '../../../components/Place';
import mockedPlaces from '../../../database/mockedPlaces';
import {Body, InputView, Input, Touch, GPS} from './styles';

const Map = ({navigation}) => {
    const [name, setName] = useState('');
    const [streetOrZipcode, setStreetOrZipcode] = useState('');
    const [found, setFound] = useState(false);
    const [places, setPlaces] = useState([]);

    function filterByName() {
        setPlaces(mockedPlaces.getPlacesByName(name));
        if (places.length > 0) {
            setFound(true);
        }
    }

    function filterByStreetOrZipcode() {
        setPlaces(mockedPlaces.getPlacesByStreetOrZipcode(streetOrZipcode));
        if (places.length > 0) {
            setFound(true);
        }
    }

    function renderPlaces() {
        return places.map(place => (
            <Place
                key={place.id}
                onPress={() => navigation.navigate('HomeScreen', {place})}
                place={place}
            />
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
                            placeholderTextColor="#dfe1e5"
                            value={streetOrZipcode}
                            onChangeText={setStreetOrZipcode}
                        />
                        <Touch onPress={filterByStreetOrZipcode}>
                            <Icon name="search" color="#dfe1e5" size={30} />
                        </Touch>
                    </InputView>
                    <InputView>
                        <Input
                            placeholder="Nome do estabelecimento"
                            placeholderTextColor="#dfe1e5"
                            value={name}
                            onChangeText={setName}
                        />
                        <Touch onPress={filterByName}>
                            <Icon name="search" color="#dfe1e5" size={30} />
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
