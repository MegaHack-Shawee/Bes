import {produce} from 'immer';
export const INITIAL_STATE = [];

export default function Order(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case '@Order/ADD_ITEM': {
                draft.push(action.orderItem);
                break;
            }
            case '@Order/REMOVE_ITEM': {
                const index = draft.findIndex(item => item.id === action.id);
                draft.splice(index, 1);
                break;
            }
            default: {
                return state;
            }
        }
    });
}
