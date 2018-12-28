import React, { Component } from 'react';
import AppHeaderComponent from './AppHeaderComponent';

class AppRootComponent extends Component{
    render() {
        return <div>
            <AppHeaderComponent/>
        <h1>Hello From component!</h1>
        </div>
    }
}
export default AppRootComponent;