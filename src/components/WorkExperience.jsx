import React from "react";

function ExperienceItem({
  company,
  highlights,
  position,
  startDate,
  endDate,
  summary,
  website,
  location
}) {
  return (
    <div className="job">
      <span style={{ display: "flex", alignItems: "center" }}>
        <h3>{`${position}, `}</h3>
        <div
          className="company-name"
          onClick={() => window.open(website, "_blank")}
        >
          <h3>{company}</h3>
        </div>
      </span>
      <h4>{`${startDate} - ${endDate} | ${location}`}</h4>
      <p>{summary}</p>
      <h4>HIGHLIGHTS</h4>
      <ul>
        {highlights.map((highlight, index) => {
          return <li key={`highlight-${index}`}>{highlight}</li>;
        })}
      </ul>
    </div>
  );
}

export default function WorkExperience({ work }) {
  return (
    <div id="work">
      <h2>
        <i className="fa fa-suitcase left"></i> PROFESSIONAL WORK EXPERIENCE
      </h2>
      {work.map((experience, index) => {
        return <ExperienceItem key={`experience-${index}`} {...experience} />;
      })}
    </div>
  );
}
