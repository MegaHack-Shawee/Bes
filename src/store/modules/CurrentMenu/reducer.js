export default function CurrentMenu(state = [], action) {
    switch (action.type) {
        case '@CurrentMenu/SET_MENU': {
            return action.menu;
        }
        default: {
            return state;
        }
    }
}
