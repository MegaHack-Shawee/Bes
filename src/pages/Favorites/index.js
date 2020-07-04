import React, {useEffect} from 'react';
import {View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

import Text from '../../components/Text';
import {Container} from './styles';
import {useFavorites} from '../../hooks/useFavorites';

const Favorites = () => {
    const {favoritePlaces} = useFavorites();

    useEffect(() => {
        console.log(favoritePlaces);
    }, [favoritePlaces]);

    return (
        <Container>
            <FlatList
                data={favoritePlaces}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <View>
                        <Text>{item.name}</Text>
                    </View>
                )}
            />
        </Container>
    );
};

export default Favorites;
