const ContactSectionData = {
  // Section header
  label: 'Get in Touch',
  headline: "Let's Work Together",
  subtext: 'Have a project in mind? Tell me about it and I\'ll get back to you within 24 hours.',

  // Project type select options
  projectTypes: [
    { value: '', label: 'What are you working on?' },
    { value: 'ux-design', label: 'UX / UI Design' },
    { value: 'product-engineering', label: 'Product Engineering' },
    { value: 'design-system', label: 'Design System' },
    { value: 'product-0to1', label: '0 → 1 Product' },
    { value: 'consultation', label: 'Consultation' },
    { value: 'other', label: 'Something else' },
  ],

  // CTA button copy
  submitLabel: 'Send Message',
  submittingLabel: 'Sending...',

  // Feedback messages
  successMessage: 'Message sent. I\'ll be in touch within 24 hours.',
  errorMessage: 'Something went wrong. Please try again or email directly.',

  // Direct email fallback (shown in errorMessage or footer of form)
  directEmail: 'tabrez.dal@gmail.com',
};

export default ContactSectionData;
