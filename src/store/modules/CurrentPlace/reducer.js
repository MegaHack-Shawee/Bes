export default function CurrentPlace(state = [], action) {
    switch (action.type) {
        case '@Place/SET_PLACE': {
            return action.place;
        }
        default: {
            return state;
        }
    }
}
