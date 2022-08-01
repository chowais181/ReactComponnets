//back communication from parent
//we did many examples in which parent component send data to child component
//in this example parent component call the child but the child component s
// having call back function when the form submited 
// child component call back the function with data
// and we get the data in parent component

import React from "react";
import Child from "./ChildComponent";
class Parent extends React.Component {
  state = {
    name: "",
  };

  handleCallback = (name,school) => {
    this.setState({ name: name,school:school });
  };

  render() {

    return (
      <div>
        <Child parentCallback={this.handleCallback} />
        {this.state.name} <br/>
        {this.state.school}
      </div>
    );
  }
}
export default Parent;
