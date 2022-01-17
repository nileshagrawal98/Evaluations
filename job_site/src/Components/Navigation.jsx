import {Menu} from 'antd';
import { Header } from 'antd/lib/layout/layout';
import { Link } from 'react-router-dom';

export const Navigation = () => {
    return <Header>
        <Menu mode="horizontal" theme='dark'>
            <Menu.Item key='1'><Link to="/company">Company Side</Link></Menu.Item>
            <Menu.Item key='2'><Link to="/client">Client Side</Link></Menu.Item>
        </Menu>
    </Header>
}