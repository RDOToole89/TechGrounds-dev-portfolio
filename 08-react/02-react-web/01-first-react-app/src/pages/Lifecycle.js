import React, { Component } from 'react';
import Button from '../components/Button/Button';
import {
  Title,
  Wrapper,
  StyledLink,
  StyledParagraph,
  StyledButtonWrapper,
} from '../styled/StyledComponents';

// Each component has several “lifecycle methods” that you can override
// to run code at particular times in the process.

export default class Lifecycle extends Component {
  // If we are passing props to a component we should always pass props in the constructor
  // If we want to call this.props inside the constuctor we must also pass it to super!
  constructor(props) {
    super(props);

    this.state = {
      message: this.props.message,
      counter: 0,
    };

    // Setting default properties on the components
    Lifecycle.defaultProps = {
      color: 'orangered',
    };

    console.log('LIFECYCLE 01 => log inside Constructor => at initialization');
  }

  componentDidMount = () => {
    console.log(
      'LIFECYCLE 04 => log inside ComponentDidMount => runs when component is being mounted'
    );
  };

  increment = () => {
    // setState(updater, [callback])

    // setState() enqueues changes to the component state and tells React that this component
    // and its children need to be re-rendered with the updated state.
    // This is the primary method you use to update the user interface in response to event handlers
    // and server responses.

    // this.setState((state, props) => {
    // return {counter: state.counter + props.step};
    // });

    this.setState({ counter: this.state.counter + 1 });
  };

  decrease = () => {
    this.setState((state) => {
      return { counter: state.counter - 1 };
    });
  };

  componentDidUpdate = (prevProps, prevState, snapshot) => {
    console.log(
      'LIFECYCLE 05 => log inside componentDidUpdate => runs when the props or state changes'
    );

    // optional parameters
    // console.log(prevProps, prevState, snapshot);
  };

  static getDerivedStateFromProps = (props, state) => {
    console.log(
      'LIFECYCLE 02 => log inside getDerivedStateFrom props => runs just before EACH render'
    );
    return state;
  };

  componentWillUnmount = () => {
    console.log(
      'LIFECYCLE 07 => log inside componentWillUnmount => runs when the component is unmounted from the DOM'
    );
  };

  reRender = () => {
    console.log(
      'LIFECYCLE 06 => log inside reRender function => forces the component to rerender skipping componentShouldUpdate()'
    );
    this.forceUpdate();
  };

  render() {
    console.log('LIFECYCLE 03 => log inside Render => runs during EACH render');
    return (
      <Wrapper>
        <Title>Lifecyle Methods!</Title>
        <StyledLink
          target='_blank'
          href='https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/'>
          Lifecycle Cheatsheet
        </StyledLink>
        <StyledParagraph style={{ '--color': 'purple' }}>
          Open the console to see lifecycle order!
        </StyledParagraph>

        <div style={{ margin: '1.4rem 0' }}>{this.state.counter}</div>
        <StyledButtonWrapper>
          <Button buttonText='increase (change state)' onClickCallback={this.increment} />
          <Button
            buttonText='decrease (change state)'
            buttonColor={this.props.color}
            onClickCallback={this.decrease}
          />
          <Button buttonText='force update (rerender)' onClickCallback={this.reRender} />
        </StyledButtonWrapper>
      </Wrapper>
    );
  }
}

// Mounting
// These methods are called in the following order when an instance
// of a component is being created and inserted into the DOM:

// constructor()
// static getDerivedStateFromProps()
// render()
// componententDidMount()

// Updating

// An update can be caused by changes to props or state. These methods are
// called in the following order when a component is being re-rendered:

// static getDerivedStateFromProps()
// shouldComponentUpdate()
// render()
// getSnapshotBeforeUpdate()
// componentDidUpdate()

// Unmounting

// This method is called when a component is being removed from the DOM:

// componentWillUnmount()
