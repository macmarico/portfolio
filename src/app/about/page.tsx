'use client';

import MainLayout from '@/components/layout/MainLayout';

export default function About() {
  return (
    <MainLayout pageTitle="ABOUT US">
      <div className="aboutContainer block m-auto w-full md:w-[65%]">
        <h1 className="text-center text-3xl font-bold mb-8">ABOUT IBITCODE</h1>
        
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-[#4a5fc1]">Our Story</h2>
          <p className="mb-4">
            IBITCODE was founded with a simple mission: to provide high-quality, custom software solutions 
            that help businesses thrive in the digital age. With years of experience in software development, 
            we understand the challenges businesses face when implementing technology solutions.
          </p>
          <p>
            Our journey began with a passion for coding and problem-solving. Today, we've grown into a 
            trusted partner for businesses looking to leverage technology for growth and innovation.
          </p>
        </div>
        
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-[#4a5fc1]">Our Mission</h2>
          <p>
            At IBITCODE, our mission is to empower businesses through innovative software solutions. 
            We believe that the right technology, thoughtfully implemented, can transform operations, 
            enhance customer experiences, and drive business growth.
          </p>
        </div>
        
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-[#4a5fc1]">Our Approach</h2>
          <p className="mb-4">
            We take a collaborative approach to every project. We begin by understanding your business 
            goals and challenges, then work closely with you to design and develop solutions that address 
            your specific needs.
          </p>
          <p>
            Our development process is transparent, agile, and focused on delivering value at every step. 
            We believe in building long-term relationships with our clients, providing ongoing support 
            and maintenance to ensure your software continues to meet your evolving needs.
          </p>
        </div>
        
        <div>
          <h2 className="text-xl font-bold mb-4 text-[#4a5fc1]">Why Choose Us</h2>
          <ul className="list-disc pl-5 mb-4">
            <li className="mb-2">Expertise in modern web and mobile technologies</li>
            <li className="mb-2">Custom solutions tailored to your specific business needs</li>
            <li className="mb-2">Transparent communication and collaborative approach</li>
            <li className="mb-2">Commitment to quality and attention to detail</li>
            <li>Ongoing support and maintenance</li>
          </ul>
        </div>
      </div>
    </MainLayout>
  );
}
