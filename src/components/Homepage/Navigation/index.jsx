import React, {Component} from 'react';
import { Layout, Menu } from 'antd';
import {ShoppingCartOutlined, ShoppingOutlined, UploadOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";

const { Sider} = Layout;
export default class Navigation extends Component {

    render() {
        const {collapsed} = this.props;
        return (
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" icon={<ShoppingCartOutlined />}>
                        <Link to="/sale">销售</Link>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<ShoppingOutlined />}>
                        <Link to="/purchase">采购</Link>
                    </Menu.Item>
                    <Menu.Item key="3" icon={<UploadOutlined />}>
                        <Link to="/stock">库存</Link>
                    </Menu.Item>
                    <Menu.Item key="4" icon={<UploadOutlined />}>
                        <Link to="/customers">客户信息</Link>
                    </Menu.Item>
                </Menu>
            </Sider>
        );
    }
}
