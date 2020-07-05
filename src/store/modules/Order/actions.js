export const addItem = item => {
    return {
        type: '@Order/ADD_ITEM',
        item,
    };
};

export const removeItem = id => {
    return {
        type: '@Order/REMOVE_ITEM',
        id,
    };
};

export const resetList = id => {
    return {
        type: '@Order/RESET_LIST',
    };
};
