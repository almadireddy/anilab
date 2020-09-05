import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const NavList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;

  li {
    margin: 0 10px;
  }
`

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-bottom: 2px solid #2b2b2b;
`

const NavBrand = styled.div`

  a { 
    display: inline-block;
  }
`
const Nav = () => {
  return (
    <NavContainer>
      <NavBrand>
        <Link to="/">
          AniLab
        </Link>
      </NavBrand>

      <NavList>
        <li>
          <Link to="/projects">
            Projects
          </Link>
        </li>
      </NavList>
    </NavContainer>
  )
}

export default Nav;

