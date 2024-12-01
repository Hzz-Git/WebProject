
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
  
    try {
      console.log('Attempting to send message:', formData);
  
      const response = await fetch('https://web-project-2oaz.vercel.app/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        // Try to parse the error response, if it's available as JSON
        let errorData;
        try {
          errorData = await response.json();
        } catch {
          throw new Error('Unexpected response from the server. Please try again.');
        }
        throw new Error(errorData.error || 'Failed to send message');
      }
  
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('error');
      alert(`Failed to send message: ${error.message}`);
    }
  };
  

  return (
    <div className="contact-form-container">
      {status === 'error' && (
        <div className="alert alert-error">Failed to send message</div>
      )}
      {status === 'success' && (
        <div className="alert alert-success">Message sent successfully!</div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            required
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            required
            className="form-control"
            rows="4"
          />
        </div>

        <button 
          type="submit" 
          className="submit-button"
          disabled={status === 'sending'}
        >
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
