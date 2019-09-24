import React from "react";
import "./contentBox.css";

const ContentBox = (props) => {
    return (
        <div className="contentBox" id={props.id} >
            {props.children}
        </div>
    );
}

export default ContentBox;