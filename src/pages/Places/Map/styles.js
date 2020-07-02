import styled from 'styled-components/native';

export const Input = styled.TextInput`
    padding: 10px;
    width: 85%;
`;

export const InputView = styled.View`
    flex-direction: row;
    align-items: center;
    border: 2px solid #ddd;
    margin-top: 20px;
`;

export const Touch = styled.TouchableOpacity`
    padding: 10px;
`;

export const Body = styled.ScrollView`
    padding: 0 20px;
`;

export const GPS = styled.Image`
    width: 100%;
    margin-top: 20px;
`;

export const Place = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border: 2px solid #ff5300;
    margin-top: 20px;
`;

export const PlaceInfo = styled.View`
    width: 75%;
    padding: 10px 5px 10px 20px;
`;

export const PlaceIcon = styled.View`
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background: #808080;
    margin: 0 20px 0 0;
`;
