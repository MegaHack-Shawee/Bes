import React from 'react';

import Header from '../../components/Header';
import Container from '../../components/Container';
import Modal from '../../components/Modal';

const CashBes = ({navigation}) => {
    return (
        <Container>
            <Header callback={() => navigation.goBack()} />
            <Modal />
        </Container>
    );
};

export default CashBes;
