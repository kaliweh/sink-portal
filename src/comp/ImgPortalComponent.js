import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../actions/imgPortal';
import moment from 'moment'

// jsx

const clickHandler= (e) =>{
    console.log(e);
}

class ImgPortalComponent extends Component {
    render() {
        return (
            <div>
            <img src={this.props.imageData} />
            </div>)
 
    }
}

const mapStateToProps = state => ({
    imageData: state.image.data
});

export default connect(mapStateToProps)(ImgPortalComponent);