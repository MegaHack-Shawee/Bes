import React from 'react';
import {View, Text, Button} from 'react-native';

// import { Container } from './styles';

const SignIn = ({navigation}) => {
    return (
        <View>
            <Text>Sig in screen</Text>
            <Button
                title="sign up"
                onPress={() => navigation.navigate('SignUpScreen')}
            />
        </View>
    );
};

export default SignIn;
