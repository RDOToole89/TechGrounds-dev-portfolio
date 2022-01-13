import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1200px;
  min-height: 100vh;
  background: papayawhip;
  margin: 0 auto;
  padding: 4rem 0rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  color: palevioletred;
  margin-bottom: 1.4rem;
`;

export const StyledButtonWrapper = styled.div`
  padding: 2rem 0;
  display: flex;
  gap: 1rem;
`;

export const Navlist = styled.ul`
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

export const StyledLink = styled.a`
  color: palevioletred;
  text-decoration: none;
  margin: 1rem;

  &:hover {
    color: green;
  }
`;

export const StyledParagraph = styled.p`
  color: var(--color);
`;
