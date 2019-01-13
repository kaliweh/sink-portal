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
        const mapClass= (cls)=>{
            switch (cls)
            {
                case 0:
                return 'busy'
                case 1:
                return 'clean'
                case 2:
                return 'dirty'
                case 3:
                return 'funny'
            }
        }

        return (

            <div>
                <div>name: {this.props.imageName}</div>
                <div>class: {mapClass(this.props.classification)}</div>
                <div>classified: {this.props.processed?'true':'false'}</div>
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
    eventTime: (state.search.selectedEvent || {}).created,
    classification: (state.search.selectedEvent || {}).classification,
    processed: (state.search.selectedEvent || {}).processed
});

export default connect(mapStateToProps)(ImgPortalComponent);