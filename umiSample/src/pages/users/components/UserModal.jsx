import React, { useEffect } from 'react';
import { Modal, Form, Input } from 'antd';
const UserModal = (props) => {
  const { record, visible, handleCancel, handleFinish } = props;
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 }
  };
  const [form] = Form.useForm();
  useEffect(() => {
    if (record == undefined) form.resetFields();
    else form.setFieldsValue(record);
  }, [visible]);
  const handleOk = () => {
    form.submit();
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div>
      <Modal
        title="Basic Modal"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        forceRender
      >
        <Form
          {...layout}
          form={form}
          name="basic"
          onFinish={handleFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Create Time"
            name="create_time"
            rules={[
              { required: true, message: 'Please input your create time!' }
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Status"
            name="status"
            rules={[{ required: true, message: 'Please input your status!' }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default UserModal;
