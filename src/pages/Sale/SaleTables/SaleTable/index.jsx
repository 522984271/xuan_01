import React, {Component} from 'react';
import SaleTableContent from "./SaleTableContent";
import SaleTableHeader from "./SaleTableHeader";

export default class SaleTable extends Component {
    render() {
        return (
            <div>
                <SaleTableHeader/>
                <SaleTableContent/>
            </div>
        );
    }
}
