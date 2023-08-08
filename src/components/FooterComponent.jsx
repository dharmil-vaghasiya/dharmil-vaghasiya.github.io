import React from "react";
import styled from "styled-components";
import {UIPrimary} from "../css/colors"

const Container = styled.div`
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background-color: ${UIPrimary};
`

const SourceCode = styled.div`
    padding: 5px;
    font-size: 1.21rem;
`

const sourceCodeLink = "https://github.dev/dharmil-vaghasiya/dharmil-vaghasiya.github.io";

export default function FooterComponent() {
    return (
        <Container>
            <div>
                This website has been created using React@^18.2.0
            </div>
            <SourceCode>
                The Source code can be found at <a href={sourceCodeLink}>{sourceCodeLink}</a> , Feel free to use it.
            </SourceCode>
        </Container>
    )
}