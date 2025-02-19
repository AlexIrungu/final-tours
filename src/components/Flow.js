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
        padding: '10px 0',
        borderRadius: '12px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
        border: 'none',
      }
    },
    { 
      id: '1', 
      data: { 
        label: (
          <div className="text-center p-3">
            <div className="font-semibold text-indigo-800 mb-2 text-lg">Step 1:</div>
            <div>Select the place and service</div>
          </div>
        )
      }, 
      position: { x: 100, y: 120 },
      style: { 
        background: 'linear-gradient(to bottom, #f0f9ff, #e0f2fe)',
        border: '2px solid #60a5fa',
        borderRadius: '16px',
        padding: '12px',
        width: 220,
        boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease',
      },
      className: 'node-hover'
    },
    { 
      id: '2', 
      data: { 
        label: (
          <div className="text-center p-3">
            <div className="font-semibold text-indigo-800 mb-2 text-lg">Step 2:</div>
            <div>Click "Book Now" and send the email to<br/><span className="text-blue-600 font-medium">danilscenic@gmail.com</span></div>
          </div>
        )
      }, 
      position: { x: 400, y: 120 },
      style: { 
        background: 'linear-gradient(to bottom, #f0f9ff, #e0f2fe)',
        border: '2px solid #60a5fa',
        borderRadius: '16px',
        padding: '12px',
        width: 250,
        boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease',
      },
      className: 'node-hover'
    },
    { 
      id: '3', 
      data: { 
        label: (
          <div className="text-center p-3">
            <div className="font-semibold text-indigo-800 mb-2 text-lg">Step 3:</div>
            <div>Together we create<br/>your dream holiday</div>
          </div>
        )
      }, 
      position: { x: 700, y: 120 },
      style: { 
        background: 'linear-gradient(to bottom, #f0f9ff, #e0f2fe)',
        border: '2px solid #60a5fa',
        borderRadius: '16px',
        padding: '12px',
        width: 220,
        boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease',
      },
      className: 'node-hover'
    },
    { 
      id: '4', 
      data: { 
        label: (
          <div className="text-center p-3">
            <div className="font-semibold text-indigo-800 mb-2 text-lg">Step 4:</div>
            <div>Once you've received an email, you will get your once in a lifetime experience</div>
          </div>
        )
      }, 
      position: { x: 1000, y: 120 },
      style: { 
        background: 'linear-gradient(to bottom, #f0f9ff, #e0f2fe)',
        border: '2px solid #60a5fa',
        borderRadius: '16px',
        padding: '12px',
        width: 260,
        boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease',
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
        stroke: '#6366f1',
        strokeWidth: 3,
      },
      markerEnd: {
        type: 'arrow',
        color: '#6366f1',
        width: 24,
        height: 24,
      },
    },
    { 
      id: 'e2-3', 
      source: '2', 
      target: '3', 
      animated: true,
      style: { 
        stroke: '#6366f1',
        strokeWidth: 3,
      },
      markerEnd: {
        type: 'arrow',
        color: '#6366f1',
        width: 24,
        height: 24,
      },
    },
    { 
      id: 'e3-4', 
      source: '3', 
      target: '4', 
      animated: true,
      style: { 
        stroke: '#6366f1',
        strokeWidth: 3,
      },
      markerEnd: {
        type: 'arrow',
        color: '#6366f1',
        width: 24,
        height: 24,
      },
    },
  ];

  // Add this CSS to your global styles
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .node-hover:hover {
        transform: translateY(-5px);
        box-shadow: 0 12px 20px rgba(0, 0, 0, 0.15);
      }
      .react-flow__node.selected {
        box-shadow: 0 0 0 2px #6366f1;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="flow-container" style={{ 
      width: '100%', 
      height: '450px',
      border: '1px solid #e2e8f0', 
      borderRadius: '16px',
      background: 'linear-gradient(to bottom, #f8fafc, #f1f5f9)',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden',
      padding: '20px',
    }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        fitViewOptions={{ padding: 0.7 }}
        minZoom={0.4}
        maxZoom={1.5}
        attributionPosition="bottom-left"
        snapToGrid={true}
        snapGrid={[15, 15]}
        nodesDraggable={false}
      >
        <Background color="#ddd" gap={20} size={1.5} />
        <Controls 
          showInteractive={false}
          style={{
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
          }}
        />
      </ReactFlow>
    </div>
  );
};

export default Flow;