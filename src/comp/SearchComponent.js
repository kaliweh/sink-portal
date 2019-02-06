import React, { Component } from 'react';
import DatePicker from 'react-datepicker'
import { connect } from 'react-redux';
import actions from '../actions/searchActions';
import imgActions from '../actions/imgPortal';
import "react-datepicker/dist/react-datepicker.css";
import '../assets/styles/search.css';
import moment from 'moment';

import ReactTable from 'react-table'

class SearchComponent extends Component {
    render() {

        const columns = [{
            Header: 'id',
            accessor: 'id' // String-based value accessors!
        },
        {
            Header: 'name',
            accessor: 'eventName' // String-based value accessors!
        },
        {
            id: 'processed',
            Header: 'processed',
            accessor: d => d.processed ? 'Y' : 'XXXXXXXX'
        }, {
            id: 'classification',
            Header: 'classification',
            accessor: d => mapClass(d.classification)
        },

        {
            id: 'created',
            Header: 'created',
            accessor: d => moment.utc(d.created).local().toLocaleString()
        }
        ]
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
        let results = this.props.results;
        const resultRows = results.map((r, i) => {
            return <tr key={'res_' + i} onClick={() => { this.props.dispatch(actions.changeSelectedEvent(r)) }}>
                <td>{r.id}</td>
                <td>{r.eventName}</td>
                <td>{r.processed ? 'Y' : 'XXXXXXXX'}</td>
                <td>{mapClass(r.classification)}</td>
                <td>{moment.utc(r.created).local().toLocaleString()}</td>
            </tr>
        });
        return (
            <center>
                <div>
                    <span className='searchLabel'>Start Date: </span>
                    <DatePicker
                        selected={this.props.startDate}
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={15}
                        dateFormat="MMMM d, yyyy h:mm aa"
                        timeCaption="time"
                        className='form-control searchInput'
                        onChange={(v) => this.props.dispatch(actions.searchStartChanged(v))} />
                    <span className='searchLabel'>End Date: </span>
                    <DatePicker
                        selected={this.props.endDate}
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={15}
                        dateFormat="MMMM d, yyyy h:mm aa"
                        timeCaption="time"
                        className='form-control searchInput'
                        onChange={(v) => this.props.dispatch(actions.searchEndChanged(v))} />
                    <span className='searchLabel'>Class: </span>
                    <select className='searchInput' value={this.props.classification} onChange={(e) => { this.props.dispatch(actions.classificationChanged(e.target.value)) }}>
                        <option value="0,1,2,3">All</option>
                        <option value="0">Busy</option>
                        <option value="1">Clean</option>
                        <option value="2">Dirty</option>
                        <option value="3">Funny</option>
                    </select>

                    <input className="searchInput searchLabel imageControl" placeholder="" aria-label="" aria-describedby="basic-addon1" onKeyDown={(e) => this.props.dispatch(actions.searchKeyChanged(e.key))} />
                    <div>
                        <button className='btn btn-success form-control goButton' onClick={() => this.props.dispatch(actions.submitSearch())}>GO</button>
                    </div>
                    <ReactTable
                        className='table table-bordered table-striped table-hover resultsTable -highlight'
                        data={this.props.results}
                        pageSizeOptions={[50, 100, 200, 1000]}
                        defaultPageSize={50}
                        columns={columns}
                        filterable
                        defaultFilterMethod={(filter, row) =>
                            String(row[filter.id]) === filter.value}
                        onClick={() => { console.log('clicked') }}
                        getTrProps={(state, rowInfo, column, instance) => {
                            return {
                                onClick: (e, handleOriginal) => {
                                    //console.log("A Td Element was clicked!");
                                    //console.log("it produced this event:", e);
                                    //console.log("It was in this column:", column);
                                    //console.log("It was in this row:", rowInfo);
                                    const data = rowInfo.original;
                                    this.props.dispatch(actions.changeSelectedEvent(data))
                                    //console.log("It was in this table instance:", instance);

                                    // IMPORTANT! React-Table uses onClick internally to trigger
                                    // events like expanding SubComponents and pivots.
                                    // By default a custom 'onClick' handler will override this functionality.
                                    // If you want to fire the original onClick handler, call the
                                    // 'handleOriginal' function.
                                    if (handleOriginal) {
                                        handleOriginal();
                                    }
                                }
                            };
                        }}


                    />
                </div>
            </center>)
    }
}

const mapStateToProps = state => ({
    startDate: state.search.startDate,
    endDate: state.search.endDate,
    classification: state.search.classification,
    results: state.search.results,
});

export default connect(mapStateToProps)(SearchComponent);