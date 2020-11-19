import React from "react";
import "./Loading.css";
const Loading = () => {
    return (
        <div id="loading-container">
            <div className="loading">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
            </div>
        </div>
    );
};

export default Loading;
