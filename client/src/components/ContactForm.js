// src/components/ContactForm.js
import React, { useState } from 'react';
import { supabase } from '../utils/supabaseClient';

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
      console.log('Attempting to send message:', formData); // Debug log

      const { error } = await supabase
        .from('messages')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            message: formData.message
          }
        ]);

      if (error) {
        console.error('Supabase error:', error); // Debug log
        throw error;
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('error');
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