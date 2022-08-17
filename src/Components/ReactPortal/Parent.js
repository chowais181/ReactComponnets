import React from "react";
// import { render } from "react-dom";
import Modal from "./Modal";

// Functional component
function Parent(props) {
  return (
    <div>
      <h3>2)This is parent</h3>
      <Modal>
        <h5>3)I am child in modal</h5>
      </Modal>
    </div>
  );
}

// Main App component
// renders a list of Messages using data from messages.json
const MainApp = (props) => {
  return (
    <>
      <h2>1)React Portal Main APP</h2>
      <Parent />
    </>
  );
};

export default MainApp;
