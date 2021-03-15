import request from 'umi-request';

export const getRemoteList = async () => {
    return request('api/users', {
        method: 'get',
    }).then(function (response) {
        return response;
    }).catch(function (error) {
        console.log(error);
    });
}

export const editRecord = async ({ id, values }) => {
    console.log(`editRecord:${id},values:${JSON.stringify(values)}`);
    return request(`api/users/${id}`, {
        method: 'put',
        data: values
    }).then(function (response) {
        console.log('editRecord ok');
    }).catch(function (error) {
        console.log(error);
    });
}