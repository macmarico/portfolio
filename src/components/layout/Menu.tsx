'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleToggleMenu = () => {
      setIsOpen(!isOpen);
    };

    window.addEventListener('toggleMenu', handleToggleMenu);

    return () => {
      window.removeEventListener('toggleMenu', handleToggleMenu);
    };
  }, [isOpen]);

  const navigateTo = (path: string) => {
    router.push(path);
    setIsOpen(false);
  };

  return (
    <>
      <div className={`menu absolute flex top-0 right-[-40vw] md:right-[-40vw] bg-[#4a5fc1] h-full opacity-90 w-[50vw] md:w-[20vw] z-10 rounded-l-[20px] shadow-md transition-all duration-500 ${isOpen ? 'menuOpen right-0' : ''}`}>
        <div className="m-auto">
          <div className="p-2.5 text-2xl font-bold text-white cursor-pointer" onClick={() => navigateTo('/')}>HOME</div>
          <div className="p-2.5 text-2xl font-bold text-white cursor-pointer" onClick={() => navigateTo('/services')}>SERVICES</div>
          <div className="p-2.5 text-2xl font-bold text-white cursor-pointer" onClick={() => navigateTo('/projects')}>PROJECTS</div>
          <div className="p-2.5 text-2xl font-bold text-white cursor-pointer" onClick={() => navigateTo('/about')}>ABOUT US</div>
          <div className="p-2.5 text-2xl font-bold text-white cursor-pointer" onClick={() => navigateTo('/blog')}>BLOG</div>
          <div className="p-2.5 text-2xl font-bold text-white cursor-pointer" onClick={() => navigateTo('/contact')}>CONTACT</div>
        </div>
      </div>

      <div
        className={`menuCloseBtnCont absolute flex p-2.5 top-[45vh] md:top-[50vh] right-[calc(-110vw+50px)] md:right-[calc(-20vw+50px)] w-[60px] h-[60px] bg-[#333] rounded-full z-10 transition-all duration-500 cursor-pointer ${isOpen ? 'menuCloseBtnContActive md:right-[calc(20vw+50px)] right-[calc(50vw+50px)]' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-white font-bold m-auto">X</span>
      </div>
    </>
  );
}
