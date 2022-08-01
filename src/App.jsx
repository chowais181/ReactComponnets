import logo from "./logo.svg";
import "./App.css";
// import Details from "./Details";
// import TestJsx from "./testJsx";
// import TestJs from "./testJs";
// import Registration from "./ControlledComponent/CourseRegistrationForm";
// import Timer from "./PracticeProps/ExampleUseEffect";
// import ExamplePropsComposition from "./PracticeProps/ExamplePropsComposition";
// import Parent from "./ChildToParentCommunication/ParentComponent";
// import List from "./ListsAndKeys/Lists";
// import Binding from "./TwoWayBinding/TwoWayBinding";
// import Lift from "./Components/LiftingStateUp/Lifting";
import Chart from "./Components/Charts/Chart";
const App = () => {
  return (
    <div className="App">
      <div className="App-header">
        <h1> Welcome!</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Course Registration
        </a>
        <br />
        <Chart />
      </div>
    </div>
  );
};

export default App;
