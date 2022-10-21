import React from "react";
import "../css/Loading.css";
import imgsss from "./logo222.png";
function Loading() {
  return (
    <div className="Loading">
      <div class="wrapper">
        <div class="loading">
          {/* <div class="inner_circle"></div> */}
          <img class="inner_circle" src={imgsss} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Loading;
