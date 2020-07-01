import styled from 'styled-components/native';

export const PlaceName = styled.Text`
    align-self: center;
    font-size: 20px;
    font-weight: bold;
    color: #e25822;
    margin-top: 20px;
`;

export const Row = styled.View`
    flex-direction: row;
    margin-top: 20px;
    justify-content: space-between;
    align-items: center;
    border-bottom-color: #ddd;
    border-bottom-width: 1px;
    padding-bottom: 25px;
`;

export const Stars = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Buttons = styled.View`
    flex-direction: row;
    border: 1px solid #ddd;
    border-radius: 30px;
`;

export const Touch = styled.TouchableOpacity`
    padding: 12px 25px;
`;

export const Body = styled.View`
    padding: 0 40px;
`;
