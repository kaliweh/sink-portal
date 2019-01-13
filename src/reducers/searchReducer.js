

const searchReducer = (state, action) => {
    switch (action.type) {
      case 'SEARCH_START_CHANGED':
        return { ...state, startDate: action.payload };
        case 'SEARCH_END_CHANGED':
        return { ...state, endDate: action.payload };
        case 'SEARCH_FULFILLED':
        return { ...state, results: action.payload };
        case 'SELECTED_EVENT_CHANGED':
        return { ...state, selectedEvent: action.payload };
        case 'CLASSIFICATION_CHANGED':
        return { ...state, classification: action.payload };
      default:
        return { ...state };
    }
  };

  export default searchReducer;