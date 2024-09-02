import React, { useState } from 'react';

const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <div className="mb-4  ml-20 md:ml-0 w-full">
    <button
      className="w-full text-left p-4 bg-white rounded-lg shadow-lg flex justify-between items-center"
      onClick={onClick}
    >
      <span className="text-gray-700">{question}</span>
      <span className="text-blue-500 text-xl">{isOpen ? '−' : '+'}</span>
    </button>
    {isOpen && (
      <div className="mt-2 p-4 bg-cyan-500 rounded-lg ">
        <p className="text-white">
          {answer}
        </p>
      </div>
    )}
  </div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(1);

  const faqData = [
    { question: "What does Mehab cost?", answer: "Mehab costs just a fraction of formal therapy. Where many people pay $30-60 per session, Mehab costs just $19.99 per month with unlimited sessions. Best of all you can cancel any time!" },
    { question: "How does it work?", answer: (
      <>
        Simply visit mehab.net on any device to get started. You can use it there or save it just like an app to your home screen for fast and simple access. Get your diagnosis from your healthcare provider, and search your diagnosis or enter your code. If you are heading to your healthcare provider take a copy of our Quick Referral Card{' '}
        <a href="https://www.mehab.net/Mehab_QRC.pdf" target="_blank" rel="noopener noreferrer" className="text-black ">
          Mehab QRC
        </a>{' '}
        and have them select your appropriate diagnosis.
      </>
    )},
    { question: "What protocol should I use?", answer: "We have over 120 protocols, each specifically designed for a particular issue. We highly recommend you get an accurate diagnosis before using Mehab. Take a copy of our Quick Referral Card (QRC) available here (insert printable QRC link here), to your healthcare provider." },
    { question: "Do I need hands on treatment?", answer: `The reality is that compliance to a home program is the key to recovery. As much as our CEO, a physical therapist himself, would like to think his "hands-on" is vital to recovery, research does not support that belief. In most cases a structured home program designed by medical professionals produces the same outcomes.` },
    { question: "Will Mehab work on my device?", answer: "Mehab is compatible with any device that has a web browser; smartphones, tablets, laptops, desktops and smart TV’s." },
    { question: "How do I cancel my subscription?", answer: "Select your protocol from your subscriptions. Under the billing section there is a cancel subscription option." },
    { question: "If I cancel, do I lose my access?", answer: "Cancelling a subscription to a protocol only stops the auto-recurring charge. You will still have access for the remainder of your 30 days." },
    { question: "Is a home program as good as traditional physical therapy?", answer: "Research has shown that in most cases a medically designed home exercise program produces the same outcomes as formal therapy. Mehab is an alternative for users that have limited ability to attend formal care due to cost, time, coverage, geographic isolation, transportation or physical limitations, or are going to rehab themselves anyways. If you are fortunate enough to attend formal care then by all means do it. Our goal is to provide the best and safest alternative to traditional therapy." },
  ];

  return (
    
    <div className="max-w-2xl mx-auto p-4">
        <div className='text-center font-semibold text-2xl mt-20 ml-20 md:ml-0'>FAQ</div>
      {faqData.map((item, index) => (
        <FAQItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={index === openIndex}
          onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
        />
      ))}
    </div>
  );
};

export default FAQ;
