import React, { Component } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
// import "../fontawesome-free-5.12.0-web/css/all.css";

const StyledNavBar = styled.nav`
  background-color: #cf3763;
  height: 10vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const StyledLinks = styled.a`
  padding: 1rem;
  font-weight: 500;
  display: block;
  text-decoration: none;
  color: #f9edfc;
  transition: ease-in-out 0.3s;

  .actual-link {
    text-decoration: none;
    color: #fff;
    font-size: 1.2rem;
    @media screen and (max-width: 800px) {
      display: none;
    }

    padding: 0.5rem 2rem;
    transition: ease-in-out 0.2s;
    &:hover {
      color: #5c0829;
    }
    &.menu {
      font-size: 1rem;
      display: none;
      @media screen and (max-width: 800px) {
        display: block;
      }
    }
  }
`;

const StyledList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

const StyledLogo = styled.h3`
  display: block;
  font-size: 2rem;
  color: #d6f0ff;
  text-decoration: none;
  // font-family: "Lobster", cursive;
  font-family: "Aclonica", sans-serif;
  transition: ease-in-out 0.2s;
  &:hover {
    color: #5c0829;
  }
`;

// const menuBtn = document.getElementById("menu-btn");
// const responsiveNav = () => {};

export class NavBar extends Component {
  render() {
    return (
      <StyledNavBar>
        <StyledLogo as="a" href="/">
          AnjalBam
        </StyledLogo>

        <StyledList>
          <StyledLinks>
            <Link className="actual-link" to="/">
              Home
            </Link>
          </StyledLinks>
          <StyledLinks>
            <Link className="actual-link" to="/about">
              About
            </Link>
          </StyledLinks>
          <StyledLinks>
            <Link className="actual-link" to="/contact">
              Contact
            </Link>
          </StyledLinks>
          {/* <StyledLinks>
            <Link
              onClick={responsiveNav()}
              id="menu-btn"
              className="actual-link menu">
              <i className="fa fa-bars fa-2x"></i>
            </Link>
          </StyledLinks> */}
        </StyledList>
      </StyledNavBar>
    );
  }
}

export default NavBar;
