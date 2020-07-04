export const addItem = (item, ammount) => {
    return {
        type: '@Order/ADD_ITEM',
        orderItem: {
            item,
            ammount,
        },
    };
};

export const removeItem = id => {
    return {
        type: '@Order/REMOVE_ITEM',
        id,
    };
};
