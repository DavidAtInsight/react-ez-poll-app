import './QuickStart.css';

import Logo from '../../atoms/logo/Logo';

import { Button, Card, Divider, Typography } from 'antd';

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
            <Button  
                block
                size="large"
                type="primary" 
            >
              Create Poll Now!
            </Button> 
            <Divider> OR </Divider>
            <Button  
                block
                size="large"
                type="primary" 
            >
              Join Poll Now!
            </Button> 
        </Card>
    )
}

export default QuickStart