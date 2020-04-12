import React, { Component } from "react";
import styled from "styled-components";

import Typed from "react-typed";

const StyledMain = styled.section`
  background-color: #e1e9e9;
  color: #f2f2f2;
  // width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;

  @media screen and (max-width: 800px) {
    height: 80vh;
  }

  box-sizing: border-box;
`;

const SectionWrapperLight = styled.div`
  font-family: "Roboto";
  font-size: 2.5rem;
  padding: 5vw 10vh;
  @media screen and (max-width: 800px) {
    font-size: 1.5rem;
  }
`;
// const SectionWrapperDarker = styled.div`
//   font-family: "Roboto";
//   font-size: 2.5rem;
//   padding: 5vw 10vh;
//   background-color: #acaaaa;
//   height: 100vh;
//   @media screen and (max-width: 800px) {
//     font-size: 1.5rem;
//   }
// `;

const StyledText = styled.h2`
  color: #ca3c25;
`;

const StyledSurname = styled.small`
  color: #900c3f;
`;

const StyledImage = styled.img`
  height: 25vw;
  width: 25vw;

  @media screen and (max-width: 800px) {
    height: 60vw;
    width: 60vw;
  }
  @media screen and (max-width: 800px) {
    height: 50vw;
    width: 50vw;
  }
  border-radius: 50%;
  border: 3px solid #cf3763;
  box-shadow: 0px 0px 5px #cf3763;
`;

const StyledButton = styled.a`
  background: transparent;
  color: #cf3763;
  border: 2px solid #cf3763;
  font-size: 1.5rem;
  padding: 1rem 1.5rem;
  border-radius: 2.5rem;
  transition: ease-in-out 0.2s;
  display: block;
  margin-top: 1rem;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;

  &:hover {
    background: #cf3763;
    color: #e1e9e9;
    box-shadow: 0px 0px 5px #cfe9e9;
  }
`;

export class Home extends Component {
  render() {
    return (
      <div>
        <StyledMain>
          <SectionWrapperLight>
            <StyledImage
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              alt="Empty Profile"
            />
            <StyledText>
              Hello, I am Anjal<StyledSurname> Bam.</StyledSurname>
              <br />{" "}
              <StyledText as="p">
                I am{" "}
                <Typed
                  strings={[
                    "an Engineer.",
                    "a Self Taught Developer.",
                    " a Learner.",
                  ]}
                  typeSpeed={40}
                  backSpeed={50}
                  backDelay={1500}
                  smartBackspace={true}
                  loop={true}
                />
              </StyledText>
              <StyledButton primary>Download CV</StyledButton>
            </StyledText>
          </SectionWrapperLight>
        </StyledMain>
      </div>
    );
  }
}

export default Home;
