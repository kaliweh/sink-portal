import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../actions/imgPortal';
import moment from 'moment'

// jsx

const  clickHandler=(e)=>{
    console.log(e);
}

const items = [{start:moment('2014-02-27T10:00:30'), title:'oh mg', row:0}]

class ImgPortalComponent extends Component {
    componentDidMount(){
        actions.fetchImage(this.props.dispatch);
    }
    render() {
        return (
            <div>
          
            <img src={this.props.imageData} />
            </div>
            )
    }
}

const mapStateToProps = state => ({
    ...state
});

export default connect(mapStateToProps)(ImgPortalComponent);