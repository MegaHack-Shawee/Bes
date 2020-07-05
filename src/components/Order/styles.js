import styled from 'styled-components/native';

export const Container = styled.View``;

export const OrderList = styled.FlatList`
    height: 230px;
`;

export const ItemBody = styled.View`
    border-bottom-color: #ddd;
    border-bottom-width: 1px;
`;

export const Row = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
`;
export const ItemInfo = styled.View`
    width: 55%;
    padding-right: 5px;
`;

export const Photo = styled.Image`
    height: 70px;
    width: 100px;
`;
