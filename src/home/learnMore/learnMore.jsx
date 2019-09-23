import React from "react";
import "./learnMore.css";
import ContentBox from "./contentBox/contentBox";

const LearnMore = () => {
    return (
        <div className="learnContainer">
            <ContentBox/>
            <ContentBox/>
            <ContentBox/>
            <ContentBox/>
        </div>
    );
}

export default LearnMore;