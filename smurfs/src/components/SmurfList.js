import React, {useEffect} from "react";
import Smurfs from "../components/Smurfs";
import { connect } from "react-redux";
import fetchSmurfs from "../store/action";

const SmurfList = props => {

  useEffect(() => {
    props.fetchSmurfs();
  }, []);

  return (
    <div>
      <p>hello</p>
      {props.smurf &&
        props.smurf.map(sm => {
          return <Smurfs key={sm.id} smurf={sm} />;
        })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurf: state.smurfs
  };
};

export default connect(
  mapStateToProps,
  { fetchSmurfs }
)(SmurfList);
