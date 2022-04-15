import './Dashboard.css'

import CreatePoll from '../../UI/organisms/create-poll/CreatePoll';
import MyPolls from '../../UI/organisms/my-polls/MyPolls';

const Dashboard = () => {
    return (
        <div className="dashboard-wrapper">
            <CreatePoll /> 
            <MyPolls />
        </div>
    )
}

export default Dashboard