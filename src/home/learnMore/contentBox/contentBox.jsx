import React from "react";
import "./contentBox.scss";

const ContentBox = (props) => {
    return (
        <div className="contentBox" id={props.id} >
            {props.children}
        </div>
    );
}

export default ContentBox;