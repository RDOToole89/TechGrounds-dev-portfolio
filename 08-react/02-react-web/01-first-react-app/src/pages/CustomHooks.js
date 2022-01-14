import React from 'react';
import Coords from '../components/Coords.js/Coords';
import useFetch from '../hooks/useFetch';
import useMediaQuery from '../hooks/useMediaQuery';
import { Navlist, Title, Wrapper } from '../styled/StyledComponents';
import { StyledLink, StyledParagraph } from '../styled/StyledComponents';

const URL = 'https://hn.algolia.com/api/v1/search?query=react';

function CustomHooks() {
  const { loading, error, data } = useFetch(URL);

  // Check if the device that an element is being displayed on matches
  // a certain condition. In this case if you can hover over an element or not.
  // Based on this result we can for example change the styling.
  const canHover = useMediaQuery(
    // Media queries
    ['(hover: hover)'],
    // Values corresponding the above media queries by array index
    [true],
    // Default value
    false
  );

  const canHoverStyles = (bool) => {
    return {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '1rem',
      marginTop: '2rem',
      height: '30px',
      backgroundColor: bool ? 'orangered' : 'green',
    };
  };

  if (loading) return 'Loading...';
  if (error) return 'Something went wrong!';

  return (
    <Wrapper>
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
      <StyledParagraph style={paragraphExtraStyles}>
        A custom Hook is a JavaScript function whose name starts with ”use” and that may call other
        Hooks. Building your own Hooks lets you extract component logic into reusable functions.
      </StyledParagraph>
      <Navlist style={{ marginTop: '3rem', display: 'flex', flexDirection: 'column' }}>
        {data?.hits?.map((item, i) => {
          return (
            <li style={{ color: 'var(--color-text)' }} key={item.objectID}>
              {i + 1}. <a href={item.url}>{item.title}</a>
            </li>
          );
        })}
      </Navlist>

      <div style={canHoverStyles(canHover)}>Hover Me!</div>
    </Wrapper>
  );
}

export default CustomHooks;

const paragraphExtraStyles = {
  '--paragraph-color': '#fff',
  padding: '1rem',
  width: '600px',
  lineHeight: 1.6,
  backgroundColor: 'rgba(0,0,0,0.1)',
};
