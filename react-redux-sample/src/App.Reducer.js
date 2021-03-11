const tiger = 10000

//这是action
export const increase = {
    type: '涨工资'
}
export const decrease = {
    type: '扣工资'
}
//这是reducer
const reducer = (state = tiger, action) => {
    switch (action.type) {
        case increase.type:
            return state += 100;
        case decrease.type:
            return state -= 100;
        default:
            return state;
    }
}

export default reducer;
