import React, { useState } from 'react'
import { Table, Tag, Space } from 'antd';
import { connect } from 'umi';
import UserModal from './components/UserModal';
const index = ({ users }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [record, setRecord] = useState(undefined);
    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Create Time',
            dataIndex: 'create_time',
            key: 'create_time',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <a onClick={() => handleEdit(record)}>Edit</a>
                    <a>Delete</a>
                </Space>
            ),
        },
    ];
    const handleEdit = record => {
        console.log("handleEdit:" + record);
        setRecord(JSON.stringify(record));
        setModalVisible(true);
    };

    const handleModalClose = () => {
        setModalVisible(false);
    };
    return (
        <div>
            <Table className="list-table" columns={columns} dataSource={users.data} rowKey="id" />
            <UserModal visible={modalVisible} handleOk={handleModalClose} handleCancel={handleModalClose} record={record}></UserModal>
        </div>
    )
}

const mapStateToProps = ({ users }) => {
    return {
        users
    }
}

export default connect(mapStateToProps)(index)
