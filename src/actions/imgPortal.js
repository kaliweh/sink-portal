import axios from 'axios';
const FETCH_IMAGE = 'FETCH_IMAGE';
const FETCH_IMAGE_PENDING = 'FETCH_IMAGE'+'_PENDING'
const FETCH_IMAGE_FULFUILLED = 'FETCH_IMAGE'+'_FULFILLED'
const FETCH_IMAGE_REJECTED = 'FETCH_IMAGE'+'_REJECTED'


const fetchImage =dispatch=>{
    dispatch({type: FETCH_IMAGE_PENDING});
    axios.get('https://assets.wordpress.envato-static.com/uploads/2017/08/tropical-PS53BSA.jpg',{ responseType: 'arraybuffer' })
    .then(res=>{
        let image = btoa(
            new Uint8Array(res.data)
              .reduce((data, byte) => data + String.fromCharCode(byte), '')
          );
          const data= `data:${res.headers['content-type'].toLowerCase()};base64,${image}`;
        

       // console.log(res);
        dispatch({type:FETCH_IMAGE_FULFUILLED, payload:data});
    }).catch(err=>{dispatch({type:FETCH_IMAGE_REJECTED, payload: err})});

}

module.exports = {fetchImage}