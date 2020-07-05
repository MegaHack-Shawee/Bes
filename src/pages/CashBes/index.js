import React, {useCallback} from 'react';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

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
    EmptyCashbesContainer,
    EmptyCashbesContainerText,
} from './styles';
import {useSelector} from 'react-redux';

const CashBes = () => {
    const cashbes = useSelector(state => state.Cashbes);

    const calculateTotal = useCallback(() => {
        var total = 0;
        cashbes.map(cb => {
            total += parseFloat(cb.price);
        });
        return total;
    }, [cashbes]);

    if (cashbes.length === 0) {
        return (
            <EmptyCashbesContainer>
                <MCIcon name="emoticon-sad" color="#dfe1e5" size={135} />
                <EmptyCashbesContainerText>
                    Nenhum histórico de cashbes
                </EmptyCashbesContainerText>
            </EmptyCashbesContainer>
        );
    }

    return (
        <Container>
            <Header callback={null} />
            <CashbackContainer>
                <CashBackValue>R$ {calculateTotal().toFixed(2)}</CashBackValue>
                <CashbackDescription>
                    Seu saldo atual em Cash Bes
                </CashbackDescription>
            </CashbackContainer>
            <Modal>
                <CashbackHistory
                    data={cashbes}
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
                                <HistoryPrice>R$ {item.price}</HistoryPrice>
                            </PriceContainer>
                        </CashbackHistoryItem>
                    )}
                />
            </Modal>
        </Container>
    );
};

export default CashBes;
