import React, { Component } from "react";
import Counter from "./ClassCounter";
import Counter1 from "./FunCounter";

class Example extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  //it will run after the page rendering
  //as u can see we update the counter but it wil show 0 on screen
  //bcz the this mount will show if it render again
  componentDidMount() {
    console.log(
      "componentDidMount: when first time rendering",
      this.state.count + 1
    );
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <>
        {this.state.count >= 3 ? (
          <h1>Both the components are removed</h1>
        ) : (
          <div>
            <Counter count={this.state.count} />
            <Counter1 number={this.state.count} />
            <p>the component will remove when count is 3</p>
            <button onClick={() => this.increment()}>increment</button>
          </div>
        )}
      </>
    );
  }
}
export default Example;
