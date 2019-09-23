import React from "react";
import "./learnMore.css";
import ContentBox from "./contentBox/contentBox";

const LearnMore = () => {
    return (
        <div className="learnContainer">
            <ContentBox id="cb1" style="margin-left: 40%" />
            <ContentBox id="cb2" />
            <ContentBox id="cb1" />
            <ContentBox id="cb2" />
        </div>
    );
}

export default LearnMore;