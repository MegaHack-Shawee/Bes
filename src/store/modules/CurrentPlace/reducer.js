export default function CurrentPlace(state = [], action) {
    switch (action.type) {
        case '@Place/SET_PLACE': {
            return action.place;
        }
        case '@Place/RESET_PLACE': {
            return [];
        }
        default: {
            return state;
        }
    }
}
