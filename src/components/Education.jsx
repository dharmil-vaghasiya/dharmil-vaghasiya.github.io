import React from "react";
import styled from "styled-components";
import { TextSecondary } from "../css/colors";

const Summary = styled.div`
    font-size: 1rem;
    font-weight: bold;
    color: ${TextSecondary};
`

function EducationItem({ area, startDate, endDate, institution, studyType, gpa, summary }) {
    return (
        <div>
            <h3>{`${studyType}`}</h3>

            <Summary>
                <div>{institution}</div>
                <div>{`${startDate} - ${endDate}`}</div>
                <div><span>GPA: {gpa}</span></div>
                {
                    summary && <div><span>{summary}</span></div>
                }
            </Summary>
        </div>
    )
}
export default function Education({ education }) {
    return (
        <div id="education">
            <h2><i className="fa fa-graduation-cap left"></i> EDUCATION</h2>
            {
                education.map((educationItem, index) => {
                    return <EducationItem key={`education-${index}`} {...educationItem} />
                })
            }
        </div>
    )
}