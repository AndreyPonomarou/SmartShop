const initialState = {
    email: "",
    errorMessage: "",
    loading: false,
  };
  
  const reducer = (state = initialState, action) => {
    if (action.type === "EMAIL_CHANGED") {
      return {
        email: action.payload,
      };
    }
  
    if (action.type === "REGISTRATION_START") {
      return {
        ...state,
        loading: true,
      };
    }
  
    if (action.type === "REGISTRATION_SUCCESS") {
      return {
        ...state,
        loading: false,
      };
    }
  
    if (action.type === "REGISTRATION_FAILURE") {
      return {
        ...state,
        errorMessage: action.payload,
        loading: false,
      };
    }
    return state;
  };
  
  export default reducer;
  