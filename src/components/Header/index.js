import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import logo from '../../assets/icons/splash_icon.png';

import {Row, Touch, LogoArea, Logo} from './styles';

const Header = ({callback}) => {
    return (
        <Row callback={!!callback}>
            {callback && (
                <Touch onPress={callback}>
                    <Icon name="arrow-back" color="#fff" size={30} />
                </Touch>
            )}
            <LogoArea>
                <Logo source={logo} />
            </LogoArea>
        </Row>
    );
};

export default Header;
