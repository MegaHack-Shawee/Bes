import React, {useState, useCallback} from 'react';
import {StatusBar} from 'react-native';

import splash from '../../assets/images/splash.png';
import logo from '../../assets/icons/splash_icon.png';

import Form from '../../components/Form';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {Container, LogoView, FormView, Logo} from './styles';
import {ScrollView} from 'react-native-gesture-handler';

const SignUp = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    const handleSignUp = useCallback(() => {
        navigation.replace('TabsScreen');
    }, [navigation]);

    return (
        <Container source={splash}>
            <ScrollView>
                <StatusBar
                    backgroundColor="#ff5300"
                    barStyle="ligght-content"
                />
                <LogoView>
                    <Logo source={logo} />
                </LogoView>
                <FormView>
                    <Form>
                        <Input
                            autoCapitalize="none"
                            placeholder="Nome"
                            placeholderTextColor="#ddd"
                            value={name}
                            onChangeText={name => {
                                setName(name);
                            }}
                        />
                        <Input
                            keyboardType="email-address"
                            autoCapitalize="none"
                            placeholder="Digite seu e-mail"
                            placeholderTextColor="#ddd"
                            value={email}
                            onChangeText={email => {
                                setEmail(email);
                            }}
                        />

                        <Input
                            autoCapitalize="none"
                            placeholder="Digite sua senha"
                            placeholderTextColor="#ddd"
                            value={password}
                            onChangeText={password => {
                                setPassword(password);
                            }}
                        />

                        <Input
                            autoCapitalize="none"
                            placeholder="Confirme sua senha"
                            placeholderTextColor="#ddd"
                            value={passwordConfirmation}
                            onChangeText={password => {
                                setPasswordConfirmation(password);
                            }}
                        />
                        <Button title="Cadastrar" callback={handleSignUp} />
                    </Form>
                </FormView>
            </ScrollView>
        </Container>
    );
};

export default SignUp;
