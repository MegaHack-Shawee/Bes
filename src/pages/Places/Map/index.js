import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import map from '../../../assets/images/map.png';

import Container from '../../../components/Container';
import Header from '../../../components/Header';
import Modal from '../../../components/Modal';
import Text from '../../../components/Text';
import mockedPlaces from '../../../database/mockedPlaces';
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

const Map = ({navigation}) => {
    const [found, setFound] = useState(false);
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        setPlaces(mockedPlaces.getPlaces());
    }, []);

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
