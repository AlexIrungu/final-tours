import React from 'react';

const CSSBookingFlow = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-8 bg-gradient-to-b from-slate-50 to-slate-100 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-10 text-orange-500">How to Book with Us</h2>
      
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Step 1 */}
        <div className="booking-step group">
          <div className="step-number">1</div>
          <div className="step-content">
            <h3 className="font-semibold text-indigo-800 mb-2">Select</h3>
            <p>Choose your destination and desired service</p>
          </div>
          <div className="step-arrow">→</div>
        </div>
        
        {/* Step 2 */}
        <div className="booking-step group">
          <div className="step-number">2</div>
          <div className="step-content">
            <h3 className="font-semibold text-indigo-800 mb-2">Book Now</h3>
            <p>Send email to <span className="text-blue-600">danilscenic@gmail.com</span></p>
          </div>
          <div className="step-arrow">→</div>
        </div>
        
        {/* Step 3 */}
        <div className="booking-step group">
          <div className="step-number">3</div>
          <div className="step-content">
            <h3 className="font-semibold text-indigo-800 mb-2">Plan Together</h3>
            <p>We'll create your dream holiday</p>
          </div>
          <div className="step-arrow">→</div>
        </div>
        
        {/* Step 4 */}
        <div className="booking-step group">
          <div className="step-number">4</div>
          <div className="step-content">
            <h3 className="font-semibold text-indigo-800 mb-2">Experience</h3>
            <p>Enjoy your once in a lifetime adventure</p>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .booking-step {
          position: relative;
          background: linear-gradient(to bottom, #f0f9ff, #e0f2fe);
          border: 2px solid #60a5fa;
          border-radius: 12px;
          padding: 20px;
          width: 100%;
          max-width: 220px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          text-align: center;
        }
        
        .booking-step:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
        }
        
        .step-number {
          position: absolute;
          top: -15px;
          left: 50%;
          transform: translateX(-50%);
          background: #6366f1;
          color: white;
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          font-weight: bold;
        }
        
        .step-arrow {
          position: absolute;
          font-size: 24px;
          color: #6366f1;
          right: -15px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 1;
        }
        
        @media (max-width: 768px) {
          .step-arrow {
            transform: rotate(90deg);
            right: 50%;
            top: auto;
            bottom: -20px;
          }
          
          .booking-step {
            margin-bottom: 30px;
            max-width: 100%;
          }
          
          .booking-step:last-child {
            margin-bottom: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default CSSBookingFlow;