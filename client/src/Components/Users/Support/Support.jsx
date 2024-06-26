import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Support.css';

const faqData = [
  {
    question: "How can I reset my password?",
    answer: "To reset your password, go to the login page and click on 'Forgot Password'. Follow the instructions to reset your password."
  },
  {
    question: "Where can I find my order history?",
    answer: "You can find your order history in your account settings under 'Order History'."
  },
  {
    question: "How can I contact customer support?",
    answer: "You can contact our customer support via email at support@example.com or call us at (123) 456-7890."
  }
];

const Support = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate();

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="support">
      <button className="home-button" onClick={() => navigate('/HomeUser')}>Go to Home</button>
      <h1>Support Center</h1>
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
            </div>
            {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
      <div className="additional-resources">
        <h2>Additional Resources</h2>
        <ul>
          <li><a href="/help/documentation">Documentation</a></li>
          <li><a href="/help/tutorials">Tutorials</a></li>
          <li><a href="/help/community">Community Forums</a></li>
        </ul>
      </div>
      <div className="contact-support">
        <h2>Contact Support</h2>
        <p>If you need further assistance, please <a href="/contact">contact us</a>.</p>
      </div>
    </div>
  );
}

export default Support;
