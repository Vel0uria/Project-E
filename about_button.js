"use strict";
import React, { useState } from "react";
const e = React.createElement;
 function aboutButton() {
  const { state, setState } = useState(false);
//   render(){
//     if(state = true){
//         return 'text'
//       }
//   }
      
  
  return e(
    "button",
    {
      onClick: () =>
        // this.setState({
        //    liked: true,
        //})
        setState({ state = true }),
    },
    "Like"
  );
}

const domContainer = document.querySelector("#about_button_container");
ReactDOM.render(e(aboutButton), domContainer);
