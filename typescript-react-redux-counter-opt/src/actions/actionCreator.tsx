import { INCREMENT, DECREMENT } from './actionsTypes';
export type StoreState = number;
export interface IINCREMENTAction {
    type: INCREMENT;
}

export interface IDECREMENTAction {
    type: DECREMENT;
}
// 定义 modifyAction 类型，包含 IINCREMENTAction 和 IDECREMENTAction 接口类型
export type ModifyAction = IINCREMENTAction | IDECREMENTAction;
export const increment = (): IINCREMENTAction => ({
    type: INCREMENT
})

export const decrement = (): IDECREMENTAction => ({
    type: DECREMENT
})