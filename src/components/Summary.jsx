import React from "react";

export function SummaryComponent({ summary }) {
    return (
        <div id="about">
            <h2><i className="fa fa-user left"></i> ABOUT</h2>
            <p>{summary}</p>
        </div>
    )
}