import React from "react";
const Smurfs = props => {
  return (
    <div className="smurf">
      <h3>{props.smurf.name}</h3>
      <p>Age: {props.smurf.age}</p>
      <p>Height: {props.smurf.height}</p>
    </div>
  );
};
export default Smurfs;