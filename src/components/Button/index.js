import React from 'react';
import {View} from 'react-native';

import {Touch} from './styles';
import Text from '../Text';

const Button = ({title, disabled, callback}) => {
    return (
        <Touch
            background={disabled ? '#1c1c1c' : '#ffcc00'}
            onPress={callback}
            disabled={disabled}>
            <Text color="#fff" weight="bold">
                {title}
            </Text>
        </Touch>
    );
};

export default Button;
