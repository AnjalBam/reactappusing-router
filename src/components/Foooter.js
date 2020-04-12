import React, { Component } from "react";

import styled from "styled-components";

const FooterWrapper = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto";
  font-size: 1rem;
  height: 20vh;
  background-color: #c4acac;
  color: #e9e9e9;
`;

const StyledIcon = styled.a`
  background-color: #ede9e9;
  border: 2px solid #cf3763;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  color: #cf3763;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    color: #cf3763;
    background-color: #ede9e9;
  }
`;

export class Foooter extends Component {
  render() {
    return (
      <FooterWrapper>
        <StyledIcon>
          <i className="fab fa-facebook-f fa-2x"></i>
        </StyledIcon>
        <StyledIcon>
          <i className="fab fa-twitter fa-2x"></i>
        </StyledIcon>
        <StyledIcon>
          <i className="fab fa-instagram fa-2x"></i>
        </StyledIcon>
        <StyledIcon>
          <i className="fab fa-github fa-2x"></i>
        </StyledIcon>
      </FooterWrapper>
    );
  }
}

export default Foooter;
