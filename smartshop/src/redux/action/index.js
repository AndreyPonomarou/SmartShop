import axios from "axios";
export const addCart = (product) => {
    return{
        type:"ADDITEM",
        payload: product
    }
}
export const delCart = (product) => {
    return{
        type:"DELITEM",
        payload: product
    }
}

export const emailChanged = (payload) => ({
  type: "EMAIL_CHANGED",
  payload,
});

const registerStart = {
  type: "REGISTRATION_START",
};

const registerSuccess = {
  type: "REGISTRATION_SUCCESS",
};

export const registrationFailure = (payload) => ({
  type: "REGISTRATION_FAILURE",
  payload,
});

export const register = (email, password) => {
  return async (dispatch) => {
    dispatch(registerStart);
    try {
      const response = await axios.post("http://localhost:3001/register", {
        email,
        password,
      });
      dispatch(registerSuccess);
    } catch (error) {
      dispatch(registrationFailure(error.response.data));
    }
  };
};
