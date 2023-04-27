import React from "react";
import FooterComponent from "./FooterComponent"
import ResumeComponent from "./ResumeComponent";

export function HomeComponent({ resume }) {
    return resume && <>
        <ResumeComponent resume={resume} />
        <FooterComponent />
    </>
}