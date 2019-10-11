import React, {useState} from "react";

const SmurfForm = props => {
  const [newSmurf, setNewSmurf] = useState({
    name: "",
    age: "",
    height: ""
  });

  const handleSubmit = e => {
    e.preventDefault();
  
  };

  const handleChanges = e => {
    let name = e.target.name;
    setNewSmurf({ ...newSmurf, [name]: e.target.value });
  };

  return (
    <div>
      <input
        name="name"
        type="text"
        placeholder="name"
        onChange={handleChanges}
      />
      <input
        name="age"
        type="text"
        placeholder="age"
        onChange={handleChanges}
      />
      <input
        name="height"
        type="text"
        placeholder="height"
        onChange={handleChanges}
      />
      <button type="submit" onClick={handleSubmit}>
        Add Friends
      </button>
    </div>
  );
};

export default SmurfForm;
