import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';
import { getRemoteList } from './service'
const IndexModel = {
    namespace: 'users',
    state: {
        name: '',
    },
    effects: {
        *query(action, { call, put }) {
            const data = yield call(getRemoteList);
            console.log("query:" + data);
            yield put({
                type: "getList",
                playload: {
                    data
                },
            });
        },
    },
    reducers: {
        getList(state, { type, playload }) {
            return playload;
        },
    },
    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(({ pathname }) => {
                if (pathname === '/users') {
                    dispatch({
                        type: 'query',
                    })
                }
            });
        }
    }
};

export default IndexModel;