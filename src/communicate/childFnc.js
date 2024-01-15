import React from "react";

export default function childFnc(props) {
    const { usernameProps, ageProps } = props;
  return (
    <div>
      <h3>childFnc</h3>
      <h4>Username: {usernameProps} - Age: {ageProps}</h4>
    </div>
  );
}
