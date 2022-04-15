import './PollCard.css'

import IPoll from '../../../../interfaces/IPoll';

import { Divider, Card, Tag, Space } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

interface Poll {
    poll: IPoll
}

const PollCard = ({poll}: Poll) => {
    let { Meta } = Card;
    return (
        <div className="poll-card-wrapper">   
            <Card 
                className="poll-card"
                style={{ width: '300px' }}
                actions={[
                    <EditOutlined key="edit"/>,
                    <DeleteOutlined key="delete" />
                ]}
            >
                <Meta
                    title={poll.name}
                    description={poll.description}
                />
                <Divider />
                <Space size="large">
                    {poll.isOpen ? 
                        <Tag color="success">OPEN</Tag> : 
                        <Tag color="error">CLOSED</Tag>
                    }
                    {poll.isPublic ? 
                        <Tag color="warning">PUBLIC</Tag> : 
                        <Tag color="default">PRIVATE</Tag>
                    }
                </Space>
            </Card>
        </div>
    )
}

export default PollCard