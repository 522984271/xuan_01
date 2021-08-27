import React, {Component} from 'react';
import './index.css';
import {Button,Input,DatePicker} from "antd";
import SaleTables from "./SaleTables";
import {Link} from "react-router-dom";

const {RangePicker} = DatePicker
export default class Sale extends Component {
    dataOnChange = (date,dateString)=>{
        console.log(date, dateString);
    }



    render() {
        return (
            <div style={{marginTop : 30}}>

                <h1 className="sale-h1">销售单据管理</h1>
                <Link to="/sale_table">
                    <Button type="primary"  style={{marginLeft :'10%'}}>新增单据</Button>
                </Link>
                <br/><br/>
                <div style={{textAlign : 'center'}}>
                    时间 : <RangePicker />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    客户 : <Input style={{width : 150}} placeholder="客户名称" />
                </div>
                <SaleTables/>
            </div>
        );
    }
}

