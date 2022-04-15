import './QuickStart.css';

import Logo from '../../molecules/logo/Logo';

import { Button, Card, Divider, Typography } from 'antd';
import { Link } from 'react-router-dom'

const { Title } = Typography;

const QuickStart = () => {
    return (
        <Card 
            className="quick-start-card"
            style={{ width: '100%' }}
            title={<Title 
                        level={2}
                        ellipsis
                    >
                        Start Using {<Logo />} Today! {/*Does NOT WRAP*/}
                    </Title>}
        >
            <Link to="dashboard" >
                <Button  
                    block
                    size="large"
                    type="primary" 
                >
                  Create Poll Now!
                </Button> 
            </Link>
            <Divider> OR </Divider>
            <Button  
                block
                size="large"
                type="primary" 
            >
              Take Poll Now!
            </Button> 
        </Card>
    )
}

export default QuickStart