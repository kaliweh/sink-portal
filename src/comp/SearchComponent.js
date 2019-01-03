import React, { Component } from 'react';
import DatePicker from 'react-datepicker'
import { connect } from 'react-redux';
import  actions from '../actions/searchActions';
import  imgActions from '../actions/imgPortal';
import "react-datepicker/dist/react-datepicker.css";
import '../assets/styles/search.css';

class SearchComponent extends Component {
    render() {
        let results = this.props.results;
        const resultRows = results.map((r,i)=>{
            return <tr key={'res_'+i} onClick={()=>{this.props.dispatch(imgActions.fetchImage(r.eventName))}}>
                <td>{r.id}</td>
                <td>{r.eventName}</td>
                <td>{r.processed}</td>
                <td>{r.classification}</td>
                <td>{r.created}</td>
                </tr>
        });
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
            className='form-control'
            onChange={(v)=>this.props.dispatch(actions.searchStartChanged(v))}/>
        <span>End Date:</span>
        <DatePicker
            selected={this.props.endDate}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="MMMM d, yyyy h:mm aa"
            timeCaption="time"
            className='form-control'
            onChange={(v)=>this.props.dispatch(actions.searchEndChanged(v))}/>
            <button className='btn btn-success form-control' onClick={()=>this.props.dispatch(actions.submitSearch())}>GO</button>

<table className='table table-bordered table-dark table-hover resultsTable'>
<thead>
    <tr>
        <th>id</th>
        <th>name</th>
        <th>processed</th>
        <th>classification</th>
        <th>created</th>
    </tr>
</thead>
<tbody>
{resultRows}
</tbody>

    </table>
            </div>)
    }
}

const mapStateToProps = state => ({
    startDate: state.search.startDate,
    endDate: state.search.endDate,
    results: state.search.results,
});

export default connect(mapStateToProps)(SearchComponent);