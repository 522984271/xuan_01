import React, {Component} from 'react';
import './index.css';
import {withRouter} from "react-router-dom";
import SaleTablesItem from "./SaleTablesItem";

class SaleTables extends Component {
    state = {
        tables: [
            {key: '001', name: '张三', time: '2020-10-09', remarks: 'xxx', amount: 1000},
            {key: '002', name: '李四', time: '2020-09-09', remarks: 'xxxxxx', amount: 1800}
        ]
    }

    lookTable = (event) => {
        //获取点击单据的id
        const id = event.target.parentNode.childNodes[0].textContent;
        this.props.history.push({pathname: `/sale_table/${id}`});
    }

    handleMouse = (flag,type) => {
        return ()=>{
            this.setState({
                [type] : flag
            })
        }
    };

    render() {
        return (
            <div>
                <table style={{margin :'30px auto 30px auto',width : '80%'}}>
                    <tbody>
                    <tr>
                        <th style={{width: 100}}>单据编号</th>
                        <th style={{width: 100}}>客户姓名</th>
                        <th style={{width: 150}}>开单时间</th>
                        <th style={{width: 100}}>金额</th>
                        <th style={{width: 300}}>备注</th>
                    </tr>
                    {
                        this.state.tables.map((emp) => {
                            return (
                                <SaleTablesItem emp={emp} lookTable = {this.lookTable}/>

                            );
                        })
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default withRouter(SaleTables)
