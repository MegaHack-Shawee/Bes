import React from 'react';

import Header from '../../components/Header';
import Container from '../../components/Container';
import Modal from '../../components/Modal';
import {
    CashbackContainer,
    CashBackValue,
    CashbackDescription,
    CashbackHistory,
    CashbackHistoryItem,
    DetailsContainer,
    HistoryTitle,
    HistoryDate,
    PriceContainer,
    HistoryPrice,
} from './styles';

const mockedHistory = [
    {id: 1, title: 'Fulanos bar', date: '04/04/2020', price: 'R$ 5,00'},
    {id: 2, title: 'Fulanos bar', date: '04/04/2020', price: 'R$ 5,00'},
    {id: 3, title: 'Fulanos bar', date: '04/04/2020', price: 'R$ 5,00'},
    {id: 4, title: 'Fulanos bar', date: '04/04/2020', price: 'R$ 5,00'},
];

const CashBes = () => {
    return (
        <Container>
            <Header callback={null} />
            <CashbackContainer>
                <CashBackValue>R$ 12,00</CashBackValue>
                <CashbackDescription>
                    Seu saldo atual em Cash Bes
                </CashbackDescription>
            </CashbackContainer>
            <Modal>
                <CashbackHistory
                    data={mockedHistory}
                    keyExtractor={item => String(item.id)}
                    renderItem={({item}) => (
                        <CashbackHistoryItem>
                            <DetailsContainer>
                                <HistoryTitle>{item.title}</HistoryTitle>
                                <HistoryDate>
                                    DATA DA COMPRA: {item.date}
                                </HistoryDate>
                            </DetailsContainer>
                            <PriceContainer>
                                <HistoryPrice>{item.price}</HistoryPrice>
                            </PriceContainer>
                        </CashbackHistoryItem>
                    )}
                />
            </Modal>
        </Container>
    );
};

export default CashBes;
