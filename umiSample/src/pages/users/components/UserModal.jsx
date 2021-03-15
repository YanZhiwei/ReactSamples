import React from 'react'
import { Modal, Button } from 'antd';
const UserModal = (props) => {
    return (
        <div>
            <Modal title="Basic Modal" visible={props.visible}
                onOk={props.handleOk}
                onCancel={props.handleCancel}>
                {JSON.stringify(props.record)}
            </Modal>
        </div>
    )
}

export default UserModal;