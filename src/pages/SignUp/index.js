import React, {useState} from 'react';
import {View} from 'react-native';

import Container from '../../components/Container';
import Form from '../../components/Form';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Text from '../../components/Text';
// import { Container } from './styles';

const SignUp = ({navigation}) => {
    const [name, setName] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    function handleSignUp() {
        navigation.replace('TabsScreen');
    }

    return (
        <Container>
            <Form>
                <Text>Nome:</Text>
                <Input
                    autoCapitalize="words"
                    value={name}
                    onChangeText={setName}
                />
                <Button
                    title="Cadastrar"
                    disabled={isButtonDisabled}
                    callback={handleSignUp}
                />
            </Form>
        </Container>
    );
};

export default SignUp;
