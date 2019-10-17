import { INCREMENT, DECREMENT } from '../actions/actionsTypes';
import { ModifyAction } from '../actions/actionCreator';

function CaluCountReducer(state = 0, action: ModifyAction) {
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        default:
            return state
    }
}
export default CaluCountReducer;