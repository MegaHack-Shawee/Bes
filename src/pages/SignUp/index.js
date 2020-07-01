import React, {useState} from 'react';
import {View} from 'react-native';

import Container from '../../components/Container';
import Form from '../../components/Form';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Text from '../../components/Text';
// import { Container } from './styles';

const SignUp = () => {
    const [name, setName] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    function handleSignUp() {
        console.warn('Signing up');
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
