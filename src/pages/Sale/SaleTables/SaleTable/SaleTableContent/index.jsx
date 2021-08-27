import React, {Component} from 'react';
import SaleTableContentItem from "./SaleTableContentItem";
import {Button} from "antd";

export default class SaleTableContent extends Component {

    state = {
        products: [
            {id: '0001', name: '可乐', company: '瓶', price: 3, num: ''},
            {id: '0002', name: '雪碧', company: '瓶', price: 3, num: ''},
            {id: '0003', name: '芬达', company: '瓶', price: 3, num: ''},
            {id: '0004', name: '乐事薯片', company: '筒', price: 6, num: ''},
            {id: '0005', name: '德芙巧克力', company: '块', price: 8, num: ''},
            {id: '0006', name: '巧乐兹冰棒', company: '根', price: 4, num: ''},
        ],
        saleProducts: [
             {id: '', name: '', company: '', price: '', num: '',row : '1'},
             {id: '', name: '', company: '', price: '', num: '',row : '2'}
        ],

        addNewRowColor: 'black',
        addNewStateFlag : false,
        trBackgroundColorFlag: false
    }

    handleMouse = (flag,type) => {
        return ()=>{
            this.setState({
                [type] : flag
            })
        }
    };

    addNewState = () => {
        const {saleProducts} = this.state;
        const row = saleProducts.length + 1;
        if (saleProducts[saleProducts.length - 1].name === '') {
            alert('最后一行为空，无法新增数据');
            return;
        }
        const newSaleProducts = {id: '', name: '', company: '', price: '', num: '', row: row+""};
        saleProducts.push(newSaleProducts)
        this.setState({
            saleProducts: saleProducts
        });
    }


    changeState = (type) => {
        return (event) => {
            if (type === 'name') {
                /*如果改变属性为商品名称，自动跟出价格*/
                const row = event.target.parentNode.parentNode.childNodes[0].textContent;
                const data = event.target.value;
                const product = this.state.products.filter((product)=>{
                    if (product.name === data) {
                        return product;
                    }
                })
                try {
                    const newSaleProducts = this.state.saleProducts.map((emp)=>{
                        if (emp.row === row) {
                            console.log(product[0])
                            emp.price = product[0].price;
                            emp.company = product[0].company;
                            emp.name = product[0].name;
                            emp.id = product[0].id;

                            return emp;
                        }
                        return emp
                    })

                    this.setState({
                        saleProducts: newSaleProducts
                    })
                    return;
                }catch (e) {

                }
            }

            const row = event.target.parentNode.parentNode.childNodes[0].textContent;
            const data = event.target.value;
            const newSaleProducts = this.state.saleProducts.map((emp) => emp.row === row ? {...emp, [type]: data} : emp);
            this.setState({
                saleProducts: newSaleProducts
            })
        }
    }


    render() {
        return (
            <div style={{width: '80%', margin: '0 auto 0 auto', minWidth: 800}}>
                <div>
                    <table style={{margin: '0 auto 3px auto',
                        display: 'block',
                        height: '500px',
                        overflowY : this.state.saleProducts.length>16?'scroll':'',
                        border: 'none',
                    }}>
                        <tbody>
                        <tr>
                            <th style={{width: '6.25%'}}>行号</th>
                            <th style={{width: '18.75%'}}>商品编号</th>
                            <th style={{width: '25%'}}>商品名称</th>
                            <th style={{width: '12.5%'}}>单位</th>
                            <th style={{width: '12.5%'}}>单价</th>
                            <th style={{width: '12.5%'}}>数量</th>
                            <th style={{width: '12.5%'}}>金额</th>
                        </tr>

                        {
                            this.state.saleProducts.map((emp, code) => {
                                return (
                                    <SaleTableContentItem key={emp.row} emp ={emp} products ={this.state.products}  code = {code} changeState = {this.changeState}/>
                                );
                            })
                        }
                        </tbody>
                    </table>
                </div>

                <div >
                    <button
                        onMouseEnter={this.handleMouse(true,'addNewStateFlag')}
                        onMouseLeave={this.handleMouse(false,'addNewStateFlag')}
                        onClick={this.addNewState}
                        style={{
                            backgroundColor: 'white',
                            color: this.state.addNewStateFlag?'#69c0ff':'black',
                            width: '100%',
                            border:`1px dashed ${this.state.addNewStateFlag?'#69c0ff':'black'}`,
                            cursor: this.state.addNewStateFlag ? 'pointer' : ''
                        }}
                    >+添加一行数据
                    </button>
                    <Button style={{margin:'10px 0px 0px 95%'}} type="primary">保存</Button>
                </div>


            </div>

        );
    }
}

