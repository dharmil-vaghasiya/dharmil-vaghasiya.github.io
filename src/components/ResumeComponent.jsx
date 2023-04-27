import React from "react";
import BasicInfo from "./BasicInfo";
import Skills from "./Skills";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import Projects from "./Projects";
import { SummaryComponent } from "./Summary";

export default function ResumeComponent({ resume }) {
  return (
    <>
      <BasicInfo {...resume.basics} />
      <div className="main">
        <SummaryComponent summary={resume.summary} />
        <Skills skills={resume.skills} />
        <WorkExperience work={resume.work} />
        <Education education={resume.education} />
        <Projects projects={resume.projects} />
      </div>
    </>
  );
}
