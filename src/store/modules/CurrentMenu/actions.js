export const setCurrentMenu = menu => {
    return {
        type: '@CurrentMenu/SET_MENU',
        menu,
    };
};

export const resetCurrentMenu = () => {
    return {
        type: '@CurrentMenu/RESET_MENU',
    };
};
