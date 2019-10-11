import axios from "axios"

export const FETCHING_SMURFS_START = "FETCHING_SMURFS_START";
export const FETCHING_SMURFS_SUCCESS = "FETCHING_SMURFS_SUCCESS";
export const FETCHING_SMURFS_FAILURE = "FETCHING_SMURFS_FAILURE";
export const ADDING_SMURF_SUCCESS= "ADDING_SMURF_SUCCESS";

const fetchSmurfs = () => dispatch => {
    dispatch({ type: FETCHING_SMURFS_START });
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        dispatch({
          type: FETCHING_SMURFS_SUCCESS,
          payload: res.data
        });
      })
      .catch(err =>
        dispatch({ type: FETCHING_SMURFS_FAILURE, payload: err })
      );
  };

  export const addSmurf = (smurf) => dispatch => {
    //dispatch({type: ADDING_SMURF_START})
    axios
        .post("http://localhost:3333/smurfs", smurf)
        .then(res => {
            dispatch({
                type: ADDING_SMURF_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => console.log(err))
  
  }

  export default fetchSmurfs;