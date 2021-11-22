import { memo, useState, useEffect } from "react"
import Link from 'next/link';
import {Layout, Menu} from 'antd';
const { Sider } = Layout;

const SideBar = () => {
    const [currentKey, setCurrentKey] = useState('');
    
    const handleMenuItemClick = ({key}: {key: string}) => {
        setCurrentKey(key);   
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
                    <Link href="/list">
                        임직원 관리
                    </Link>
                </Menu.Item>
                <Menu.Item key="api_log">
                    <Link href="/log">
                        API 호출 로그
                    </Link>
                </Menu.Item>
            </Menu>
        </Sider>
    )
}

export default memo(SideBar);