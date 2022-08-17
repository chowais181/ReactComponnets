import React, { Component } from "react";

class Counter extends Component {
  //it work in the component that going to be removed from the parent component
  componentWillUnmount() {
    console.log("componentWillUnmount: removed");
    alert("The component is going to be unmounted/removed.When count is 3");
  }
  //do  not update the state in this because it will lead to the infinite loop
  componentDidUpdate(prevprops, prevstate) {
    //for  better understanding
    if (prevprops.count !== this.props.count) {
      console.log("componentDidUpdate: after state update after render");
    }
  }

  render() {
    return (
      <>
        <h5>With class component</h5>

        <h5>Count : {this.props.count}</h5>
      </>
    );
  }
}
export default Counter;
