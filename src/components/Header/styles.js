import styled from 'styled-components/native';

export const Row = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: ${props =>
        props.callback ? 'space-between' : 'flex-end'};
    align-items: center;
    padding: 20px 30px 20px 30px;
    height: 40px;
`;

export const Touch = styled.TouchableOpacity``;

export const LogoArea = styled.View`
    width: 54px;
    height: 54px;
    align-items: center;
    justify-content: center;
    background: #e25822;
    padding: 10px;
    border-radius: 27px;
`;

export const Logo = styled.Image`
    width: 28px;
    height: 41px;
`;
