import React from 'react';
import { Link } from 'react-router-dom';
import { Navlist } from '../../styled/StyledComponents';
import styled from 'styled-components';

export default function Navbar() {
  return (
    <StyledNav>
      <Navlist>
        <Link to='/'>
          <li>home</li>
        </Link>
        <Link to='/counter'>
          <li>counter</li>
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
        <Link to='/example'>
          <li>useEffect Example</li>
        </Link>
      </Navlist>
    </StyledNav>
  );
}

export const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  width: 100%;
  background: #141d24;
  padding: 1.2rem 2.4rem;
`;
