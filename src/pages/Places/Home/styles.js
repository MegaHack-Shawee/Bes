import styled from 'styled-components/native';

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
    padding: 20px 0px;
`;

export const ConfirmationData = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 5px 0px;
`;

export const ConfirmationView = styled.View`
    border-top-color: #ddd;
    border-top-width: 1px;
    border-bottom-color: #ddd;
    border-bottom-width: 1px;
    padding: 15px 0;
`;

export const Button = styled.TouchableOpacity`
    background: #e25822;
    padding: ${props => props.padding || '12px 60px'};
    align-self: center;
    margin-top: 20px;
`;

export const NumberOfTables = styled.View`
    flex-direction: row;
`;
export const PlusLessButton = styled.TouchableOpacity`
    padding: 0 10px;
    align-items: center;
`;

export const ReservationButtons = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px;
`;

export const ReservationButton = styled.TouchableOpacity`
    background: ${props => props.background};
    width: ${props => props.width};
    border: 1px solid #e25822;
    align-items: center;
    padding: 5px 0;
`;

export const ReservationMessage = styled.Text`
    text-align: center;
    color: #808080;
    margin-top: 20px;
`;
