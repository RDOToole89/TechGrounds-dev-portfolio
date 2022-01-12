import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <StyledNav>
      <StyledNavList>
        <Link to='/'>
          <li>home</li>
        </Link>
        <Link to='/about'>
          <li>about</li>
        </Link>
        <Link to='/refs'>
          <li>refs</li>
        </Link>
        <Link to='/darkmode'>
          <li>darkmode</li>
        </Link>
        <Link to='/lists'>
          <li>lists</li>
        </Link>
        <Link to='/lifecycle'>
          <li>lifecycle</li>
        </Link>
        <Link to='/useeffect'>
          <li>useeffect</li>
        </Link>
        <Link to='/customhooks '>
          <li>custom hooks</li>
        </Link>
        <Link to='/api'>
          <li>api</li>
        </Link>
      </StyledNavList>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  width: 100%;
  background: blue;
  padding: 1.2rem 2.4rem;
  margin-bottom: 2rem;
`;

const StyledNavList = styled.ul`
  display: flex;
  justify-content: flex-end;
  list-style: none;
  gap: 2rem;

  & li {
    text-transform: uppercase;
    font-weight: 600;
    color: white;
    cursor: pointer;
  }
`;
