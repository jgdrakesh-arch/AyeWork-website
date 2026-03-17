'use client';

import { useMemo, useState } from 'react';

async function submitDemoRequest(payload) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  return response.json();
}

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '', organization: '', email: '', interest: 'School board or school', message: '',
  });
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [lastSubmittedSignature, setLastSubmittedSignature] = useState('');

  const buttonLabel = useMemo(() => {
    if (status === 'sending') return 'Sending...';
    if (status === 'success') return 'Submitted';
    return 'Submit Request';
  }, [status]);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (status === 'sending') return;
    const signature = JSON.stringify(formData).trim();
    if (signature === lastSubmittedSignature) {
      setStatus('duplicate');
      setErrorMessage('This message appears to have already been submitted. Please wait before sending another request.');
      return;
    }
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setErrorMessage('Please complete your name, email, and message before submitting.');
      return;
    }
    setStatus('sending');
    setErrorMessage('');
    try {
      const result = await submitDemoRequest(formData);
      if (!result?.ok) throw new Error(result?.error || 'Submission failed');
      setLastSubmittedSignature(signature);
      setStatus('success');
    } catch (error) {
      setStatus('error');
      setErrorMessage(error.message || 'The message could not be delivered at this time. Please try again shortly.');
    }
  }

  return (
    <form className="form-grid" onSubmit={handleSubmit}>
      <div className="form-grid two">
        <label>
          <span>Name</span>
          <input className="input" type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your full name" />
        </label>
        <label>
          <span>Organization</span>
          <input className="input" type="text" name="organization" value={formData.organization} onChange={handleChange} placeholder="School, board, or community organization" />
        </label>
      </div>
      <div className="form-grid two">
        <label>
          <span>Email</span>
          <input className="input" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="name@organization.ca" />
        </label>
        <label>
          <span>I am interested as a</span>
          <select className="select" name="interest" value={formData.interest} onChange={handleChange}>
            <option>School board or school</option>
            <option>Community organization</option>
            <option>Student or parent</option>
            <option>Government or partner organization</option>
          </select>
        </label>
      </div>
      <label>
        <span>Message</span>
        <textarea className="textarea" rows="5" name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your needs, timeline, and how AyeWork can support your program." />
      </label>
      <div className="notice">
        Form protection: duplicate-click prevention, field validation, and delivery-state messaging are built into this experience.
        <div style={{ marginTop: 8, fontSize: '.8rem', color: '#94a3b8' }}>
          Deployment note: connect this form to a Vercel serverless function, Formspree, Resend, or your CRM for live delivery to contact@ayework.ca.
        </div>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 16 }}>
        <button type="submit" disabled={status === 'sending' || status === 'success'} className="btn btn-primary">
          {buttonLabel}
        </button>
        <div className="status">
          {status === 'success' && <span className="text-success">Your request has been sent successfully.</span>}
          {status === 'error' && <span className="text-error">{errorMessage}</span>}
          {status === 'duplicate' && <span className="text-warn">{errorMessage}</span>}
          {status === 'idle' && <span style={{ color: '#64748b' }}>You will receive clear confirmation once your message is sent.</span>}
          {status === 'sending' && <span className="text-info">Please wait while your request is being delivered.</span>}
        </div>
      </div>
    </form>
  );
}
