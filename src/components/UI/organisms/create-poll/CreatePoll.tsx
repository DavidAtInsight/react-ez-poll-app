import PollName from '../../molecules/poll-name/PollName';

import { ReactNode } from 'react';
import { useState } from 'react';

import { Modal, Button } from 'antd';
import { AppstoreAddOutlined } from '@ant-design/icons';

const CreatePoll = () => {
    let [isModalVisible, setIsModalVisible] = useState(false);

    let showModal = () => {
        setIsModalVisible(true);
    };
    
    let handleOk = () => {
        setIsModalVisible(false);
    };
    
    let handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <div className="create-poll-wrapper">
            <Button  
                icon={<AppstoreAddOutlined />}
                key="1"
                onClick={showModal}
                size="large"
                type="primary"     
            >
                Create New Poll
            </Button> 
            <Modal 
                title="Create New Poll" 
                visible={isModalVisible} 
                okText="Create"
                onOk={handleOk} 
                onCancel={handleCancel}
                width="75%"
            />  
        </div>
    )
}

export default CreatePoll