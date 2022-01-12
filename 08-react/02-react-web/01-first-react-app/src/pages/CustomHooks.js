import React from 'react';
import Coords from '../components/Coords.js/Coords';
import Navbar, { StyledNavList } from '../components/Navbar/Navbar';
import useFetch from '../customHooks/useFetch';
import { Title, Wrapper } from './Home';
import { StyledLink, StyledParagraph } from './Lifecycle';

const URL = 'https://hn.algolia.com/api/v1/search?query=react';

function CustomHooks() {
  const { loading, error, data } = useFetch(URL);

  console.log(data);

  if (loading) return 'Loading...';
  if (error) return 'Something went wrong!';

  return (
    <Wrapper>
      <Navbar />
      <Title>Custom Hooks</Title>

      <StyledLink target='_blank' href='https://usehooks.com/useEventListener/'>
        Useful website for custom hooks
      </StyledLink>
      <Coords />

      <StyledLink
        style={{ textTransform: 'uppercase', fontWeight: '600' }}
        target='_blank'
        href='https://reactjs.org/docs/hooks-custom.html'>
        Official Documentation (custom) Hooks
      </StyledLink>
      <StyledParagraph style={paragraphStyles}>
        A custom Hook is a JavaScript function whose name starts with ”use” and that may call other
        Hooks. Building your own Hooks lets you extract component logic into reusable functions.
      </StyledParagraph>

      <StyledNavList style={{ marginTop: '3rem', display: 'flex', flexDirection: 'column' }}>
        {data?.hits?.map((item, i) => {
          console.log(`${item} ${i}`);
          return (
            <li style={{ color: '#010101' }} key={item.objectID}>
              {i + 1}. <a href={item.url}>{item.title}</a>
            </li>
          );
        })}
      </StyledNavList>
    </Wrapper>
  );
}

export default CustomHooks;

const paragraphStyles = {
  '--color': 'purple',
  padding: '1rem',
  width: '600px',
  lineHeight: 1.6,
  backgroundColor: 'rgba(0,0,0,0.1)',
};
