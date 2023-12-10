import React, { useState } from "react";
import ReactFlow, { removeElements, addEdge } from "react-flow-renderer";
import "./BookingComponent.css"; 

const elements = [
  {
    id: "1",
    type: "input",
    data: { label: "Select the Place or Service" },
    position: { x: 100, y: 100 },
  },
  {
    id: "2",
    type: "default",
    data: { label: "Click BookNow and send the email to danilscenic@gmail.com" },
    position: { x: 250, y: 100 },
  },
  {
    id: "3",
    type: "default",
    data: { label: "Together we create your dream holiday" },
    position: { x: 400, y: 100 },
  },
  {
    id: "4",
    type: "output",
    data: { label: "After the payment,you will receive an email from the company and you will get your once-in-a-Lifetime Experience" },
    position: { x: 550, y: 100 },
  },
];

const BookingComponent = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    if (step === 4) {
      setStep(1);
    } else {
      setStep(step + 1);
    }
  };

  const backToStep = () => {
    if (step === 1) {
      setStep(4);
    } else {
      setStep(step - 1);
    }
  };

  const onLoad = (reactFlowInstance) => {
    reactFlowInstance.fitView();
  };

  return (
    <div className="booking-container">
      <h1 className="booking-title">Simple Steps to Book Online</h1>
      <ReactFlow elements={elements} onLoad={onLoad} />
      <div className="step-label">{elements[step - 1].data.label}</div>
      <div className="buttons">
        {step > 1 && (
          <button className="back-button" onClick={backToStep}>
            Back
          </button>
        )}
        {step < 4 && (
          <button className="next-button" onClick={nextStep}>
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default BookingComponent;
