import { memo, useState, useEffect } from "react"
import Link from 'next/link';
import {Layout, Menu} from 'antd';
import {useRouter} from 'next/router';

const { Sider } = Layout;

const SideBar = () => {
    const router = useRouter();
    const [currentKey, setCurrentKey] = useState('');
    useEffect(() => { console.log(currentKey); }, [currentKey]);

    useEffect(() => {
        if (window) {
          setCurrentKey(window.location.pathname.replace(/\//gi, ""));
        }
    }, []);

    const handleMenuItemClick = ({key}: {key: string}) => {
        setCurrentKey(key);
        if (key === 'employee_list') {
            router.push({
                pathname: '/list'
              }, 
              undefined, { shallow: true }
              )
        } else if (key === 'api_log') {
            router.push({
                pathname: '/log'
              }, 
              undefined, { shallow: true }
              )
        }
    }

    return (
        <Sider>
            <Menu 
                theme="dark" 
                defaultSelectedKeys={["employee_list"]}
                selectedKeys={[currentKey]}
                selectable={true}
                onClick={handleMenuItemClick}
                mode="inline" 
            >
                <Menu.Item key="employee_list">
                    임직원 관리
                    {/* <Link href="/list">
                        임직원 관리
                    </Link> */}
                </Menu.Item>
                <Menu.Item key="api_log">
                    API 호출 로그
                    {/* <Link href="/log">
                        API 호출 로그
                    </Link> */}
                </Menu.Item>
            </Menu>
        </Sider>
    )
}

export default memo(SideBar);