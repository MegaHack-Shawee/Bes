import produce from 'immer';
export const INITIAL_STATE = [];

export default function Cashbes(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case '@Cashbes/ADD_CASHBES': {
                draft.push(action.cashbes);
                break;
            }
            default: {
                return state;
            }
        }
    });
}
