import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

import Text from '../Text';
import {PlaceView, PlaceInfo, PlaceLogo} from './styles';
import {useFavorites} from '../../hooks/useFavorites';
import placeLogo from '../../assets/images/place_logo.png';

const Place = ({place, onPress}) => {
    const {addToFavorites, favoritePlaces} = useFavorites();
    const [isFavorited, setIsFavorited] = useState(false);

    useEffect(() => {
        const ifIsFavorited = favoritePlaces.find(
            item => String(item) === String(place.id),
        );
        ifIsFavorited ? setIsFavorited(true) : setIsFavorited(false);
    }, [favoritePlaces, isFavorited, place.id, setIsFavorited]);

    return (
        <PlaceView onPress={onPress}>
            <PlaceLogo source={placeLogo} />
            <PlaceInfo>
                <Text
                    size="18px"
                    weight="bold"
                    color="#ff5300"
                    numberOfLines={2}>
                    {place.name}
                </Text>
                <Text color="#808080" weight="bold">
                    {place.street}, {place.number}
                </Text>
                <Text color="#808080" size="8px" weight="bold">
                    {place.distance}
                </Text>
            </PlaceInfo>
            <Icon
                name={isFavorited ? 'star' : 'staro'}
                color="#ffcc00"
                size={35}
                onPress={() => addToFavorites(place.id)}
            />
        </PlaceView>
    );
};

export default Place;
