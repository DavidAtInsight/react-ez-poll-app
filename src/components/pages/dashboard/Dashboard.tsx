import './Dashboard.css'

import MyPolls from '../../UI/organisms/my-polls/MyPolls';

import { Button } from 'antd';
import { AppstoreAddOutlined } from '@ant-design/icons';

const Dashboard = () => {
  return (
    <div className="dashboard">
        <Button  
            icon={<AppstoreAddOutlined />}
            key="1"
            size="large"
            type="primary"     
        >
            Create New Poll
        </Button>  
        <MyPolls />
    </div>
  )
}

export default Dashboard