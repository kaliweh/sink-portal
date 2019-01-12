import axios from 'axios';
import { changeSelectedEvent } from './searchActions'
import {saveAs} from 'file-saver'
const FETCH_IMAGE = 'FETCH_IMAGE';
const FETCH_IMAGE_PENDING = 'FETCH_IMAGE' + '_PENDING'
const FETCH_IMAGE_FULFUILLED = 'FETCH_IMAGE' + '_FULFILLED'
const FETCH_IMAGE_REJECTED = 'FETCH_IMAGE' + '_REJECTED'

let resultsCount = 0;
let playIndex = 0;
let playDivider = 3;

const playNextEvent=(i)=>{
    return (dispatch, getState) => {
    if(i<resultsCount){
        playIndex = i +1;
        dispatch(changeSelectedEvent(getState().search.results[i]));
        setTimeout(()=>{ dispatch(playNextEvent(playIndex))}, 1000/playDivider);
    }
}
}
const playEvents = () => {
    return (dispatch, getState) => {
        const results = getState().search.results;
        resultsCount = results.length;
        playIndex = 0;
        dispatch(playNextEvent(0));
    };
};

// const saveImageAs = (folder) =>{
//     return (dispatch, getState) => {
//         const event = getState().search.selectedEvent;
//         //saveAs('https://sinkimagesstorage.blob.core.windows.net/sink-images/'+ event.eventName, event.eventName+ folder + '.jpeg')
//          axios({url:'https://sinkimagesstorage.blob.core.windows.net/sink-images/'+event.eventName,  responseType: 'blob', method:'GET', headers:{'Access-Control-Allow-Origin': 'http://localhost:8080'}}).then(resp=>{
//           const blob = new Blob([resp.data]);
//           saveAs(blob, event.eventName+ folder)
//          })
        
//         // resultsCount = results.length;
//         // playIndex = 0;
//         // dispatch(playNextEvent(0));
//     };  
// }


const fetchImage = (imgName) => {
    return { type: 'FETCH_IMAGE', payload: 'https://sinkimagesstorage.blob.core.windows.net/sink-images/' + imgName }
}

module.exports = { fetchImage, playEvents }