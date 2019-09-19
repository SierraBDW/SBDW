import React from "react";
import Iframe from "react-iframe";
import Script from "react-inline-script";
import "./calendar.css";


const Calendar = () => {
  return (
    <div>
      <Iframe className="iFrame"
        src="https://kimduclos.youcanbook.me/?noframe=true&skipHeaderFooter=true" 
        id="ycbmiframekimduclos" 
        style=
          "width:100%;
          height:100%;
          border:0px;
          background-color:transparent;" 
        frameborder="0" 
        allowtransparency="true">
      </Iframe>
      <Script>
        {`window.addEventListener && window.addEventListener("message", function(event){
        if (event.origin === "https://kimduclos.youcanbook.me"){
          document.getElementById("ycbmiframekimduclos").style.height = event.data + "px";
          }
        }, false);`}
      </Script>
    </div>
  );
}

export default Calendar;