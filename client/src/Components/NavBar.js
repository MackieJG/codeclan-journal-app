import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';


const NavBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    align-items: center;
    padding: 1rem;
    justify-content: center;
    font-family: ragasta;
    size: 10rem;

    font-weight: bold;

    > div {
    min-width: 280px;
    display: flex;
    gap: 2rem;
    align-items: center;
    }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #4a4a4a;
  font-size: 25px;
  font-weight: 600;
  align-items: center;
  font-weight: 550;
`


const NavBar = () => {

  return (
    <NavBarContainer>
        <div>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/entry">Make an Entry</StyledLink>
        <StyledLink to="/list">How am I doing?</StyledLink>
        </div>
    </NavBarContainer>
  );
}

export default NavBar;