import styled from 'styled-components/native';

export const PlaceView = styled.TouchableOpacity`
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    padding: 0 30px;
    margin-top: 20px;
`;

export const PlaceInfo = styled.View`
    width: 50%;
`;

export const PlaceLogo = styled.Image`
    width: 70px;
    height: 70px;
`;
