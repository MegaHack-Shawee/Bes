import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Text from '../Text';
import {Row, Touch} from './styles';

const Header = ({callback}) => {
    return (
        <Row>
            <Touch onPress={callback}>
                <Icon name="arrow-back" color="#fff" size={35} />
            </Touch>
            <Text color="#fff" size="18px">
                BES
            </Text>
            <Text>Logo</Text>
        </Row>
    );
};

export default Header;
