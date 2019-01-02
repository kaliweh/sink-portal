import axios from 'axios'
const searchStartChanged =(newVal)=>{
    return {type:'SEARCH_START_CHANGED', payload: newVal};
}

const searchEndChanged =(newVal)=>{
    return {type:'SEARCH_END_CHANGED', payload: newVal};
}

	


const submitSearch =()=>  {
    return (dispatch, getState)=>{
        dispatch(searchStarted());
        axios.get('https://sinkapi.azurewebsites.net/',{ headers: {
            'x-functions-key': getState().access.credentials
          }}).then(res=>dispatch(searchFulfilled(res.data)));
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