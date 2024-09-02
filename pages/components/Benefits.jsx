import React from 'react';

const ValueCard = ({ icon, title, description }) => (
  <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center ">
    <div className="bg-cyan-500 rounded-full p-3 mb-4">
      {icon}
    </div>
    <h3 className="text-3xl font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600 text-lg">{description}</p>
  </div>
);

const Benefits = () => {
  const values = [
    {
      icon: <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
      title: "Safe",
      description: "Built after an extensive literature review. Mehab includes exercise videos, tracking, reporting, and a patent pending safety system."
    },
    {
      icon: <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
      title: "Affordable",
      description: "Costing less than just one session of physical therapy, users have unlimited access to information, education and support."
    },
    {
      icon: <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
      title: "Convenient",
      description: "Available anywhere, anytime. No appointments. No commuting. Works on smartphones, tablets, and computers."
    }
  ];

  return (
    <div className="bg-gray-100 py-16 rounded-full w-full ml-20 md:ml-0 border border-cyan-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <ValueCard key={index} {...value} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;