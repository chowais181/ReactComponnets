import logo from "./logo.svg";
import "./App.css";
// import Details from "./Components//Details";
// import TestJsx from "./testJsx";
// import TestJs from "./testJs";
// import Registration from "./Components//ControlledComponent/CourseRegistrationForm";
// import Timer from "./Components//PracticeProps/ExampleUseEffect";
// import ExamplePropsComposition from "./Components//PracticeProps/ExamplePropsComposition";
// import Parent from "./Components//ChildToParentCommunication/ParentComponent";
// import List from "./Components//ListsAndKeys/Lists";
// import Binding from "./Components//TwoWayBinding/TwoWayBinding";
// import Lift from "./Components/LiftingStateUp/Lifting";
// import Chart from "./Components/Charts/Chart";
// import MyFacebookLoginPage from "./Components/FacebookHook/FaceBook";
// import Debug from "./Components/DebugReactApp/Debug";
// import Responisiveness from "./Components/ResponsiveBreakPoint/Responsiveness";
// import WrapperUse from "./Components/WrapperComponent/WrapperUse";
// import MainApp from "./Components/ReactPortal/Parent";
// import Component1 from "./Components/useContext Hook/UseContext";
// import CountRender from "./Components/useRef Hook/CountRender";
// import Simple from "./Components/useRef Hook/FormWithoutHook";
// import Form from "./Components/useRef Hook/UncontrolledComponent";
// import Stopwatch from "./Components/useRef Hook/StopWatch";
// import Example from "./Components/Class_Functional_Componet/Example";
// import Apps from "./Components/useEffect_Api_Fetch/Apps";
// import Todos from "./Components/useReducerHook/Reducer";
// import CallBack from "./Components/useMemoUseCallBack/UseCallBack";
// import Home from "./Components/CustomHook/Home";
// import Basic from "./Components/Formik/FormikBasic";
// import Basic from "./Components/Formik/FormikMedium";
// import SignupForm from "./Components/Formik/FormikYup";
// import Weather from "./Components/WeatherApp/Data";
// import Send from "./Components/SendingHttpRequest/Send";
// import Send from "./Components/SendingHttpRequest/GetWithHandling";
// import PostRequestHooks from "./Components/SendingHttpRequest/PostRequest";
// import PostRequestAsync from "./Components/SendingHttpRequest/PostRequest2";
// import PostRequestError from "./Components/SendingHttpRequest/PostRequestError";
// import DisplayUsers from "./Components/SendingHttpRequest/Example";
// import Votes from "./Components/Redux/ReduxSimple/Votes";
// import Votes from "./Components/Redux/ReduxToolKit/Votes";
import Weather from "./Components/SendingHttpRequest/Weather/Weather";
const App = () => {
  return (
    // <>
    //   <MainApp />
    // </>
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

        <Weather />
      </div>
    </div>
  );
};

export default App;
