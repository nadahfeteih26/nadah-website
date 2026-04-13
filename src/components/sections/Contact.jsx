import { useState } from 'react';
import ScrollReveal from '../ui/ScrollReveal';

const inquiryTypes = [
  'Tech Consulting',
  'Travel & Outdoor Partnerships',
  'Speaking',
  'Media',
  'Just saying hi',
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiry: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError('');

    try {
      const res = await fetch('https://formspree.io/f/xjgpkwdq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          inquiry: formData.inquiry,
          message: formData.message,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', inquiry: '', message: '' });
      } else {
        setError('Something went wrong. Please try emailing directly.');
      }
    } catch {
      setError('Something went wrong. Please try emailing directly.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="connect" className="py-24 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left side — text */}
          <ScrollReveal>
            <div>
              <p className="text-secondary-dark font-medium text-sm tracking-widest uppercase mb-4">
                Get in Touch
              </p>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-on-surface leading-[1.1] mb-6 italic">
                Let's build
                <br />
                something together
              </h2>
              <p className="text-on-surface-muted text-lg leading-relaxed mb-10 max-w-md">
                Whether you're looking for a speaker, a collaborator, coaching, or just want to connect over shared passions in tech and the outdoors — I'd love to hear from you.
              </p>

              {/* Email */}
              <div className="mt-0">
                <p className="text-xs text-on-surface-muted uppercase tracking-widest mb-3">Email</p>
                <div className="space-y-1.5">
                  <p className="text-on-surface-muted text-sm">
                    Personal:{' '}
                    <a href="mailto:nadahfeteih@gmail.com" className="text-on-surface font-heading text-lg italic hover:text-primary transition-colors">
                      nadahfeteih@gmail.com
                    </a>
                  </p>
                  <p className="text-on-surface-muted text-sm">
                    Business:{' '}
                    <a href="mailto:nadah@mawacollective.com" className="text-on-surface font-heading text-lg italic hover:text-primary transition-colors">
                      nadah@mawacollective.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right side — form */}
          <ScrollReveal delay={0.1}>
            <div className="bg-surface-dim rounded-2xl p-8 md:p-10">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="font-heading text-2xl text-on-surface italic mb-2">Message sent!</h3>
                  <p className="text-on-surface-muted">Your message has been sent. Looking forward to connecting!</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-sm text-primary font-medium hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-on-surface-muted uppercase tracking-widest mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-surface rounded-lg text-on-surface placeholder:text-on-surface-muted/40 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-shadow"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-on-surface-muted uppercase tracking-widest mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-surface rounded-lg text-on-surface placeholder:text-on-surface-muted/40 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-shadow"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="inquiry" className="block text-xs font-medium text-on-surface-muted uppercase tracking-widest mb-2">
                      I'm reaching out about
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {inquiryTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormData((prev) => ({ ...prev, inquiry: type }))}
                          className={`px-4 py-2 rounded-full text-sm transition-all duration-200 ${
                            formData.inquiry === type
                              ? 'bg-primary text-on-primary'
                              : 'bg-surface text-on-surface-muted hover:bg-surface-high'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-on-surface-muted uppercase tracking-widest mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-surface rounded-lg text-on-surface placeholder:text-on-surface-muted/40 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-shadow resize-none"
                      placeholder="Tell me what you have in mind..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-3.5 bg-primary text-on-primary font-semibold rounded-lg hover:bg-primary-container transition-all duration-300"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
