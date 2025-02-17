import React from 'react';
import { 
  ReactFlow, 
  Background, 
  Controls,
} from 'reactflow';
import 'reactflow/dist/style.css';

const Flow = () => {
  const nodes = [
    { 
      id: 'header',
      type: 'output',
      data: { 
        label: <div className="font-bold text-2xl text-white text-center">How to Book with Us</div> 
      }, 
      position: { x: 400, y: 20 },
      style: { 
        background: 'linear-gradient(to right, #f97316, #fb923c)',
        width: 800,
        padding: '8px 0',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        border: 'none',
      }
    },
    { 
      id: '1', 
      data: { 
        label: (
          <div className="text-center p-2">
            <div className="font-semibold text-indigo-700 mb-2">Step 1:</div>
            <div>Select the place and service</div>
          </div>
        )
      }, 
      position: { x: 100, y: 120 },
      style: { 
        background: 'linear-gradient(to right, #f0f9ff, #e0f2fe)',
        border: '2px solid #60a5fa',
        borderRadius: '12px',
        padding: '10px',
        width: 200,
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.2s',
      },
      className: 'node-hover'
    },
    { 
      id: '2', 
      data: { 
        label: (
          <div className="text-center p-2">
            <div className="font-semibold text-indigo-700 mb-2">Step 2:</div>
            <div>Click "Book Now" and send the email to<br/><span className="text-blue-600">danilscenic@gmail.com</span></div>
          </div>
        )
      }, 
      position: { x: 400, y: 120 },
      style: { 
        background: 'linear-gradient(to right, #f0f9ff, #e0f2fe)',
        border: '2px solid #60a5fa',
        borderRadius: '12px',
        padding: '10px',
        width: 250,
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.2s',
      },
      className: 'node-hover'
    },
    { 
      id: '3', 
      data: { 
        label: (
          <div className="text-center p-2">
            <div className="font-semibold text-indigo-700 mb-2">Step 3:</div>
            <div>Together we create<br/>your dream holiday</div>
          </div>
        )
      }, 
      position: { x: 700, y: 120 },
      style: { 
        background: 'linear-gradient(to right, #f0f9ff, #e0f2fe)',
        border: '2px solid #60a5fa',
        borderRadius: '12px',
        padding: '10px',
        width: 200,
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.2s',
      },
      className: 'node-hover'
    },
    { 
      id: '4', 
      data: { 
        label: (
          <div className="text-center p-2">
            <div className="font-semibold text-indigo-700 mb-2">Step 4:</div>
            <div>Once you've received an email, you will get your once in a lifetime experience</div>
          </div>
        )
      }, 
      position: { x: 1000, y: 120 },
      style: { 
        background: 'linear-gradient(to right, #f0f9ff, #e0f2fe)',
        border: '2px solid #60a5fa',
        borderRadius: '12px',
        padding: '10px',
        width: 250,
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.2s',
      },
      className: 'node-hover'
    },
  ];

  const edges = [
    { 
      id: 'e1-2', 
      source: '1', 
      target: '2', 
      animated: true,
      style: { 
        stroke: '#818cf8',
        strokeWidth: 2,
      },
      markerEnd: {
        type: 'arrow',
        color: '#818cf8',
        width: 20,
        height: 20,
      },
    },
    { 
      id: 'e2-3', 
      source: '2', 
      target: '3', 
      animated: true,
      style: { 
        stroke: '#818cf8',
        strokeWidth: 2,
      },
      markerEnd: {
        type: 'arrow',
        color: '#818cf8',
        width: 20,
        height: 20,
      },
    },
    { 
      id: 'e3-4', 
      source: '3', 
      target: '4', 
      animated: true,
      style: { 
        stroke: '#818cf8',
        strokeWidth: 2,
      },
      markerEnd: {
        type: 'arrow',
        color: '#818cf8',
        width: 20,
        height: 20,
      },
    },
  ];

  return (
    <div className="flow-container" style={{ 
      width: '100%', 
      height: '400px', // Increased height
      border: '1px solid #e2e8f0', 
      borderRadius: '12px',
      background: 'linear-gradient(to bottom, #f9fafb, #f3f4f6)',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
      overflow: 'hidden',
      padding: '16px', // Added padding
    }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        fitViewOptions={{ padding: 0.5 }} // Added padding to fitView
        minZoom={0.4}
        maxZoom={1.5}
        attributionPosition="bottom-left"
        snapToGrid={true}
        snapGrid={[15, 15]}
      >
        <Background color="#ddd" gap={16} />
        <Controls showInteractive={false} />
        {/* <MiniMap
          nodeStrokeColor="#4b5563"
          nodeColor="#d1d5db"
          nodeBorderRadius={8}
        /> */}
      </ReactFlow>
    </div>
  );
};

export default Flow;