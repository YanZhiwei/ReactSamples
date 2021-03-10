import { SUBMIT_VALUE } from '../actions/submittedValueAction';

export default function submittedValueReducer(state = null, action) {
    switch (action.type) {
        case SUBMIT_VALUE:
            return action.ployload.submittedValue;
        default:
            return state;
    }
}