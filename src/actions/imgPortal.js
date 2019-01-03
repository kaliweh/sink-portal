import axios from 'axios';
const FETCH_IMAGE = 'FETCH_IMAGE';
const FETCH_IMAGE_PENDING = 'FETCH_IMAGE'+'_PENDING'
const FETCH_IMAGE_FULFUILLED = 'FETCH_IMAGE'+'_FULFILLED'
const FETCH_IMAGE_REJECTED = 'FETCH_IMAGE'+'_REJECTED'

//import {AzureStorage} from 'azure-storage.browser'; 

  async function streamToString(readableStream) {
    return new Promise((resolve, reject) => {
      const chunks = [];
      readableStream.on("data", data => {
        chunks.push(data.toString());
      });
      readableStream.on("end", () => {
        resolve(chunks.join(""));
      });
      readableStream.on("error", reject);
    });
  }

const fetchImage = (imgName)=>{
    return (dispatch, getState)=>{
    dispatch({type: FETCH_IMAGE_PENDING});
    const account = "sinkimagesstorage";
    const accountKey = getState().access.storageKey;


    var blobUri = 'https://' + account + '.blob.core.windows.net';
    var blobService = AzureStorage.Blob.cre(blobUri, sas).withFilter(new AzureStorage.Blob.ExponentialRetryPolicyFilter());










//     const sharedKeyCredential = new SharedKeyCredential(account, accountKey);
//     const pipeline = StorageURL.newPipeline(sharedKeyCredential);
//     const serviceURL = new ServiceURL(
//         // When using AnonymousCredential, following url should include a valid SAS or support public access
//         `https://${account}.blob.core.windows.net`,
//         pipeline
//       );
    

//    // const sharedKeyCredential = new SharedKeyCredential(account, accountKey);
//     const blobURL = 'https://sinkimagesstorage.blob.core.windows.net/sink-images/'+imgName
//     const blockBlobURL = BlockBlobURL.fromBlobURL(blobURL);

//     blobURL.download(Aborter.none, 0).then(res=>{
//         console.log(
//             "Downloaded blob content",
//             streamToString(res.blobBody)
//           );
//     });
//     streamToString(downloadBlockBlobResponse.readableStreamBody).then()
//     console.log(
//       "Downloaded blob content",
//       downloadBlockBlobResponse
//     );


    // axios.get('https://assets.wordpress.envato-static.com/uploads/2017/08/tropical-PS53BSA.jpg',{ responseType: 'arraybuffer' })
    // .then(res=>{
    //     let image = btoa(
    //         new Uint8Array(res.data)
    //           .reduce((data, byte) => data + String.fromCharCode(byte), '')
    //       );
    //       const data= `data:${res.headers['content-type'].toLowerCase()};base64,${image}`;
        

    //    // console.log(res);
    //     dispatch({type:FETCH_IMAGE_FULFUILLED, payload:data});
    // }).catch(err=>{dispatch({type:FETCH_IMAGE_REJECTED, payload: err})});

}
}

module.exports = {fetchImage}