import React, { useState } from "react";
import { connect } from "react-redux";
import { addSmurf } from "../store/action";

const Form = props => {
  const [newSmurf, setNewSmurf] = useState({
    name: "",
    age: "",
    height: ""
  });

  const handleSubmit = e => {
    e.preventDefault();
    props.addSmurf(newSmurf);
    setNewSmurf({ name: "", age: "", height: ""})
  };

  const handleChanges = e => {
    let name = e.target.name;
    setNewSmurf({ ...newSmurf, [name]: e.target.value });
  };

  return (
    <div>
      <form>
          <h1>Friends Form</h1>
        <input
          name="name"
          type="text"
          placeholder="name"
          value={newSmurf.name}
          onChange={handleChanges}
        ></input>
        <input
          name="age"
          type="text"
          placeholder="age"
          value={newSmurf.age}
          onChange={handleChanges}
        ></input>
        <input
          name="height"
          type="text"
          placeholder="height"
          value={newSmurf.height}
          onChange={handleChanges}
        ></input>
        <button type="submit" onClick={handleSubmit}>
          Submit Form
        </button>
      </form>
    </div>
  );
};

export default connect(
  null,
  { addSmurf }
)(Form);
