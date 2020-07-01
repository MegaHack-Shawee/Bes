import React from 'react';
import {View} from 'react-native';

import {Touch, Text} from './styles';

const Button = ({title, disabled, callback}) => {
    return (
        <Touch
            background={disabled ? '#1c1c1c' : '#00f'}
            onPress={callback}
            disabled={disabled}>
            <Text>{title}</Text>
        </Touch>
    );
};

export default Button;
