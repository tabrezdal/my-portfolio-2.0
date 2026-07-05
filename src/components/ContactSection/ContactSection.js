import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import EmailJsConfig from '../../Helpers/EmailJsConfig';
import ContactSectionData from './ContactSectionData';
import './ContactSection.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: ''
  });
  const [status, setStatus] = useState('idle');
  const [errors, setErrors] = useState({});

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const validate = (data) => {
    const errs = {};
    if (!data.name || data.name.length < 2) {
      errs.name = 'Please enter your name.';
    }
    if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errs.email = 'Enter a valid email address.';
    }
    if (!data.message || data.message.length < 20) {
      errs.message = 'Message must be at least 20 characters.';
    }
    return errs;
  };

  const sendEmail = async (data) => {
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      project_type: data.projectType,
      message: data.message,
    };

    await emailjs.send(
      EmailJsConfig.SERVICE_ID,
      EmailJsConfig.TEMPLATE_ID_ContactForm,
      templateParams,
      EmailJsConfig.USER_ID
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate(formData);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setStatus('submitting');
    setErrors({});
    try {
      await sendEmail(formData);
      setStatus('success');
      setFormData({ name: '', email: '', projectType: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-section__container">
        <motion.div
          className="contact-section__header"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <span className="contact-section__label">{ContactSectionData.label}</span>
          <h2 className="contact-section__headline">{ContactSectionData.headline}</h2>
          <p className="contact-section__subtext">{ContactSectionData.subtext}</p>
        </motion.div>

        <motion.div
          className="contact-section__form-column"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          transition={{ delay: 0.15 }}
        >
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success"
                className="contact-section__success"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0 }}
                role="alert"
              >
                <div className="contact-section__success-icon">✓</div>
                <p className="contact-section__success-message">
                  {ContactSectionData.successMessage}
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                className="contact-section__form"
                onSubmit={handleSubmit}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0 }}
              >
                <div className="contact-section__field-group">
                  <label htmlFor="name" className="contact-section__label-text">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`contact-section__input ${errors.name ? 'error' : ''}`}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    disabled={status === 'submitting'}
                  />
                  {errors.name && (
                    <p id="name-error" className="contact-section__field-error">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div className="contact-section__field-group">
                  <label htmlFor="email" className="contact-section__label-text">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`contact-section__input ${errors.email ? 'error' : ''}`}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    disabled={status === 'submitting'}
                  />
                  {errors.email && (
                    <p id="email-error" className="contact-section__field-error">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="contact-section__field-group">
                  <label htmlFor="projectType" className="contact-section__label-text">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="contact-section__select"
                    disabled={status === 'submitting'}
                  >
                    {ContactSectionData.projectTypes.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="contact-section__field-group">
                  <label htmlFor="message" className="contact-section__label-text">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`contact-section__textarea ${errors.message ? 'error' : ''}`}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    disabled={status === 'submitting'}
                    maxLength={1000}
                  />
                  {errors.message && (
                    <p id="message-error" className="contact-section__field-error">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="contact-section__submit-btn"
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? ContactSectionData.submittingLabel : ContactSectionData.submitLabel}
                </button>

                {status === 'error' && (
                  <p className="contact-section__error-message" role="alert">
                    {ContactSectionData.errorMessage} <a href={`mailto:${ContactSectionData.directEmail}`}>{ContactSectionData.directEmail}</a>
                  </p>
                )}
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
