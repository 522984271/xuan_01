import React, {Component} from 'react';
import './index.css';
import {Descriptions} from 'antd';


export default class SaleTableHeader extends Component {

    state = {
        customers : [
            {id : '001',name : '张三',phoneNumber : '138888881',address : '中国'},
            {id : '002',name : '李四',phoneNumber : '138888882',address : '中国'},
            {id : '003',name : '王武',phoneNumber : '138888883',address : '中国'},
            {id : '004',name : '陆卿',phoneNumber : '138888884',address : '中国'},
            {id : '005',name : '杨康',phoneNumber : '138888885',address : '中国'}
        ],
        saleTableHeaderState : {
            name: '',
            phoneNumber: '',
            address: '',
            saleID: '',
            remarks: ''
        }
    }


    changeSaleTableHeaderState = (type)=>{
        return (event)=>{
            const data = event.target.value;
            if (type === 'name') {
                this.autoAssociation(data);
            }
            this.setState({
                saleTableHeaderState: {
                    ...this.state.saleTableHeaderState, [type]: data
                }
            })
        }
    }


    autoAssociation = (data)=>{
        const {customers,saleTableHeaderState} = this.state;
        const customer = customers.filter((customer)=>{
            if (data === customer.name + '/' + customer.phoneNumber) {
                return customer;
            }
        })

        saleTableHeaderState.phoneNumber = customer[0].phoneNumber
        saleTableHeaderState.address = customer[0].address


        this.setState({
            saleTableHeaderState: {saleTableHeaderState}
        })


    }



    render() {
        return (
            <div className="SaleTableHeader" style={{width: '80%', margin: '0 auto 0 auto', minWidth: 800}}>
                <h1 style={{textAlign : 'center'}}>销售单</h1>
                <table style={{margin: '30px auto 10px auto', width: '100%'}}>
                    <tbody>
                    <tr>
                        <td style={{width: '33%'}}>客户姓名：
                            <input type="text" list="customerNameList"
                                   onChange={this.changeSaleTableHeaderState('name')}/>
                            <datalist id="customerNameList">
                                {
                                    this.state.customers.map(customer => {
                                        return (
                                            <option key={customer.id}>{customer.name}/{customer.phoneNumber}</option>
                                        );
                                    })
                                }
                            </datalist>
                        </td>

                        <td style={{width: '33%'}}>电话号码：<input type="text"
                                                               onChange={this.changeSaleTableHeaderState('phoneNumber')}
                                                               value={this.state.saleTableHeaderState.phoneNumber}/>
                        </td>
                        <td style={{width: '33%'}}>销售单号：<input  type="text"
                                                                onChange={this.changeSaleTableHeaderState('saleID')}
                                                                value={this.state.saleTableHeaderState.saleID}/></td>
                    </tr>
                    </tbody>
                </table>

                <table style={{margin: '30px auto 10px auto', width: '100%'}}>
                    <tbody>
                    <tr>
                        <td style={{width: '50%'}}>地址：<input type="text"
                                                             onChange={this.changeSaleTableHeaderState('address')}
                                                             value={this.state.saleTableHeaderState.address}
                                                             style={{width: '85%'}}/></td>
                        <td style={{width: '50%'}}>备注：<input type="text"
                                                             onChange={this.changeSaleTableHeaderState('remarks')}
                                                             value={this.state.saleTableHeaderState.remarks}
                                                             style={{width: '85%'}}/></td>
                    </tr>
                    </tbody>
                </table>


                {/*<Descriptions style={{textAlign : 'center'}} title="销售单">
                    <Descriptions.Item label="姓名">Zhou Maomao</Descriptions.Item>
                    <Descriptions.Item label="电话号码">1810000000</Descriptions.Item><br/>
                    <Descriptions.Item label="备注">
                        empty
                    </Descriptions.Item>
                    <Descriptions.Item label="地址">
                        No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
                    </Descriptions.Item>
                </Descriptions>*/}
            </div>
        );
    }
}
