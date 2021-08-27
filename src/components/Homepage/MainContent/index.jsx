import React, {Component} from 'react';
//引入路由组件Redirect ： 默认  Switch：选择
import {Redirect, Route, Switch} from "react-router-dom";
import Sale from "../../../pages/Sale";
import Purchase from "../../../pages/Purchase";
import Stock from "../../../pages/Stock";
import SaleTable from "../../../pages/Sale/SaleTables/SaleTable";
import Customers from "../../../pages/Customers";
//引入antd组件
import {Layout} from "antd";
import SaleTableHeader from "../../../pages/Sale/SaleTables/SaleTable/SaleTableHeader";

//引入Count
const {Content } = Layout;
export default class MainContent extends Component {
    render() {
        return (
            <Content
                className="site-layout-background"
                style={{
                    margin: '24px 16px',
                    padding: 24,
                    minHeight: 600,
                    minWidth: 800
                }}
            >
                {/*注册路由*/}
                <Switch>
                    <Route path="/sale" component={Sale}></Route>
                    <Route path="/purchase" component={Purchase}></Route>
                    <Route path="/stock" component={Stock}></Route>
                    <Route path="/sale_table/:id" component={SaleTable}></Route>
                    <Route path="/sale_table" component={SaleTable}></Route>
                    <Route path="/customers" component={Customers}/>
                    <Redirect to="/sale"></Redirect>
                </Switch>
            </Content>
        );
    }
}
