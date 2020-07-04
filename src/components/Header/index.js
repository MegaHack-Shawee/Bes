import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import logo from '../../assets/icons/splash_icon.png';
import Text from '../Text';
import {Row, Touch, LogoArea, Logo} from './styles';

const Header = ({callback}) => {
    return (
        <Row>
            {callback && (
                <Touch onPress={callback}>
                    <Icon name="arrow-back" color="#fff" size={35} />
                </Touch>
            )}
            {!callback && (
                <View>
                    <Icon name="arrow-back" color="#ffcc00" size={35} />
                </View>
            )}
            <Text color="#fff" size="18px">
                BES
            </Text>
            <LogoArea>
                <Logo source={logo} />
            </LogoArea>
        </Row>
    );
};

export default Header;
