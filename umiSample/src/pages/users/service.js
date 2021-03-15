import request from 'umi-request';
import { message } from 'antd';

export const getRemoteList = async () => {
    return request('api/users', {
        method: 'get',
    }).then(function (response) {
        return response;
    }).catch(function (error) {
        message.error("getRemoteList failed");
    });
}

export const editRecord = async ({ id, values }) => {
    console.log(`editRecord:${id},values:${JSON.stringify(values)}`);
    return request(`api/users/${id}`, {
        method: 'put',
        data: values
    }).then(function (response) {
        message.success("edit succeed")
    }).catch(function (error) {
        message.error("editRecord failed");
    });
}

export const addRecord = async ({ values }) => {
    console.log(`addRecord,values:${JSON.stringify(values)}`);
    return request('api/users/', {
        method: 'post',
        data: values
    }).then(function (response) {
        message.success("add succeed")
    }).catch(function (error) {
        message.error("addRecord failed");
    });
}