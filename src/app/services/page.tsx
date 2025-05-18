'use client';

import MainLayout from '@/components/layout/MainLayout';
import Image from 'next/image';
import Link from 'next/link';

export default function Services() {
  return (
    <MainLayout pageTitle="SERVICES">
      <div className="servicesContainer block m-auto w-full md:w-[75%]">
        <h1 className="text-center text-3xl font-bold mb-8">OUR SERVICES</h1>
        
        <p className="text-center mb-8">
          At IBITCODE, we offer a comprehensive range of software development services 
          to help your business thrive in the digital world.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Web Development Service */}
          <div className="service-card bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-[#4a5fc1] rounded-full flex items-center justify-center mr-4">
                <span className="text-white text-xl">1</span>
              </div>
              <h2 className="text-xl font-bold">Web Development</h2>
            </div>
            <p className="mb-4">
              Custom web applications and websites built with modern technologies. 
              From simple landing pages to complex web applications, we deliver 
              solutions that are responsive, fast, and user-friendly.
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li>Responsive website design</li>
              <li>E-commerce solutions</li>
              <li>Progressive Web Apps (PWAs)</li>
              <li>Custom web applications</li>
            </ul>
          </div>
          
          {/* Mobile App Development Service */}
          <div className="service-card bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-[#4a5fc1] rounded-full flex items-center justify-center mr-4">
                <span className="text-white text-xl">2</span>
              </div>
              <h2 className="text-xl font-bold">Mobile App Development</h2>
            </div>
            <p className="mb-4">
              Native and cross-platform mobile applications for iOS and Android. 
              We build mobile apps that provide seamless user experiences and 
              help you reach your customers wherever they are.
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li>iOS and Android apps</li>
              <li>Cross-platform development</li>
              <li>App maintenance and updates</li>
              <li>App Store optimization</li>
            </ul>
          </div>
          
          {/* Custom Software Development Service */}
          <div className="service-card bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-[#4a5fc1] rounded-full flex items-center justify-center mr-4">
                <span className="text-white text-xl">3</span>
              </div>
              <h2 className="text-xl font-bold">Custom Software Development</h2>
            </div>
            <p className="mb-4">
              Tailored software solutions designed to address your specific business 
              challenges. We develop custom software that streamlines your operations, 
              improves efficiency, and drives growth.
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li>Business process automation</li>
              <li>CRM and ERP systems</li>
              <li>Data management solutions</li>
              <li>Integration with existing systems</li>
            </ul>
          </div>
          
          {/* UI/UX Design Service */}
          <div className="service-card bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-[#4a5fc1] rounded-full flex items-center justify-center mr-4">
                <span className="text-white text-xl">4</span>
              </div>
              <h2 className="text-xl font-bold">UI/UX Design</h2>
            </div>
            <p className="mb-4">
              User-centered design that enhances user experience and engagement. 
              We create intuitive, visually appealing interfaces that make your 
              software a joy to use.
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li>User research and testing</li>
              <li>Wireframing and prototyping</li>
              <li>Visual design</li>
              <li>Interaction design</li>
            </ul>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <Link href="/contact">
            <button className="px-6 py-3 bg-[#4a5fc1] text-white font-bold rounded-lg hover:bg-[#3a4fb1] transition-colors">
              GET IN TOUCH
            </button>
          </Link>
        </div>
      </div>
    </MainLayout>
  );
}
