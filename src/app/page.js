import React from "react";

export default function Page() {
  return (
    <div style={{ background: "red" }}>
      <div style={{ width: "70%", margin: "auto", background: "white" }}>
      
        <div style={{ height: "120px" }}></div>
        <div style={{background: "black",color: "white",padding: "10px"}}>
          Home About Us Products Contact Us
        </div>

        <div style={{ display: "flex", height: "350px" }}>
          <div style={{width: "30%",background: "green",color: "white",}}>
            Left
          </div>

          <div style={{width: "70%",background: "orange",color: "white",}}>
            Right
          </div>
        </div>
        <div style={{background: "blue",color: "white",padding: "50px",}}>
          Footer Section
        </div>
      </div>
    </div>
  );
}
