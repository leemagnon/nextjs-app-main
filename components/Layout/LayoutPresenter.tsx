import {Layout} from 'antd';
import {LogoutOutlined} from '@ant-design/icons';
const { Header, Content} = Layout;
import {LogoutButton, PageTitle} from './Layout.style';
import SideBar from './SideBar';

const LayoutPresenter = ({children, title}) => {
    const logout = () => {};

    return (
        <>
            <Header className="header">
                <LogoutButton className="logout">
                    로그아웃 <LogoutOutlined onClick={logout} /> 
                </LogoutButton>
            </Header>
            <Layout style={{ minHeight: '100vh' }}>
                <SideBar />
                <Content style={{ backgroundColor: 'white', padding: '40px' }}>
                    <PageTitle>{title}</PageTitle>
                    {children}
                </Content>
            </Layout>
        </>
    );
}

export default LayoutPresenter;