import React, { useState } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'Claire E',
    description: 'Saved me Hundreds of Dollars',
    image: '/images/member2.jpg',
    testimonial: `Given my extremely high insurance deductible, this saved me many hundreds of dollars that 
    would have been spent in physical therapy deductibles and copayments, with the added convenience of 
    not having to spend hours in physical therapy visits multiple times a week. If your healthcare provider
     suggests Mehab is appropriate for you, I'd recommend giving it a try! - Claire E.`
  },
  {
    id: 2,
    name: 'Steve W',
    description: 'This App Will Save You Time and Money',
    image: '/images/avtar-5.jpg',
    testimonial: `This app is fantastic. For everyone who cannot afford or is not able to get to weekly treatments. 
    This app will save you time and money. Developed and written by a Dr of physical
     therapy, it has all the exercises online to do at a time that it suits you. Most importantly great support and service. - Steve W.`
  },
  {
    id: 3,
    name: 'Chris L',
    description: 'Easy to Use And High Quality Protocols',
    image: '/images/avtar-8.jpg',
    testimonial: `Newer home exercise application. Very easy to use and high quality exercises/protocols. As a PT, I believe this is going to be the future 
    for a large percentage of patients who are comfortable with more of a independent approach to rehab. Compared to traditional rehab, this is an unbelievable money-saver. - Chris L.`
  }
];

function TestimonialSection() {
  const [selectedTestimonial, setSelectedTestimonial] = useState(testimonials[0]);

  return (
    <div className="flex flex-col mt-20 px-4 md:px-20">
     
      <h2 className="text-3xl font-semibold text-black mb-10 text-center ml-20 md:ml-0">
        Real Stories by Real People
      </h2>
    <div className="flex flex-col md:flex-row ">
     
      <div className="w-full md:w-1/2 ml-20 mt-10">
        <div className="grid gap-4 md:gap-8 md:grid-rows-3  flex  justify-center items-center">
          {testimonials.map((user, index) => (
            <div
              key={user.id}
              className={`flex flex-col cursor-pointer p-4 rounded-md  ${
                selectedTestimonial.id === user.id ? 'bg-cyan-500 shadow-custom p-6 rounded-lg' : 'bg-white'
              } ${index === 1 ? 'md:justify-center md:ml-20' : 'md:justify-start md:mr-20 '}`}
              onClick={() => setSelectedTestimonial(user)}
            >
              <div className="flex items-center mb-4 ">
                <div className="flex-shrink-0 mr-4">
                  <Image
                    src={user.image}
                    alt={user.name}
                    width={48} 
                    height={48} 
                    className="rounded-full"
                  />
                </div>
                <div className="flex flex-col ">
                  <h3 className="text-lg font-semibold">{user.name}</h3>
                  <p className="text-sm font-bold text-black">{user.description}</p>
                </div>
              </div>
              <div className={`md:hidden   ${selectedTestimonial.id === user.id ? 'bg-cyan-500 p-4 rounded-lg ' : 'bg-white'}`}>
                <p className={`text-black ${selectedTestimonial.id === user.id ? 'text-white' : ''}`}>{user.testimonial}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden md:block md:w-2/3 mt-4 md:mt-0 pl-0 md:pl-4 md:border-l justify-center items-center md:mt-20">
        <p className="text-black items-center">{selectedTestimonial.testimonial}</p>
      </div>
    </div>
    </div>
  );
}

export default TestimonialSection;