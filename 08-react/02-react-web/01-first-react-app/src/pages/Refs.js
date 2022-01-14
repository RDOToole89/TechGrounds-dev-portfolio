import React, { useRef, useState } from 'react';
import Button from '../components/Button/Button';

import { Wrapper } from '../styled/StyledComponents';

// useRef and Callback Refs examples

// useRef when you need information that is available regardless of component lifecycle and whose
// changes should NOT trigger rerenders. Use useState for information whose changes
// should trigger rerenders.

export default function Refs() {
  const inputRef = useRef(null);
  const secRef = useRef(null);
  let callbackRef = null;
  const [visible, setVisible] = useState(false);

  const handleOnClick = () => {
    console.log('ON CLICK SHOW INPUTREF OBJECT', inputRef);
    console.log('INPUT VALUE on click: ', inputRef.current?.value);
  };

  const handleOnClickFocus = () => {
    inputRef.current?.focus();
    console.log('ON CLICK focus on first INPUT!');
  };

  const handleOnClickCallbackRef = () => {
    console.log('ON CLICK SHOW CALLBACKREF', callbackRef);
    console.log('INPUT VALUE on click => callbackRef', callbackRef.value);
  };

  const handleVisibility = () => {
    console.log('Toggle visibility activated!');
    setVisible(!visible);
  };

  const handleFocusOnSecondInput = () => {
    secRef.current?.focus();
  };

  const callbackRefExample = (node) => {
    // Checks if there is a node on the page put the focus on it
    console.log('Attached node ', node);

    if (node) {
      node.focus();
    }
  };

  return (
    <Wrapper>
      <input
        placeholder='ref with useRef'
        // onChange={() => console.log(inputRef.current.value)}
        ref={inputRef}
      />
      <div style={{ height: '20px', margin: '20px 0' }}> divider</div>
      <Button
        style={{ color: 'grey' }}
        onClickCallback={handleOnClick}
        buttonText='click for ref on click!'
        buttonColor={'lightgreen'}
      />
      <div style={{ height: '20px', margin: '20px 0' }}> divider</div>
      <Button
        onClickCallback={handleOnClickFocus}
        buttonText='Click for ref on focus!'
        buttonColor={'red'}
      />
      <div style={{ height: '20px', margin: '20px 0' }}> divider</div>
      <input
        placeholder='ref with callbackRef'
        ref={(node) => {
          callbackRef = node;
        }}
      />
      <div style={{ height: '20px', margin: '20px 0' }}> divider</div>
      <Button
        onClickCallback={handleOnClickCallbackRef}
        buttonText='Click for ref with callback!'
        buttonColor={'yellow'}
      />
      <div style={{ height: '20px', margin: '20px 0' }}> divider</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <input ref={secRef} />
        <Button
          onClickCallback={handleVisibility}
          buttonText='Unlock next input'
          buttonColor={'#f1ffb3'}
        />

        {visible && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <input placeholder='unlocked input' ref={callbackRefExample} />
            <Button
              onClickCallback={handleFocusOnSecondInput}
              buttonText='Unlock next input'
              buttonColor={'#AA2380'}
            />
          </div>
        )}
      </div>
    </Wrapper>
  );
}
