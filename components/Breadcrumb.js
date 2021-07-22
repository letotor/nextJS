import React, { useState, useEffect } from "react";

const Breadcrumb = (props) => {
  const [state, setState] = useState({ isVisible: props.isVisible });

//   const useEffect = () => {
//     return setState({ isVisible: props.isVisible }), [];
//   };

let display 
  if (state.isVisible) {
    display= "md-block";
  } else {
    display = "hidden";
  }

  const className = `${props.className} " bg-purple-300 text-white text-center " ${display}`;
  return (
    <div className={className}>
      <p>Mode debug :</p>
      <pre> {JSON.stringify(display, null, 4)}</pre>
      <div className={className}>{props.children}</div>
    </div>
  );
};

export default Breadcrumb;
