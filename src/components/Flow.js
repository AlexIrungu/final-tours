import React from 'react';
import ReactFlow from 'react-flow-renderer';

const elements = [
  { id: '1', data: { label: <div>Step 1:<br/>Select the place and service</div> }, position: { x: 100, y: 100 } },
  { id: '2', data: { label: <div>Step 2:<br/>Click "Book Now" and send the email to danilscenic@gmail.com</div> }, position: { x: 300, y: 100 } },
  { id: '3', data: { label: <div>Step 3:<br/>Together we create your dream holiday</div> }, position: { x: 100, y: 300 } },
  { id: '4', data: { label: <div>Step 4:<br/>Once you've received an email from the company, you will get your once in a lifetime experience</div> }, position: { x: 300, y: 300 } },
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e2-3', source: '2', target: '3', animated: true },
  { id: 'e3-4', source: '3', target: '4', animated: true },
];

const Flow = () => {
  return (
    <ReactFlow elements={elements} style={{ width: '100%', height: '500px' }} />
  );
};

export default Flow;
