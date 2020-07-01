import React, {useState, useEffect, useCallback} from 'react';

import Container from '../../components/Container';
import Form from '../../components/Form';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Text from '../../components/Text';
import {Touch} from './styles';

import * as validation from '../../utils/validations';
import {handleInputChange} from '../../utils/handlers';

const SignIn = ({navigation}) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState(validation.errors.valid);
    const [passwordError, SetPasswordError] = useState(validation.errors.valid);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    useEffect(() => {
        if (formIsValid() && isButtonDisabled) {
            setIsButtonDisabled(false);
        }
        if (!formIsValid() && !isButtonDisabled) {
            setIsButtonDisabled(true);
        }
    }, [email, formIsValid, isButtonDisabled, password]);

    const formIsValid = useCallback(() => {
        return (
            emailError === validation.errors.valid &&
            email !== '' &&
            passwordError === validation.errors.valid &&
            password !== ''
        );
    }, [email, emailError, password, passwordError]);

    function handleSignIn() {
        navigation.navigate('HomeScreen');
    }

    return (
        <Container>
            <Form>
                {emailError === validation.errors.valid && <Text>E-mail:</Text>}
                {emailError !== validation.errors.valid && (
                    <Text color="#f00" size="10px">
                        {emailError.message}
                    </Text>
                )}
                <Input
                    border={emailError.border}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={email => {
                        handleInputChange(
                            email,
                            setEmail,
                            validation.isEmail,
                            emailError,
                            setEmailError,
                            validation.errors.invalidEmail,
                        );
                    }}
                />
                {passwordError === validation.errors.valid && (
                    <Text>Senha::</Text>
                )}
                {passwordError !== validation.errors.valid && (
                    <Text color="#f00" size="10px">
                        {passwordError.message}
                    </Text>
                )}
                <Input
                    border={passwordError.border}
                    autoCapitalize="none"
                    value={password}
                    onChangeText={password => {
                        handleInputChange(
                            password,
                            setPassword,
                            validation.isPassword,
                            passwordError,
                            SetPasswordError,
                            validation.errors.invalidPassword,
                        );
                    }}
                />
                <Button
                    title="Entrar"
                    disabled={isButtonDisabled}
                    callback={handleSignIn}
                />
                <Touch onPress={() => navigation.navigate('SignUpScreen')}>
                    <Text>Cadastre-se</Text>
                </Touch>
            </Form>
        </Container>
    );
};

export default SignIn;
