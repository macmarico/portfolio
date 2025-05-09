'use client';

import { useEffect } from 'react';

export default function Contact() {
  useEffect(() => {
    // Update the page title in the header
    const pageTitleElement = document.querySelector('.pageTitle');
    if (pageTitleElement) {
      pageTitleElement.innerHTML = 'CONTACT ME';
    }
  }, []);

  return (
    <div className="contactContainer block m-auto w-full md:w-[65%]">
      <h1 className="text-center">CONTACT ME</h1>
      <div className="w-full md:w-1/2 m-auto">
        <input
          className="p-2.5 w-[calc(50%-5px)] border-none bg-[#f1f1f1] rounded-[10px] my-2.5"
          type="text"
          placeholder="Enter your name"
        />
        <input
          className="p-2.5 w-[calc(50%-5px)] border-none bg-[#f1f1f1] rounded-[10px] my-2.5"
          type="text"
          placeholder="Enter your email"
        />
      </div>
      <textarea
        className="block p-[50px_10px] w-full md:w-1/2 border-none bg-[#f1f1f1] my-2.5 mx-auto rounded-[10px]"
        placeholder="Enter your message"
      />
      <button
        className="block p-2.5 text-white w-[150px] bg-[#4a5fc1] rounded-[10px] my-2.5 mx-auto border-none"
      >
        SUBMIT
      </button>
    </div>
  );
}
