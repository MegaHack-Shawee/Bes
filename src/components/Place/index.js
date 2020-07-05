import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Text from '../Text';
import {PlaceView, PlaceInfo, PlaceLogo} from './styles';
import {useFavorites} from '../../hooks/useFavorites';
import placeLogo from '../../assets/images/place_logo.png';

const Place = ({place}) => {
    const {addToFavorites} = useFavorites();

    return (
        <PlaceView>
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
                name="star-border"
                color="#808080"
                size={35}
                onPress={() => addToFavorites(place)}
            />
        </PlaceView>
    );
};

export default Place;
