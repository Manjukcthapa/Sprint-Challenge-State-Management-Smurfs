import React from "react";
import Smurfs from "../components/Smurfs";
import {connect} from 'react-redux'

const SmurfList = props => {
    <div>
    <p>hello</p>
    {props.smurf &&
      props.smurf.map(sm => {
        return <Smurfs key={sm.id} smurf={sm} />;
      })}
  </div>
};



export default SmurfList;
