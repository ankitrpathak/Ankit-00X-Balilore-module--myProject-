import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertTriangle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  title: string;
  body: string;
  category: string;
}

const SubmitLoreForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    reset
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setError(null);
    
    try {
      // Mock API call
      // In a real app, this would be: await fetch('/api/submit-lore', { method: 'POST', body: JSON.stringify(data) })
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simulate success
      const mockResponse = { success: true };
      
      if (mockResponse.success) {
        setSuccess(true);
        reset();
      } else {
        throw new Error('Submission failed');
      }
    } catch (err) {
      setError('Failed to submit your story. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 md:p-8 max-w-2xl mx-auto">
      {success ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center py-8"
        >
          <div className="flex justify-center mb-4">
            <CheckCircle size={64} className="text-green-500" />
          </div>
          <h2 className="font-display text-2xl font-bold mb-2 text-accent">Thank You!</h2>
          <p className="text-gray-600 mb-6">
            Your story has been successfully submitted and will be reviewed by our team. 
            We appreciate your contribution to the BaliLore community!
          </p>
          <button 
            onClick={() => setSuccess(false)} 
            className="btn-primary"
          >
            Submit Another Story
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="font-display text-2xl font-bold mb-6 text-accent">Share Your Bali Story</h2>
          
          {error && (
            <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-md flex items-start">
              <AlertTriangle size={18} className="mr-2 flex-shrink-0 mt-0.5" />
              <p>{error}</p>
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Full Name *
              </label>
              <input
                id="name"
                type="text"
                className={`input-field ${errors.name ? 'border-red-500' : ''}`}
                {...register('name', { 
                  required: 'Name is required',
                  minLength: { value: 2, message: 'Name must be at least 2 characters' }
                })}
              />
              {errors.name && <p className="error-message">{errors.name.message}</p>}
            </div>
            
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email Address *
              </label>
              <input
                id="email"
                type="email"
                className={`input-field ${errors.email ? 'border-red-500' : ''}`}
                {...register('email', { 
                  required: 'Email is required',
                  pattern: { 
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 
                    message: 'Invalid email address' 
                  }
                })}
              />
              {errors.email && <p className="error-message">{errors.email.message}</p>}
            </div>
          </div>
          
          <div className="mb-6">
            <label htmlFor="category" className="block text-gray-700 font-medium mb-2">
              Story Category *
            </label>
            <select
              id="category"
              className={`input-field ${errors.category ? 'border-red-500' : ''}`}
              {...register('category', { required: 'Please select a category' })}
            >
              <option value="">Select a category</option>
              <option value="folk-tale">Folk Tale</option>
              <option value="personal-experience">Personal Experience</option>
              <option value="historical">Historical Account</option>
              <option value="cultural-insight">Cultural Insight</option>
              <option value="travel-story">Travel Story</option>
              <option value="other">Other</option>
            </select>
            {errors.category && <p className="error-message">{errors.category.message}</p>}
          </div>
          
          <div className="mb-6">
            <label htmlFor="title" className="block text-gray-700 font-medium mb-2">
              Story Title *
            </label>
            <input
              id="title"
              type="text"
              className={`input-field ${errors.title ? 'border-red-500' : ''}`}
              {...register('title', { 
                required: 'Title is required',
                minLength: { value: 5, message: 'Title must be at least 5 characters' }
              })}
            />
            {errors.title && <p className="error-message">{errors.title.message}</p>}
          </div>
          
          <div className="mb-6">
            <label htmlFor="body" className="block text-gray-700 font-medium mb-2">
              Your Story *
            </label>
            <textarea
              id="body"
              rows={8}
              className={`textarea-field ${errors.body ? 'border-red-500' : ''}`}
              {...register('body', { 
                required: 'Story content is required',
                minLength: { value: 50, message: 'Story must be at least 50 characters' }
              })}
            ></textarea>
            {errors.body && <p className="error-message">{errors.body.message}</p>}
          </div>
          
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary flex items-center px-8"
            >
              {isSubmitting ? (
                <>Processing...</>
              ) : (
                <>
                  <Send size={18} className="mr-2" />
                  Submit Story
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default SubmitLoreForm;