
const credentialsChanged = (newVal) => {
    return { type: 'CREDENTIALS_CHANGED', payload: newVal };
}

module.exports = { credentialsChanged}