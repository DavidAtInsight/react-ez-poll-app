import './PollCard.css'

import IPoll from '../../../../interfaces/IPoll';

import { Divider, Card, Tag, Tooltip, Space } from 'antd';
import { DeleteOutlined, EditOutlined, PieChartOutlined } from '@ant-design/icons';

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
                    <Tooltip placement="bottom" title="View Responses">
                        <PieChartOutlined key="responses"/>
                    </Tooltip>,
                    <Tooltip placement="bottom" title="Edit Poll">
                        <EditOutlined key="edit"/>
                    </Tooltip>,
                    <Tooltip placement="bottom" title="Delete Poll">
                        <DeleteOutlined key="delete" />
                    </Tooltip>
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
                        <Tag color="processing">PUBLIC</Tag> : 
                        <Tag color="default">PRIVATE</Tag>
                    }
                </Space>
            </Card>
        </div>
    )
}

export default PollCard