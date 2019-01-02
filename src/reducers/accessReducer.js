

const accessReducer = (state, action) => {
    switch (action.type) {
      case 'CREDENTIALS_CHANGED':
        return { ...state, credentials: action.payload }
      default:
        return { ...state };
    }
  };

  export default accessReducer;