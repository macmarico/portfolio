'use client';

import MainLayout from '@/components/layout/MainLayout';

export default function Contact() {
  return (
    <MainLayout pageTitle="CONTACT US">
      <div className="contactContainer block m-auto w-full md:w-[65%]">
        <h1 className="text-center text-3xl font-bold mb-8">GET IN TOUCH</h1>

        <p className="text-center mb-8">
          Have a question or want to discuss a project? We'd love to hear from you.
          Fill out the form below and we'll get back to you as soon as possible.
        </p>

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

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 w-full md:w-3/4 mx-auto">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2 text-[#4a5fc1]">Email</h3>
            <p>manishchandra012@gmail.com</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2 text-[#4a5fc1]">Phone</h3>
            <p>+91 9617195172</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2 text-[#4a5fc1]">Follow Us</h3>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-[#4a5fc1]">Instagram</a>
              <a href="#" className="text-[#4a5fc1]">WhatsApp</a>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
