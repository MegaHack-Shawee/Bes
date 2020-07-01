import {produce} from 'immer';
export const INITIAL_STATE = [];

export default function Places(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case '@Places/ADD_PLACE': {
                draft.push(action.place);
                break;
            }
            default: {
                return state;
            }
        }
    });
}
