import React from 'react';
import Coords from '../components/Coords.js/Coords';
import Navbar from '../components/Navbar/Navbar';
import useFetch from '../hooks/useFetch';
import { Navlist, Title, Wrapper } from '../styled/StyledComponents';
import { StyledLink, StyledParagraph } from '../styled/StyledComponents';

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
      <Navlist style={{ marginTop: '3rem', display: 'flex', flexDirection: 'column' }}>
        {data?.hits?.map((item, i) => {
          console.log(`${item} ${i}`);
          return (
            <li style={{ color: '#010101' }} key={item.objectID}>
              {i + 1}. <a href={item.url}>{item.title}</a>
            </li>
          );
        })}
      </Navlist>
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
