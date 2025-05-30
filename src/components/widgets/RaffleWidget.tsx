import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Ticket, AlertTriangle, CheckCircle } from 'lucide-react';

interface RaffleWidgetProps {
  userId?: string;
}

const RaffleWidget: React.FC<RaffleWidgetProps> = ({ userId = '123' }) => {
  const [loading, setLoading] = useState(false);
  const [tickets, setTickets] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const checkTickets = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // Mock API call
      // In a real app, this would be: await fetch(`/api/raffle-status?userid=${userId}`)
      const mockResponse = { tickets: Math.floor(Math.random() * 5) };
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      setTickets(mockResponse.tickets);
    } catch (err) {
      setError('Unable to check your tickets. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const enterRaffle = async () => {
    setLoading(true);
    setError(null);
    setSuccess(null);
    
    try {
      // Mock API call
      // In a real app, this would be: await fetch('/api/raffle-entry', { method: 'POST' })
      const mockResponse = { 
        success: Math.random() > 0.2, 
        tickets: tickets !== null ? tickets + 1 : 1 
      };
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (mockResponse.success) {
        setTickets(mockResponse.tickets);
        setSuccess('Successfully entered the raffle!');
      } else {
        throw new Error('Entry failed');
      }
    } catch (err) {
      setError('Failed to enter the raffle. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="card border border-gray-200 overflow-visible"
    >
      <div className="bg-primary text-white p-4 flex items-center">
        <Ticket className="mr-2" size={20} />
        <h3 className="font-display text-lg font-semibold">Monthly Story Raffle</h3>
      </div>
      
      <div className="p-5">
        <p className="text-gray-600 mb-4">
          Share your story to enter our monthly raffle and win a chance for a traditional Balinese art piece!
        </p>
        
        {tickets !== null && (
          <div className="mb-4 p-3 bg-gray-50 rounded-md">
            <p className="flex items-center font-medium">
              <CheckCircle size={18} className="text-green-500 mr-2" />
              You have {tickets} raffle ticket{tickets !== 1 ? 's' : ''}
            </p>
          </div>
        )}
        
        {error && (
          <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-md flex items-start">
            <AlertTriangle size={18} className="mr-2 flex-shrink-0 mt-0.5" />
            <p>{error}</p>
          </div>
        )}
        
        {success && (
          <div className="mb-4 p-3 bg-green-50 text-green-700 rounded-md flex items-start">
            <CheckCircle size={18} className="mr-2 flex-shrink-0 mt-0.5" />
            <p>{success}</p>
          </div>
        )}
        
        <div className="space-y-3">
          {tickets === null ? (
            <button 
              onClick={checkTickets} 
              disabled={loading}
              className="btn-primary w-full flex justify-center items-center"
            >
              {loading ? 'Checking...' : 'Check My Tickets'}
            </button>
          ) : (
            <button 
              onClick={enterRaffle} 
              disabled={loading}
              className="btn-primary w-full flex justify-center items-center"
            >
              {loading ? 'Processing...' : 'Enter Raffle'}
            </button>
          )}
          
          <button className="btn-ghost w-full">
            Learn More
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default RaffleWidget;