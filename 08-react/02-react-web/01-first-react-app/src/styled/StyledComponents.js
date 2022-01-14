import styled from 'styled-components';

// Containers

export const Wrapper = styled.div`
  max-width: 1200px;
  background: var(--color-background-dark, papayawhip);
  margin: 0 auto;
  padding: 6.4rem 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;
export const StyledButtonWrapper = styled.div`
  padding: 2rem 0;
  display: flex;
  gap: 1rem;
`;

// Typography

export const Title = styled.h1`
  color: var(--color-text);
  margin-bottom: var(--mg-bottom-md, 1.4rem);
`;

export const HeadingSecondary = styled.h2`
  margin-bottom: 2rem;
`;

export const StyledParagraph = styled.p`
  color: var(--paragraph-color);
  margin-bottom: 2.4rem;
`;

// Links and Lists

export const StyledLink = styled.a`
  color: palevioletred;
  text-decoration: none;
  margin: 1rem;

  &:hover {
    color: green;
  }
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
