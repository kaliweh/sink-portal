import axios from 'axios'
import moment from 'moment'

const searchStartChanged =(newVal)=>{
    console.log(newVal);
    return {type:'SEARCH_START_CHANGED', payload: newVal};
}

const searchEndChanged =(newVal)=>{
    return {type:'SEARCH_END_CHANGED', payload: newVal};
}

const demoResp = [{"id":4951,"eventName":"cap-1546638483567","processed":false,"classification":0,"created":"2019-01-04T21:48:15.707"},{"id":4952,"eventName":"cap-1546638486595","processed":false,"classification":0,"created":"2019-01-04T21:48:15.753"},{"id":4953,"eventName":"cap-1546638489487","processed":false,"classification":0,"created":"2019-01-04T21:48:15.8"},{"id":4954,"eventName":"cap-1546638488252","processed":false,"classification":0,"created":"2019-01-04T21:48:15.847"},{"id":4955,"eventName":"cap-1546638490867","processed":false,"classification":0,"created":"2019-01-04T21:48:15.893"},{"id":4956,"eventName":"cap-1546638492830","processed":false,"classification":0,"created":"2019-01-04T21:48:15.94"},{"id":4957,"eventName":"cap-1546638485186","processed":false,"classification":0,"created":"2019-01-04T21:48:16.037"},{"id":4958,"eventName":"cap-1546638494138","processed":false,"classification":0,"created":"2019-01-04T21:48:26.44"},{"id":4959,"eventName":"cap-1546638495447","processed":false,"classification":0,"created":"2019-01-04T21:48:26.973"},{"id":4960,"eventName":"cap-1546638636934","processed":false,"classification":0,"created":"2019-01-04T21:50:47.177"},{"id":4961,"eventName":"cap-1546638638256","processed":false,"classification":0,"created":"2019-01-04T21:50:47.24"},{"id":4962,"eventName":"cap-1546638639448","processed":false,"classification":0,"created":"2019-01-04T21:50:47.3"},{"id":4963,"eventName":"cap-1546639109462","processed":false,"classification":0,"created":"2019-01-04T21:58:38.93"},{"id":4964,"eventName":"cap-1546639112089","processed":false,"classification":0,"created":"2019-01-04T21:58:38.993"},{"id":4965,"eventName":"cap-1546639110988","processed":false,"classification":0,"created":"2019-01-04T21:58:39.273"},{"id":4966,"eventName":"cap-1546639117622","processed":false,"classification":0,"created":"2019-01-04T21:58:49.35"},{"id":4967,"eventName":"cap-1546639118918","processed":false,"classification":0,"created":"2019-01-04T21:58:49.413"},{"id":4968,"eventName":"cap-1546639120246","processed":false,"classification":0,"created":"2019-01-04T21:58:49.553"},{"id":4969,"eventName":"cap-1546639122207","processed":false,"classification":0,"created":"2019-01-04T21:58:49.633"},{"id":4970,"eventName":"cap-1546639123460","processed":false,"classification":0,"created":"2019-01-04T21:58:49.71"},{"id":4971,"eventName":"cap-1546639124731","processed":false,"classification":0,"created":"2019-01-04T21:58:49.743"},{"id":4972,"eventName":"cap-1546639126953","processed":false,"classification":0,"created":"2019-01-04T21:58:49.803"},{"id":4973,"eventName":"cap-1546639128323","processed":false,"classification":0,"created":"2019-01-04T21:59:00.6"},{"id":4974,"eventName":"cap-1546639129531","processed":false,"classification":0,"created":"2019-01-04T21:59:00.65"},{"id":4975,"eventName":"cap-1546639133355","processed":false,"classification":0,"created":"2019-01-04T21:59:00.697"},{"id":4976,"eventName":"cap-1546639134556","processed":false,"classification":0,"created":"2019-01-04T21:59:00.76"},{"id":4977,"eventName":"cap-1546639135732","processed":false,"classification":0,"created":"2019-01-04T21:59:00.82"},{"id":4978,"eventName":"cap-1546639138641","processed":false,"classification":0,"created":"2019-01-04T21:59:11.413"},{"id":4979,"eventName":"cap-1546639139878","processed":false,"classification":0,"created":"2019-01-04T21:59:11.493"},{"id":4980,"eventName":"cap-1546639141128","processed":false,"classification":0,"created":"2019-01-04T21:59:11.523"},{"id":4981,"eventName":"cap-1546639821950","processed":false,"classification":0,"created":"2019-01-04T22:10:26.793"},{"id":4982,"eventName":"cap-1546639823506","processed":false,"classification":0,"created":"2019-01-04T22:10:27.17"},{"id":4983,"eventName":"cap-1546639824697","processed":false,"classification":0,"created":"2019-01-04T22:10:37.513"},{"id":4984,"eventName":"cap-1546640799784","processed":false,"classification":0,"created":"2019-01-04T22:26:53.207"},{"id":4985,"eventName":"cap-1546640802441","processed":false,"classification":0,"created":"2019-01-04T22:26:53.283"},{"id":4986,"eventName":"cap-1546640801307","processed":false,"classification":0,"created":"2019-01-04T22:26:53.533"}];
	
const submitSearch =()=>  {
    return (dispatch, getState)=>{
        dispatch(searchStarted());
        const st = getState().search.startDate;
        const end = getState().search.endDate;
        const classification = getState().search.classification;
        axios.get('https://sinkapi.azurewebsites.net/api/GetSinkEvents?start='+ moment.utc(st).format('YYYYMMDDHHmmss')+'&end='+moment.utc(end).format('YYYYMMDDHHmmss') +'&classification=' +classification,{ headers: {
            'x-functions-key': getState().access.credentials
          }}).then(res=>dispatch(searchFulfilled(res.data)));
        //dispatch(searchFulfilled(demoResp));
    }
    //dispatch({type:'SUBMIT_SEARCH'});
};


const classificationChanged = (newClass)=>{
    return {type:'CLASSIFICATION_CHANGED',payload:newClass };    
}
const changeSelectedEvent = (event)=>{
    return {type:'SELECTED_EVENT_CHANGED',payload:event };
  //  return {type:'SUBMIT_SEARCH'};
}

const searchStarted = ()=>{
    return {type:'SUBMIT_SEARCH'};
}

const searchFulfilled = (data) =>{
    return {type:'SEARCH_FULFILLED', payload: data};
}


module.exports = {searchStartChanged, searchEndChanged, submitSearch, changeSelectedEvent,classificationChanged}