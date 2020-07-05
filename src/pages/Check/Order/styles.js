import styled from 'styled-components/native';

export const Row = styled.View`
    flex-direction: row;
    margin-top: 20px;
    justify-content: space-between;
    align-items: center;
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

export const InputView = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 20px;
    border-bottom-color: #ddd;
    border-bottom-width: 1px;
`;

export const Input = styled.TextInput`
    border: 1px solid #808080;
    padding: 5px 10px;
    width: 80%;
`;

export const Button = styled.TouchableOpacity`
    padding: ${props => props.padding || '10px 15px'};
    align-items: center;
    justify-content: center;
    background: #ff5300;
    width: ${props => props.width || 'undefined'};
    align-self: center;
`;

export const TableInfo = styled.View`
    width: 100%;
    padding: 10px;
    align-items: center;
    border: ${props => props.border || '1px solid #ff5300'};
`;

export const Check = styled.View`
    margin-top: 30px;
    padding: 0 30px;
`;

export const CheckStatus = styled.View`
    margin-top: 10px;
    padding: 5px;
    align-items: center;
`;

export const Footer = styled.View`
    border-top-width: 1px;
    border-top-color: #808080;
`;

export const CheckItemsList = styled.FlatList`
    height: 180px;
`;

export const CheckItem = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border-top-width: 1px;
    border-top-color: #ddd;
`;

export const Total = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px 30px;
    margin-bottom: 20px;
`;

export const Payment = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
    margin-bottom: 5px;
`;

export const Info = styled.View`
    width: ${props => props.width};
`;

export const PaymentCode = styled.View`
    align-items: center;
`;

export const CheckModal = styled.View`
    flex: 1;
    background: rgba(0, 0, 0, 0.7);
    align-items: center;
    justify-content: center;
`;

export const CheckView = styled.View`
    background: #fff;
    width: 350px;
    height: 450px;
    padding: 10px 30px;
`;

export const PlaceView = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    margin: 20px 0 10px 0;
`;

export const PlaceInfo = styled.View``;

export const PlaceLogo = styled.Image`
    width: 70px;
    height: 70px;
`;

export const PaymentButtons = styled.View`
    flex-direction: row;
`;

export const PaymentButton = styled.TouchableOpacity`
    width: ${props => props.width};
    background: ${props => props.background};
    align-items: center;
    padding: 5px 0;
    border: 2px solid #ff5300;
`;

export const Title = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-bottom-width: 2px;
    border-bottom-color: #ff5300;
    margin-top: 10px;
`;

export const EmptyPlaceContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const EmptyPlaceContainerText = styled.Text`
    color: #dfe1e5;
    text-align: center;
`;
