import styled from 'styled-components/native';

export const ItemBody = styled.View`
    border-bottom-color: #ddd;
    border-bottom-width: 1px;
`;

export const Row = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
`;
export const ItemInfo = styled.View`
    width: 55%;
    padding-right: 5px;
`;

export const Photo = styled.Image`
    height: 70px;
    width: 100px;
`;

export const RadioButtonView = styled.View`
    height: 100%;
    padding-top: 5px;
    align-items: flex-start;
`;

export const RadioButton = styled.TouchableOpacity`
    width: 20px;
    height: 20px;
    border-radius: 10px;
    border: 2px solid #808080;
    align-items: center;
    justify-content: center;
`;

export const Checked = styled.View`
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background: ${props => props.background};
`;

export const OrderButtonsRow = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 10px;
`;

export const OrderButton = styled.TouchableOpacity`
    background: #ff5300;
    align-items: center;
    justify-content: center;
    padding: 5px;
    width: 50%;
`;

export const NumberOfItems = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 30%;
    border: 1px solid #ddd;
`;
export const PlusLessButton = styled.TouchableOpacity`
    padding: 5px 15px;
    align-items: center;
`;
