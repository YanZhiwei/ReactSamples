import React, { useState } from 'react';
import { Table, Space, Button } from 'antd';
import { connect } from 'umi';
import UserModal from './components/UserModal';
const index = ({ users, dispatch }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [record, setRecord] = useState(undefined);
  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Create Time',
      dataIndex: 'create_time',
      key: 'create_time'
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <a onClick={() => handleEdit(record)}>Edit</a>
          <a>Delete</a>
        </Space>
      )
    }
  ];
  const handleEdit = (record) => {
    console.log('handleEdit:' + JSON.stringify(record));
    setRecord(record);
    setModalVisible(true);
  };
  const handleModalCancel = () => {
    setModalVisible(false);
  };
  const handleModalOk = () => {
    setModalVisible(false);
  };
  const handleModalFinish = (values) => {
    let id = 0;
    if (record) {
      id = record.id;
    }
    if (id) {
      console.log('handleModalFinish:', values + 'id:' + id);
      dispatch({
        type: 'users/edit',
        playload: {
          id,
          values
        }
      });
    } else {
      dispatch({
        type: 'users/add',
        playload: {
          id,
          values
        }
      });
    }
    setModalVisible(false);
  };
  const handleModalAdd = () => {
    setModalVisible(true);
    setRecord(undefined);
  };
  return (
    <div>
      <Button type="primary" onClick={handleModalAdd}>
        Add
      </Button>
      <Table columns={columns} dataSource={users.data} rowKey="id" />
      <UserModal
        visible={modalVisible}
        handleOk={handleModalOk}
        handleCancel={handleModalCancel}
        record={record}
        handleFinish={handleModalFinish}
      ></UserModal>
    </div>
  );
};

const mapStateToProps = ({ users }) => {
  return {
    users
  };
};

export default connect(mapStateToProps)(index);
