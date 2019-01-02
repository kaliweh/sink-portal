import React, { Component } from 'react';
import AppHeaderComponent from './AppHeaderComponent';
import ImgPortalComponent from './ImgPortalComponent';
import SearchComponent from './SearchComponent';

class AppRootComponent extends Component{
    render() {
        return <div>
            <AppHeaderComponent/>
            <SearchComponent />
            <ImgPortalComponent/>
        </div>
    }
}
export default AppRootComponent;