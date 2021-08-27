import React, {Component} from 'react';


export default class SaleTablesItem extends Component {
    state = {
        ItemBackgroundColor: false
    }

    handleMouse = (flag,type) => {
        return ()=>{
            this.setState({
                [type] : flag
            })
        }
    };

    render() {
        const {emp} = this.props;
        return (
            <tr key={emp.key} onClick={this.props.lookTable}
                style={{backgroundColor: this.state.ItemBackgroundColor ? '#f0f0f0' : 'white',
                        cursor: this.state.ItemBackgroundColor ? 'pointer' : ''}}
                onMouseEnter={this.handleMouse(true, 'ItemBackgroundColor')}
                onMouseLeave={this.handleMouse(false, 'ItemBackgroundColor')} className="saleTables">
                <td>{emp.key}</td>
                <td>{emp.name}</td>
                <td>{emp.time}</td>
                <td>{emp.amount}</td>
                <td>{emp.remarks}</td>
            </tr>
        );
    }
}
