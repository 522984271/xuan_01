import React, {Component} from 'react';
//引入antd布局组件
import { Layout } from 'antd';
//引入icons图标
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons';
//引入css样式
import './index.css';
//引入Navigation，MainContent UI
import Navigation from "./Navigation";
import MainContent from "./MainContent";

const { Header } = Layout;
export default class Homepage extends Component {

    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };


    render() {
        return (
            <div>
                <Layout style={{minHeight: window.innerHeight>='900px'?'window.innerHeight':'900px'}}>
                    {/*引入导航栏，传入是否隐藏导航栏参数*/}
                    <Navigation collapsed={this.state.collapsed}/>
                    <Layout className="site-layout">
                        <Header className="site-layout-background" style={{ padding: 0 }}>
                            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                                className: 'trigger',
                                onClick: this.toggle,
                            })}
                        </Header>
                        {/*引入主体*/}
                        <MainContent/>
                    </Layout>
                </Layout>
            </div>
        );
    }
}



