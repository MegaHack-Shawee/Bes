export const setCurrentPlace = place => {
    return {
        type: '@Place/SET_PLACE',
        place,
    };
};

export const resetCurrentPlace = () => {
    return {
        type: '@Place/RESET_PLACE',
    };
};
