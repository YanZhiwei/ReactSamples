import React from 'react'
import { Modal, Button } from 'antd';
const UserModal = (props) => {
    return (
        <div>
            <Modal title="Basic Modal" visible={props.visible} >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </div>
    )
}

export default UserModal;