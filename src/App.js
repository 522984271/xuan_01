import React, {Component} from 'react';
import Homepage from "./components/Homepage";
import '../node_modules/antd/dist/antd.css'

export default class App extends Component {
    render() {
        return (
            <div>
              <Homepage/>
            </div>
        );
    }
}

