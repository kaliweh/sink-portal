

const searchReducer = (state, action) => {
    switch (action.type) {
      case 'SEARCH_START_CHANGED':
        return { ...state, startDate: action.payload };
        case 'SEARCH_END_CHANGED':
        return { ...state, endDate: action.payload };
      default:
        return { ...state };
    }
  };

  export default searchReducer;