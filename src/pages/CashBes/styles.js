import styled from 'styled-components/native';
import {FlatList} from 'react-native-gesture-handler';

export const CashbackContainer = styled.View`
    background: #fc7f43;
    align-items: center;
    justify-content: center;

    height: 100px;
`;

export const CashBackValue = styled.Text`
    font-size: 38px;
    font-weight: bold;
    color: #fff;
`;
export const CashbackDescription = styled.Text`
    font-size: 10px;
    font-weight: bold;
    color: #fff;
`;

export const CashbackHistory = styled(FlatList)`
    margin-top: 20px;
    padding: 20px;
`;

export const CashbackHistoryItem = styled.View`
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    border-bottom-width: 1px;
    border-bottom-color: #dfe1e5;
    margin-bottom: 10px;
    padding: 10px;
`;
export const DetailsContainer = styled.View``;
export const HistoryTitle = styled.Text`
    font-size: 19px;
    color: #666;
`;
export const HistoryDate = styled.Text`
    font-size: 10px;
    color: #666;
`;
export const PriceContainer = styled.View``;

export const HistoryPrice = styled.Text`
    font-size: 16px;
    color: #666;
`;

export const EmptyCashbesContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const EmptyCashbesContainerText = styled.Text`
    color: #dfe1e5;
    text-align: center;
`;
