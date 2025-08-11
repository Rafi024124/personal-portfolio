import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp } from 'react-icons/fa';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  // Replace these with your EmailJS IDs
  const SERVICE_ID = 'service_fd863gq';
  const TEMPLATE_ID = 'template_wv25tth';
  const USER_ID = '-sKirK8krb83diR5L';

  // Update form state
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit with async/await
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess('');
    setError('');

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, USER_ID);
      setSuccess('Message sent successfully!');
      setFormData({
        user_name: '',
        user_email: '',
        message: '',
      });
    } catch (err) {
      setError('Failed to send message. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      id="contact"
      className="max-w-xl mx-auto mt-20 p-8 rounded-2xl bg-black/90 text-cyan-100 shadow-lg border border-cyan-400/20"
    >
      <h2 className="text-4xl font-bold prime-color mb-6 text-center">Contact Me</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <input
          type="text"
          name="user_name"
          value={formData.user_name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="p-3 rounded-lg bg-[#0f172a] border border-cyan-400/50 text-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />
        <input
          type="email"
          name="user_email"
          value={formData.user_email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="p-3 rounded-lg bg-[#0f172a] border border-cyan-400/50 text-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows="5"
          required
          className="p-3 rounded-lg bg-[#0f172a] border border-cyan-400/50 text-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-400 resize-none"
        ></textarea>

        <button
          type="submit"
          disabled={loading}
          className="bg-orange-400 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition disabled:opacity-60"
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      {success && <p className="mt-4 text-green-400 text-center">{success}</p>}
      {error && <p className="mt-4 text-red-500 text-center">{error}</p>}

      {/* Phone Number */}
      <div className="mt-2 text-cyan-100 text-center mb-4 font-semibold text-lg select-text">
        📞 Phone:{' '}
        <a
          href="tel:+8801611533352"
          className="hover:text-orange-300 underline"
        >
          +880 1611 533 352
        </a>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-8 mt-2 prime-color text-3xl">
        <a
          href="https://github.com/Rafi024124"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-orange-300 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/mdrofiuddin/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-orange-300 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.facebook.com/Moahammad.Rafii"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="hover:text-orange-300 transition"
        >
          <FaFacebook />
        </a>
        {/* WhatsApp */}
        <a
          href="https://wa.me/8801611533352"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="hover:text-orange-300 transition"
        >
          <FaWhatsapp />
        </a>
      </div>
    </div>
  );
};

export default ContactMe;
