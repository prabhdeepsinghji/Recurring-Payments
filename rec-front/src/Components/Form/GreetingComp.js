import React from "react";
import "./greeting.css";

function GreetingComp(props) {
  return (
    <div className="greeting">
      {props.screen === 0 ? (
        <h1 className="greet_hello">Hello,</h1>
      ) : (
        <>
          <h1 className="greet_hello">Add</h1>
          <h1 className="greet_hello">User</h1>
        </>
      )}
      {props.screen === 0 ? (
        <p className="greet_name">{props.username}</p>
      ) : null}
    </div>
  );
}

export default GreetingComp;
