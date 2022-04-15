import './Navbar.css';

import Logo from '../../molecules/logo/Logo';

import { Button, PageHeader, Typography } from 'antd';
import { LoginOutlined, LogoutOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'

//pass in auth boolean to display login or profile menu.item

const { Title } = Typography;

const Navbar = () => {
    const isAuth: boolean = false; //temporary

    //add click method here to handle clicks

    return (
        <PageHeader
            className="navbar"
            extra={[
                <Button  
                    icon={isAuth ? <LogoutOutlined /> : <LoginOutlined />}
                    key="1"
                    type="primary"     
                >
                    {isAuth ? <span>Logout</span> : <span>Login</span>}
                </Button>    
            ]}
            subTitle="Polling made easy." //TODO -- remove when screen size below 767px
            title={<Link to="/">
                        <Title 
                            level={2}
                        >
                            <Logo />
                        </Title>
                    </Link>}
        />
    )
}

export default Navbar