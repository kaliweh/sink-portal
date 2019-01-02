import React, { Component } from 'react';
import DatePicker from 'react-datepicker'
import { connect } from 'react-redux';
import  actions from '../actions/searchActions';
import "react-datepicker/dist/react-datepicker.css";

class SearchComponent extends Component {
    render() {
        return (
        <div>
            <span>Start Date:</span>
        <DatePicker
            selected={this.props.startDate}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="MMMM d, yyyy h:mm aa"
            timeCaption="time"
            onChange={(v)=>this.props.dispatch(actions.searchStartChanged(v))}/>
        <span>End Date:</span>
        <DatePicker
            selected={this.props.endDate}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="MMMM d, yyyy h:mm aa"
            timeCaption="time"
            onChange={(v)=>this.props.dispatch(actions.searchEndChanged(v))}/>
            <button className='btn btn-success' onClick={()=>this.props.dispatch(actions.submitSearch())}>Go</button>
            </div>)
    }
}

const mapStateToProps = state => ({
    startDate: state.search.startDate,
    endDate: state.search.endDate
});

export default connect(mapStateToProps)(SearchComponent);