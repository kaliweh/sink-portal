
const credentialsChanged =(newVal)=>{
    return {type:'CREDENTIALS_CHANGED', payload: newVal};
}

const searchKeyChanged =(key)=>{
    
    return (dispatch, getState)=>{
    const selected =  getState().search.selectedEvent;
    const resIndex =  getState().search.results.findIndex((r) => {return r.id===selected.id});
    let newEvent={};
    if(key==='ArrowUp'){
        newEvent = getState().search.results[resIndex+1];
    }
    else{
        newEvent = getState().search.results[resIndex-1];
// go down
    }
dispatch({type:'SELECTED_EVENT_CHANGED',payload:newEvent });
}
   // return {type:'SEARCH_KEY_CHANGED', payload: newVal};
}

module.exports = {credentialsChanged, searchKeyChanged}