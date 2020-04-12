import React, { Component } from "react";
import styled from "styled-components";

import "../fontawesome-free-5.12.0-web/css/all.css";

const StyledLinks = styled.a`
  display: block;
  padding: 1rem 2rem;
  border: none;
  border-radius: 1.5rem;
  background-color: #cf3763;
  width: fit-content;
  margin: 0.5rem;
  text-decoration: none;
  color: white;
`;

const StyledMenuBtn = styled.button`
  background-color: #cf3763;
  width: 4rem;
  height: 4rem;
  border: none;
  border-radius: 50%;
  font-size: 2rem;
  color: #fff;
  box-shadow: 0px 0px 5px #cf3763;
`;

const StyledMenu = styled.div`
  display: none;

  @media screen and (max-width: 800px) {
    display: flex;
  }

  flex-direction: column;
  align-items: center;
  justifu-content: center;
  position: fixed;
  bottom: 1rem;
  right: 1rem;
`;

const StyledMenuLinks = styled.ul`
  display: ${({ toggleMenu }) => (toggleMenu ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export class FloatingMenuBtn extends Component {
  constructor() {
    super();
    this.state = {
      menuToggle: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevProps) => ({
      menuToggle: !prevProps.menuToggle,
    }));
  }

  render() {
    return (
      <StyledMenu>
        <StyledMenuLinks toggleMenu={this.state.menuToggle}>
          <StyledLinks href="/">Home</StyledLinks>
          <StyledLinks href="/about">About</StyledLinks>
          <StyledLinks href="/contact">Contact</StyledLinks>
        </StyledMenuLinks>
        <StyledMenuBtn onClick={this.handleClick}>
          <i className="fa fa-bars"></i>
        </StyledMenuBtn>
      </StyledMenu>
    );
  }
}

export default FloatingMenuBtn;
