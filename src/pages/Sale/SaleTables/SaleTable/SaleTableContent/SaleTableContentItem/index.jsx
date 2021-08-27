import React, {Component} from 'react';


export default class SaleTableContentItem extends Component {
    state = {
        trBackgroundColorFlag: false
    }

    handleMouse = (flag,type) => {
        return ()=>{
            this.setState({
                [type] : flag
            })
        }
    };


    render() {
        const {emp, code,products} = this.props;
        return (
            <tr style={{backgroundColor: this.state.trBackgroundColorFlag ? '#f0f0f0' : 'white'}}
                onMouseEnter={this.handleMouse(true, 'trBackgroundColorFlag')}
                onMouseLeave={this.handleMouse(false, 'trBackgroundColorFlag')}>

                {/*行号*/}
                <td style={{textAlign: 'center'}}>{emp.row}</td>

                {/*商品编号*/}
                <td style={{textAlign: 'center'}}>{emp.id}</td>

                {/*商品名称*/}
                <td style={{textAlign: 'center'}}>
                    <input type="text" list="saleGoodsList"
                           style={{border: 'none', width: '100%', textAlign: 'center'}}
                           onChange={this.props.changeState("name")}/>
                    <datalist id="saleGoodsList">
                        {
                            products.map(product => {
                                return (
                                    <option key={product.id}>{product.name}</option>
                                );
                            })
                        }
                    </datalist>
                </td>

                <td style={{textAlign: 'center'}}>{emp.company}</td>
                <td><input type="text" style={{
                    backgroundColor: this.state.trBackgroundColorFlag ? '#f0f0f0' : 'white',
                    border: '1px solid rgba(0,0,0,0.1)',
                    textAlign: 'center'
                }} defaultValue={emp.price} onChange={this.props.changeState("price")}/></td>
                <td><input type="text" style={{
                    backgroundColor: this.state.trBackgroundColorFlag ? '#f0f0f0' : 'white',
                    border: '1px solid rgba(0,0,0,0.1)',
                    textAlign: 'center'
                }} defaultValue={emp.num} onChange={this.props.changeState("num")}/></td>

                {/*总金额*/}
                <td style={{textAlign: 'center'}}>{emp.num === '' || emp.price === '' ? '' : emp.num * 1 * emp.price * 1}</td>
            </tr>
        );
    }
}
