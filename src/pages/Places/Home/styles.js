import styled from 'styled-components/native';

export const PlaceName = styled.Text`
    align-self: center;
    font-size: 20px;
    font-weight: bold;
    color: #ff5300;
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
    width: 70%;
    flex-direction: row;
    border: 1px solid #ddd;
    border-radius: 30px;
`;

export const Touch = styled.TouchableOpacity`
    width: 50%;
    align-items: center;
    padding: 6px 0;
    margin: 6px 0;
    border-right-color: #ddd;
    border-right-width: ${props => props.borderRight || 0};
`;

export const Body = styled.View`
    padding: 0 40px;
`;

export const ReservationData = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom-color: #ddd;
    border-bottom-width: 1px;
    padding: 20px 0;
`;

export const Button = styled.TouchableOpacity`
    background: #e25822;
    border-radius: 30px;
    padding: 10px 60px;
    align-self: center;
    margin-top: 30px;
`;

export const NumberOfTables = styled.View`
    flex-direction: row;
`;
export const PlusLessButton = styled.TouchableOpacity`
    padding: 0 10px;
    align-items: center;
`;
