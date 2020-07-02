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
    padding: 10px 15px;
    align-items: center;
    justify-content: center;
    background: #ff5300;
`;

export const TableInfo = styled.View`
    width: 100%;
    padding: 10px;
    align-items: center;
    background: #ff5300;
`;
