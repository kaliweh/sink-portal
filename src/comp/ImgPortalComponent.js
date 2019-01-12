import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../actions/imgPortal';
import moment from 'moment'

// jsx

const clickHandler = (e) => {
    console.log(e);
}

class ImgPortalComponent extends Component {
    render() {
        return (

            <div>
                <div>name: {this.props.imageName}</div>
                <div>time: {moment.utc(this.props.eventTime).local().toLocaleString()}</div>
                <a download href={'https://sinkimagesstorage.blob.core.windows.net/sink-images/' + this.props.imageName} >
                <img src={'https://sinkimagesstorage.blob.core.windows.net/sink-images/' + this.props.imageName} />
                </a>
                <div>
                    <button className='btn btn-info' onClick={() => this.props.dispatch(actions.playEvents())}>Play ></button>
                </div>
            </div>)

    }
}

const mapStateToProps = state => ({
    imageName: (state.search.selectedEvent || {}).eventName,
    eventTime: (state.search.selectedEvent || {}).created
});

export default connect(mapStateToProps)(ImgPortalComponent);