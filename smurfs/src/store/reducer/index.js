import {
  FETCHING_SMURFS_START,
  FETCHING_SMURFS_SUCCESS,
  FETCHING_SMURFS_FAILURE,
  ADDING_SMURF_SUCCESS
} from "../action/index";

const initialState = {
  smurfs: [],
  isFetching: false,
  error: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS_START:
      return {
        ...state,
        isFetching: true
      };
    case FETCHING_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isFetching: false,
        error: ""
      };
    case FETCHING_SMURFS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    case ADDING_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
