import { Input, Typography } from 'antd';

const PollName = () => {
    let { Title } = Typography

    return (
        <div className="poll-name-input-wrapper">
            <Title level={3}>Poll Name</Title>
            <Input size="large" placeholder="Enter poll name..." />
        </div>
    )
}

export default PollName