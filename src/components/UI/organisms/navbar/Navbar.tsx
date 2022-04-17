import './Navbar.css';

import Logo from '../../molecules/logo/Logo';

import useWindowDimensions from '../../../../custom-hooks/useWindowDimension';

import { Button, PageHeader, Typography } from 'antd';
import { LoginOutlined, LogoutOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'

//pass in auth boolean to display login or profile menu.item

const Navbar = () => {
    let { Title } = Typography;
    let { width } = useWindowDimensions()
    let isAuth: boolean = true; //temporary

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
            subTitle={width > 729 ? "Polling made easy." : ""}
            title={<Link to="/">
                        <Title level={2}><Logo /></Title>
                    </Link>}
        />
    )
}

export default Navbar