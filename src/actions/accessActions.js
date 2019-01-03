
const credentialsChanged =(newVal)=>{
    return {type:'CREDENTIALS_CHANGED', payload: newVal};
}

const storageKeyChanged =(newVal)=>{
    return {type:'STORAGE_KEY_CHANGED', payload: newVal};
}

module.exports = {credentialsChanged, storageKeyChanged}