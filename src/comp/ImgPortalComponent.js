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
        const mapClass = (cls) => {
            switch (cls) {
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
            <div>{
                this.props.id &&
                <div>
                    <center>
                        <a download href={'https://sinkimagesstorage.blob.core.windows.net/sink-images/' + this.props.imageName} >
                            <img src={'https://sinkimagesstorage.blob.core.windows.net/sink-images/' + this.props.imageName} className='portalImage' />
                        </a>

                        <table className='table table-dark eventInfo'>
                            <thead>
                                <tr><th>id</th><th>name</th><th>class</th><th>classified</th><th>time</th></tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        {this.props.id}
                                    </td><td>
                                        {this.props.imageName}
                                    </td>
                                    <td>
                                        {mapClass(this.props.classification)}
                                    </td>
                                    <td>
                                        {this.props.processed ? 'true' : 'false'}
                                    </td>
                                    <td>
                                        {moment.utc(this.props.eventTime).local().toLocaleString()}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </center>
                    {/* <button className='btn btn-info' onClick={() => this.props.dispatch(actions.playEvents())}>Play ></button> */}
                </div>}
            </div>
        )
    }

}

const mapStateToProps = state => ({
    imageName: (state.search.selectedEvent || {}).eventName,
    id: (state.search.selectedEvent || {}).id,
    eventTime: (state.search.selectedEvent || {}).created,
    classification: (state.search.selectedEvent || {}).classification,
    processed: (state.search.selectedEvent || {}).processed
});

export default connect(mapStateToProps)(ImgPortalComponent);