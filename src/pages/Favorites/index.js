import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Fontisto';

import Header from '../../components/Header';
import Place from '../../components/Place';
import Container from '../../components/Container';
import Modal from '../../components/Modal';
import mockedPlaces from '../../database/mockedPlaces';
import {useFavorites} from '../../hooks/useFavorites';
import {EmptyFavoriteContainer, EmptyFavoriteContainerText} from './styles';

const Favorites = ({navigation}) => {
    const {favoritePlaces} = useFavorites();
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const places = favoritePlaces.map(favorite =>
            mockedPlaces.getPlacesById(favorite),
        );
        setFavorites(places);
    }, [favoritePlaces]);

    if (favorites.length === 0) {
        return (
            <EmptyFavoriteContainer>
                <Icon name="heart-alt" color="#dfe1e5" size={135} />
                <EmptyFavoriteContainerText>
                    Você ainda não adicionou nenhum favorito
                </EmptyFavoriteContainerText>
            </EmptyFavoriteContainer>
        );
    }

    return (
        <Container>
            <Header callback={null} />
            <Modal>
                <FlatList
                    data={favorites}
                    keyExtractor={item => item.id}
                    renderItem={({item: place}) => (
                        <Place
                            place={place}
                            onPress={() =>
                                navigation.navigate('HomeScreen', {place})
                            }
                        />
                    )}
                />
            </Modal>
        </Container>
    );
};

export default Favorites;
