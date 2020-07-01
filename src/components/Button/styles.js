import styled from 'styled-components/native';

export const Touch = styled.TouchableOpacity`
    background: ${props => props.background};
    border-radius: 10px;
    align-items: center;
    justify-content: center;
`;

export const Text = styled.Text`
    color: #fff;
`;
