import React, {useState, useEffect, useCallback} from 'react';
import {StatusBar} from 'react-native';

import splash from '../../assets/images/splash.png';
import logo from '../../assets/icons/splash_icon.png';

import Form from '../../components/Form';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Text from '../../components/Text';

import * as validation from '../../utils/validations';
import {handleInputChange} from '../../utils/handlers';

import {Container, LogoView, FormView, Logo, Touch} from './styles';

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

    const handleSignIn = useCallback(() => {
        navigation.replace('TabsScreen');
    }, [navigation]);

    return (
        <Container source={splash}>
            <StatusBar backgroundColor="#ff5300" barStyle="ligght-content" />
            <LogoView>
                <Logo source={logo} />
            </LogoView>
            <FormView>
                <Form>
                    {emailError !== validation.errors.valid && (
                        <Text color="#00f" size="10px">
                            {emailError.message}
                        </Text>
                    )}
                    <Input
                        border={emailError.border}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        placeholder="Digite seu e-mail"
                        placeholderTextColor="#ddd"
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
                    {passwordError !== validation.errors.valid && (
                        <Text color="#00f" size="10px">
                            {passwordError.message}
                        </Text>
                    )}
                    <Input
                        border={passwordError.border}
                        autoCapitalize="none"
                        placeholder="Digite sua senha"
                        placeholderTextColor="#ddd"
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
                        title="ENTRAR"
                        disabled={isButtonDisabled}
                        callback={handleSignIn}
                    />
                    <Touch onPress={() => navigation.replace('SignUpScreen')}>
                        <Text color="#fff">Cadastre-se</Text>
                    </Touch>
                </Form>
            </FormView>
        </Container>
    );
};

export default SignIn;
