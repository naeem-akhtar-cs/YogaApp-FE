import React from 'react';
import { useRouter } from "next/router";
import TestimonialSection from "../components/Testimonials"
import Benefits from "../components/Benefits"
import FAQ from "../components/FAQ"
import Image from 'next/image';

function Home() {
    const router = useRouter();
   
    const handleClick = () => {
      router.push("/signup");
    };
    const handlelinkClick = () => {
        router.push('/protocols');
      };
  return (
    <div className='bg-white min-h-screen w-full'>
      <div className="min-h-screen  flex md:items-center items-center p-8 w-auto  ">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8 w-[500px]">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 mt-20 md:mt-0 ">
              Rehabilitation that fits your schedule and budget
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              A physical therapy alternative bringing unparalleled access for users wherever they are and whenever they want
            </p>
            <div className="  w-[500px] px-2 md:px-20 lg:px-40 justify-center  md:ml-0 ml-20">
              <button
                onClick={handleClick}
                className="bg-cyan-500 mt-20 py-2   md:text-center justify-center rounded-full px-20 md:px-10 md:py-2 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 inline-flex "
              >
                Sign Up Now
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center  w-[500px]">
          <Image 
  src="/images/mehab_multi_device_screen-01.png"
  alt="Screenshot of multiple devices displaying healthcare services"
  className="rounded-lg max-w-full h-auto"
  width={800} 
  height={600} 
/>

          </div>
        </div>
      </div>

     

      <div className="md:mt-[70px] bg-gray-100 rounded-lg mx-10 shadow-md mt-20 md:p-10 md:px-20 w-full md:w-full md:max-w-4xl ml-20 md:ml-0 h-64 md:h-auto">
        <h1 className="text-2xl font-bold text-center mb-6 md:mt-0 pt-6">Start Your Exercises Now!</h1>
        <p className="text-center text-gray-600 mb-6">
          Please visit the store or enter your 4 digit code your physician provided.
        </p>
        <div className="flex justify-center space-x-4">
          <button onClick={handlelinkClick}
           className="bg-cyan-500 text-white px-6 py-2 rounded-md hover:bg-cyan-600 transition duration-300">
            Go to Store
          </button>
          <span className="flex items-center text-gray-500">OR</span>
          <button className="border border-cyan-500 text-cyan-500 px-6 py-2 rounded-md hover:bg-cyan-50 transition duration-300">
            Enter Code
          </button>
        </div>
      </div>

      <div className="container mx-auto p-4">
        <TestimonialSection />
     

<div className="bg-gray-50  md:p-8 rounded-lg shadow-lg w-full md:max-w-6xl md:mx-auto ml-20 my-12  md:ml-0">
  <div className="flex flex-col md:flex-row items-center md:items-start">
    <div className="w-full md:w-2/3 md:pr-8 text-center md:text-left">
      <h2 className="text-2xl md:text-3xl font-semibold text-black mb-4 mt-4 md:mt-10">
        Trusted By Your Colleagues
      </h2>
      <div className="text-lg md:text-xl text-gray-600">
        <h6>&quot;As an orthopedic surgeon, I rely heavily on physical therapy to get my patients back to their optimal level of function. However, in today&apos;s medical environment, very high co-pays can be a huge hindrance to this goal. In addition, with the hectic pace of life, it is often difficult to schedule particular times to do therapy.</h6>
        <br />
        <p>This is why I rely heavily on Mehab for my therapy needs. The low monthly cost allows many patients, who would not be able to afford normal physical therapy, to have access to high-level therapy intervention.&quot;</p>
      </div>
      <h2 className="mt-5 font-bold text-gray-800 mb-4">
        Dr. George Stollsteimer
      </h2>
      <div className="flex justify-center md:justify-start">
        <Image 
          src="/images/dr-signature-1.png" 
          alt="Doctor's signature" 
          width={150}
          height={100}
        />
      </div>
    </div>
    
    <div className="w-full md:w-1/3 mt-6 md:mt-0 overflow-hidden">
      <Image
        src="/images/phsycian-crossed-arms-2.jpg" 
        alt="Excited doctor" 
        width={600}
        height={500}
        layout="responsive"
      />
    </div>
  </div>
</div>
      <div className="flex w-full md:max-w-6xl mx-auto my-12 rounded-lg   ">
  <div className="w-1/2 p-4 hidden md:block">
    <Image
      src="/images/iphone-x-right.png" 
      alt="doctor"
      width={200}
  height={400}
      className="w-full h-auto object-cover rounded-l-lg" 
    />
  </div>
  <div className="md:w-1/2 p-4 flex flex-col justify-center w-full ml-20 md:ml-0 ">
  <h2 className="text-4xl text-black font-semibold mb-4 ">
    Progress in Motion
    </h2>
    <p className="text-xl text-gray-900 leading-normal">
    Whether it is in industry or a personal physical state, progress is driven by a dissatisfaction with the status quo. The desire to improve; to be better. Just as forward motion is crucial for progress in our society, movement is the primary determinant in your successful recovery. We ask you to join us in challenging the status quo and challenge yourself to move forward with us. We are progress in motion.
    </p>
    <a 
      className='mt-10 ml-5 cursor-pointer hover:underline text-gray-800' 
      onClick={handlelinkClick}
    >
      Available Protocols
    </a>
  </div>
</div>
<Benefits/>

<h1 className='text-center mt-[150px] font-bold text-3xl ml-20 md:ml-0'>
    How it Works
</h1>
<h5 className='text-center text-2xl mt-7 text-gray-400 ml-20 md:ml-0'>Step-by-step rehabilitation instruction</h5>
<div className="flex p-4 mt-20 border-b-2 border-r-2 md:rounded-full rounded-3xl border-cyan-500 w-full ml-20">

  <div className="w-1/2   mt-20 ml-20  rounded-3xl hidden md:block">
  <Image
  src="/images/mehab_phone-screen-03.png"
  className="rounded-3xl shadow-custom"
  alt="phone"
  width={150}
  height={400}
/>

  </div>
  <div className="md:w-1/2 p-6 flex flex-col justify-center w-full ">
    <h1 className="text-4xl font-bold text-cyan-500 mb-4">1.</h1>
    <div className="text-3xl text-black">
  <h6>Get your diagnosis</h6>
  <br/>
  <p className='text-2xl mt-2 text-gray-700'>Get your protocol code or diagnosis from your physician</p>
</div>
  </div>
</div>
<div className="flex p-4 mt-20 border-b-2 border-r-2 md:rounded-full rounded-3xl border-cyan-500 w-full ml-20">

  <div className="w-1/2   mt-20 ml-20  rounded-3xl hidden md:block">
  <Image
  src="/images/mehab_phone-screen-02.png"
  className="rounded-3xl shadow-custom"
  alt="phone"
  width={150}
  height={400}
/>

  </div>
  <div className="md:w-1/2 p-6 flex flex-col justify-center w-full ">
    <h1 className="text-4xl font-bold text-cyan-500 mb-4">2.</h1>
    <h6 className="text-3xl text-black">
    Get Your Protocol <br></br>
    <p className='text-2xl mt-2 text-gray-700'>Enter your code, diagnosis or keyword in to the app or website and confirm your protocol.</p>
    
    </h6>
  </div>
</div>
<div className="flex p-4 mt-20 border-b-2 border-r-2 md:rounded-full rounded-3xl border-cyan-500 w-full ml-20">

  <div className="w-1/2   mt-20 ml-20  rounded-3xl hidden md:block">
  <Image
  src="/images/mehab_phone-screen-01.png"
  className="rounded-3xl shadow-custom"
  alt="phone"
  width={150}
  height={400}
/>

  </div>
  <div className="md:w-1/2 p-6 flex flex-col justify-center w-full ">
    <h1 className="text-4xl font-bold text-cyan-500 mb-4">3.</h1>
    <h6 className="text-3xl text-black">
    Get Started <br></br>
    <p className='text-2xl mt-2 text-gray-700'>Open your protocol, and follow the guided evidence-based information.</p>
    
    </h6>
  </div>
</div>

      <div className="flex bg-white rounded-lg shadow-lg overflow-hidden ml-20 md:ml-0 mt-20 w-full">
        <div className="p-8 md:max-w-md w-full mt-20 ">
          <h1 className="text-3xl font-semibold text-gray-600 mb-4">Pricing</h1>
          <h6 className="text-black mb-4 text-2xl">
            Mehab is just a fraction of the cost of traditional physical therapy. Users have unlimited access to their protocol for just <span className="text-cyan-600 font-bold">$19.99</span> a month.
          </h6>
          <div className="flex justify-center mt-20">
  <button onClick={handlelinkClick}
   className="bg-cyan-500 text-white px-10 font-semibold py-3 rounded-full hover:bg-cyan-600 transition duration-300">
   Start Now
  </button>
</div>
        </div>
        <div className="relative  flex justify-end content-end ml-20 hidden md:block">
  <Image
    src="/images/happy-user-mobile-phone.gif" 
    alt="Man using smartphone"
    className="w-[70%]  max-w-full max-h-full object-cover"
    width={400}
    height={600}
 
  />
  <div className="absolute -left-8 -bottom-8 w-16 h-16 bg-white rounded-tr-full"></div> 
</div>
</div>

<div className="mx-auto p-4 mt-20 ">
  <div className="p-8 mt-20 hidden md:block">
    <h1 className="text-3xl font-bold text-black mb-4 text-center">
      Rotator Cuff Repair Cost Comparison
    </h1>
  </div>

  
  <div className="hidden md:flex w-full">
    <div className="w-1/2">
      <h6 className="h-16 flex items-center justify-center pl-2"></h6>
      <h6 className="h-16 flex items-center justify-center pl-2">Length of Treatment</h6>
      <h6 className="h-16 flex items-center justify-center pl-2">Home Exercise Required</h6>
      <h6 className="h-16 flex items-center justify-center pl-2">Sessions</h6>
      <h6 className="h-16 flex items-center justify-center pl-2">Cost</h6>
      <h6 className="h-16 flex items-center justify-center pl-2">Monthly Cost</h6>
      <h6 className="h-16 flex items-center justify-center pl-2">Outcome</h6>
    </div>

    <div className="w-1/2 mr-20 overflow-hidden rounded-3xl border border-gray-200 shadow-2xl">
      <table className="w-full text-center">
        <thead>
          <tr>
            <th className="border border-gray-200 p-4 text-center">TRADITIONAL THERAPY</th>
            <th className="border-b border-gray-200 p-4 text-center">MEHAB</th>
          </tr>
        </thead>
        <tbody>
          <tr className="h-16"><td className="border border-gray-200 p-4">16 weeks</td><td className="border-b border-gray-200 p-4">16 weeks</td></tr>
          <tr className="h-16"><td className="border border-gray-200 p-4">Yes</td><td className="border-b border-gray-200 p-4">Yes</td></tr>
          <tr className="h-16"><td className="border border-gray-200 p-4">3 x weeks</td><td className="border-b border-gray-200 p-4">Unlimited</td></tr>
          <tr className="h-16"><td className="border border-gray-200 p-4">$30 / visit</td><td className="border-b border-gray-200 p-4">$4.99 / week</td></tr>
          <tr className="h-16"><td className="border border-gray-200 p-4">$360</td><td className="border-b border-gray-200 p-4">$19.99</td></tr>
          <tr className="h-16"><td className="border border-gray-200 p-4">Same As Mehab</td><td className="border-b border-gray-200 p-4">Same as Traditional</td></tr>
          <tr className="h-16">
            <td className="border-r border-gray-200 p-4 bg-red-600 text-white text-center rounded-bl-3xl">Total Patient Cost: $1440</td>
            <td className="p-4 bg-green-600 text-white text-center rounded-br-3xl">Total Patient Cost: $79.95</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div className="md:hidden w-full mx-auto justify-center ml-10 ">
  <h2 className="text-2xl font-bold mb-4 text-center ml-20  w-full ">ROTATOR CUFF REPAIR COST COMPARISON</h2>
  <div className='justify-center ml-20 w-full text-center'>
  <h3 className="text-3xl font-semibold mb-4 text-center mt-10">TRADITIONAL THERAPY</h3>
  <div className=" rounded-lg   bg-white">
    <table className="w-full text-xl">
      <tbody>
        <tr>
          <td className="border border-gray-700 p-4" colspan="2">Length of Treatment</td>
          <td className="border border-gray-700 p-4 font-semibold" colspan="2">16 weeks</td>
        </tr>
        <tr>
          <td className="border border-gray-700 p-4" colspan="2">Home Exercise Required</td>
          <td className="border border-gray-700 p-4 font-semibold" colspan="2">Yes</td>
        </tr>
        <tr>
          <td className="border border-gray-700 p-4" colspan="2">Weekly Sessions</td>
          <td className="border border-gray-700 p-4" colspan="2">3 x weeks</td>
        </tr>
        <tr>
          <td className="border border-gray-700 p-4" colspan="2">Cost</td>
          <td className="border border-gray-700 p-4" colspan="2">$30 / visit</td>
        </tr>
        <tr>
          <td className="border border-gray-700 p-4" colspan="2">Monthly Cost</td>
          <td className="border border-gray-700 p-4 font-semibold" colspan="2">$360</td>
        </tr>
        <tr>
          <td className="border border-gray-700 p-4" colspan="2">Outcome</td>
          <td className="border border-gray-700 p-4 font-semibold" colspan="2">Same As Mehab</td>
        </tr>
      </tbody>
    </table>
    <div className="mt-4 bg-red-600 text-white p-4 rounded text-center font-bold text-xl">
      Total Patient Cost: $1440
    </div>
  </div>
</div>

<div className='font-bold mt-20 justify-center ml-20 w-full text-center'>
  <h3 className="text-3xl font-semibold mb-4 text-center">MEHAB</h3>
  <div className=" rounded-lg   bg-white">
    <table className="w-full text-xl">
      <tbody>
        <tr>
          <td className="border border-gray-700 p-4" colspan="2">Length of Treatment</td>
          <td className="border border-gray-700 p-4 font-semibold" colspan="2">16 weeks</td>
        </tr>
        <tr>
          <td className="border border-gray-700 p-4" colspan="2">Home Exercise Required</td>
          <td className="border border-gray-700 p-4 font-semibold" colspan="2">Yes</td>
        </tr>
        <tr>
          <td className="border border-gray-700 p-4" colspan="2">Weekly Sessions</td>
          <td className="border border-gray-700 p-4 font-semibold" colspan="2">Unlimited</td>
        </tr>
        <tr>
          <td className="border border-gray-700 p-4" colspan="2">Cost</td>
          <td className="border border-gray-700 p-4 font-semibold" colspan="2">$4.99 / week</td>
        </tr>
        <tr>
          <td className="border border-gray-700 p-4" colspan="2">Monthly Cost</td>
          <td className="border border-gray-700 p-4 font-semibold" colspan="2">$19.99</td>
        </tr>
        <tr>
          <td className="border border-gray-700 p-4" colspan="2">Outcome</td>
          <td className="border border-gray-700 p-4 font-semibold" colspan="2">Same as Traditional</td>
        </tr>
      </tbody>
    </table>
    <div className="mt-4 bg-green-600 text-white p-4 rounded text-center font-bold text-xl">
      Total Patient Cost: $79.95
    </div>
  </div>
</div>

</div>
  
</div>

    <div className="md:max-w-6xl w-full mx-auto px-4 py-12 mt-20 border-b-2 border-r-2 rounded-full border-cyan-500 text-center ml-20 md:ml-0 text-xl md:text-base">
      <h2 className="text-3xl font-bold text-center mb-12">Our Average User</h2>
      
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex-1 text-center">
        <svg className="w-12 h-12 mx-auto mb-4" fill="none" stroke="url(#cyanGradient)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="cyanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style={{ stopColor: '#009DFF', stopOpacity: 1 }} /> 
      <stop offset="100%" style={{ stopColor: '#007BCC', stopOpacity: 1 }} />
    </linearGradient>
  </defs>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
  />
</svg>

          <h3 className="text-2xl font-semibold mb-2">Saves $350 a month</h3>
          <p className="text-gray-600  ">Users save significantly, have unlimited <br/>sessions and are able to cancel<br/> at anytime</p>
        </div>

        <div className="flex-1 text-center">
        <svg className="w-12 h-12 mx-auto mb-4" fill="none" stroke="url(#cyanGradient)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="cyanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style={{ stopColor: '#009DFF', stopOpacity: 1 }} /> 
      <stop offset="100%" style={{ stopColor: '#007BCC', stopOpacity: 1 }} /> 
    </linearGradient>
  </defs>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
  />
</svg>

          <h3 className="text-2xl font-semibold mb-2">Saves 12 hours a month</h3>
          <p className="text-gray-600">Eliminating commuting times, and wait<br/> times, users reduce time by 33%<br/> per session.</p>
        </div>

        <div className="flex-1 text-center">
        <svg className="w-12 h-12 mx-auto mb-4" fill="none" stroke="url(#cyanGradient)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="cyanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style={{ stopColor: '#009DFF', stopOpacity: 1 }} />  
      <stop offset="100%" style={{ stopColor: '#007BCC', stopOpacity: 1 }} /> 
    </linearGradient>
  </defs>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
  />
</svg>

          <h3 className="text-2xl font-semibold mb-2">Recovers the same as PT</h3>
          <p className="text-gray-600">For most, a structured home <br/>program provides the same results as <br/>physical therapy.</p>
        </div>
      </div>
    </div>
    <FAQ/>

    <div className="min-h-screen  flex items-center p-8  ml-20 md:ml-0 w-full">
       
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8 text-center">
            <h1 className="text-2xl  font-semibold text-gray-800 mb-4">
            Get a 14 days for Free
            </h1>
            <p className="text-medium text-gray-600 mb-8 text-start ml-12">
            All you need to do is spend 5 minutes of your time. Perhaps in the future you will tell us thanks.
            </p>
            <div className=" py-15 xs:px-2 sm:px-2 md:px-20 lg:px-40">
            <div className="flex justify-start mt-10">
            <button
        onClick={handleClick}
        className="bg-cyan-500 text-white shadow-xl px-16 md:px-10 font-semibold py-3 rounded-full hover:bg-cyan-600 transition duration-300 justify-center ml-20 md:ml-0"
      >
        Register
      </button>
</div>
            </div>
          </div>
          <div className="flex justify-center w-full ml-4 md:ml-0">
  <Image
    src="/images/mehab_multi_device_screen-01.png"
    alt="Screenshot of multiple devices displaying healthcare services"
    className="rounded-lg max-w-[400px] h-auto md:max-w-[700px] md:h-auto"
    width={800}
    height={600}
  />
</div>


        </div>
      </div>

      </div>
    </div>
  );
}

export default Home;