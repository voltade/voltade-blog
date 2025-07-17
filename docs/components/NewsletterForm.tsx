import { useState } from 'react';

export const NewsletterForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://blog.voltade.com/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      const result = await response.json();
      
      if (response.ok) {
        setMessage({ text: result.message, type: 'success' });
        setFormData({ name: '', email: '' });
      } else {
        setMessage({ text: result.error, type: 'error' });
      }
    } catch (error) {
      setMessage({ text: 'Network error. Please try again.', type: 'error' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="newsletter-section">
      <h3>Are you a Singapore SME?</h3>
      <p>We can link you up with an SME centre rep to learn all about grants.</p>
      
      {message.text && (
        <div className={`newsletter-message ${message.type}`}>
          {message.text}
        </div>
      )}
      
      <form className="newsletter-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Enter your email address"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Connecting...' : 'Connect'}
        </button>
      </form>
    </div>
  );
};