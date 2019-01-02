import axios from 'axios'
import moment from 'moment'

const searchStartChanged =(newVal)=>{
    console.log(newVal);
    return {type:'SEARCH_START_CHANGED', payload: newVal};
}

const searchEndChanged =(newVal)=>{
    return {type:'SEARCH_END_CHANGED', payload: newVal};
}

const demoResp = [{classification: 0,
    created: "2018-12-31T20:50:14.963",
    eventName: "cap-1546289173635",
    id: 1201,
    processed: false},{classification: 0,
        created: "2018-12-31T20:50:14.963",
        eventName: "cap-1546289173635",
        id: 1201,
        processed: false}];
	
const submitSearch =()=>  {
    return (dispatch, getState)=>{
        dispatch(searchStarted());
        const st = getState().search.startDate;
        const end = getState().search.endDate;
        // axios.get('https://sinkapi.azurewebsites.net/api/GetSinkEvents?start='+ moment(st).format('YYYYMMDDhhmmss')+'&end='+moment(end).format('YYYYMMDDhhmmss'),{ headers: {
        //     'x-functions-key': getState().access.credentials
        //   }}).then(res=>dispatch(searchFulfilled(res.data)));
        dispatch(searchFulfilled(demoResp));
    }
    //dispatch({type:'SUBMIT_SEARCH'});
};
const searchStarted = ()=>{
    return {type:'SUBMIT_SEARCH'};
}

const searchFulfilled = (data) =>{
    return {type:'SEARCH_FULFILLED', payload: data};
}


module.exports = {searchStartChanged, searchEndChanged, submitSearch}