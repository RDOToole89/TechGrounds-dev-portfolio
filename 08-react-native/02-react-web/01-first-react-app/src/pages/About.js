import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '../components/Button/Button';
import Navbar from '../components/Navbar/Navbar';
import { Title, Wrapper } from './Home';

export default class About extends Component {
  constructor(props) {
    super();

    this.state = {
      counter: 0,
    };
  }

  increase = () => {
    console.log('clicked on increase');
    console.log(this.state);
    this.setState({ counter: this.state.counter + 1 });
  };

  decrease = () => {
    console.log('clicked on decrease');
    console.log(this.state);
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    const { counter } = this.state;

    return (
      <Wrapper>
        <Navbar />
        <Title>Counter!</Title>
        <div>{counter}</div>
        <StyledButtonWrapper>
          <Button onClickCallback={this.decrease} buttonText='decrease' />
          <Button onClickCallback={this.increase} buttonText='increase' />
        </StyledButtonWrapper>
      </Wrapper>
    );
  }
}

export const StyledButtonWrapper = styled.div`
  padding: 2rem 0;
  display: flex;
  gap: 1rem;
`;
