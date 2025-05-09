'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

export default function Projects() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    // Update the page title in the header
    const pageTitleElement = document.querySelector('.pageTitle');
    if (pageTitleElement) {
      pageTitleElement.innerHTML = 'PROJECTS';
    }
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    
    setIsDown(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !sliderRef.current) return;
    e.preventDefault();
    
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = x - startX;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div 
      ref={sliderRef}
      className="projectsContainer block w-full md:w-[calc(100%-200px)] h-[calc(100vh-130px)] md:h-[60vh] m-auto overflow-auto whitespace-nowrap p-5 md:p-[20px_10px]"
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      {/* Project 1 */}
      <div className="items block md:inline-block relative bg-[#333] shadow-md w-full md:w-[60%] h-[80%] md:h-full rounded-none md:rounded-[10px] my-5 md:mr-10 opacity-50 md:opacity-100">
        <div className="projectOrder flex absolute top-5 left-5 w-[50px] h-[50px] md:w-[70px] md:h-[70px] rounded-full bg-[#4a5fc1] text-white p-auto z-10">
          <span className="m-auto font-bold text-2xl">1</span>
        </div>
        <Image
          className="GGMMPL_image1 hidden md:inline-block rounded-[10px]"
          src="/images/colorful-palm-silhouettes-background_23-2148541792.jpg"
          alt="Project 1"
          width={800}
          height={600}
          style={{ width: '100%', height: 'auto' }}
        />
        <Image
          className="GGMMPL_image2 block md:hidden rounded-[10px]"
          src="/images/GGMMPL_mobile.png"
          alt="Project 1 Mobile"
          width={400}
          height={800}
          style={{ width: '100%', height: '100%' }}
        />
        <div className="overlay absolute bottom-0 left-0 h-[10%] w-full rounded-[10px] text-white p-2.5 transition-all duration-500"></div>
        <div className="itemContent absolute hidden">
          <div className="text-white whitespace-normal text-center w-1/2 md:w-1/2 m-auto">
            A great looking website for GoyalGlobalMetalMart showcasing all
            of their products along with a metal calculator that calculates
            weight of selected product in real time as user inputs the
            required length.
          </div>
          <a
            href="https://www.goyalglobalmetalmart.com"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline text-white"
          >
            <button className="block mx-auto my-2.5 w-[150px] font-bold p-2.5 bg-[#4a5fc1] border-none rounded-[10px]">
              Visit site..
            </button>
          </a>
        </div>
      </div>

      {/* Project 2 */}
      <div className="items block md:inline-block relative bg-[#333] shadow-md w-full md:w-[60%] h-[80%] md:h-full rounded-none md:rounded-[10px] my-5 md:mr-10 opacity-50 md:opacity-100">
        <div className="projectOrder flex absolute top-5 left-5 w-[50px] h-[50px] md:w-[70px] md:h-[70px] rounded-full bg-[#4a5fc1] text-white p-auto z-10">
          <span className="m-auto font-bold text-2xl">2</span>
        </div>
        <Image
          className="GGMMPL_image1 hidden md:inline-block rounded-[10px]"
          src="/images/tropical-foliage-background_53876-91352.jpg"
          alt="Project 2"
          width={800}
          height={600}
          style={{ width: '100%', height: 'auto' }}
        />
        <Image
          className="GGMMPL_image2 block md:hidden rounded-[10px]"
          src="/images/GGMMPL_mobile.png"
          alt="Project 2 Mobile"
          width={400}
          height={800}
          style={{ width: '100%', height: '100%' }}
        />
        <div className="overlay absolute bottom-0 left-0 h-[10%] w-full rounded-[10px] text-white p-2.5 transition-all duration-500"></div>
        <div className="itemContent absolute hidden">
          <div className="text-white whitespace-normal text-center w-1/2 md:w-1/2 m-auto">
            A great looking website for GoyalGlobalMetalMart showcasing all
            of their products along with a metal calculator that calculates
            weight of selected product in real time as user inputs the
            required length.
          </div>
          <a
            href="https://www.goyalglobalmetalmart.com"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline text-white"
          >
            <button className="block mx-auto my-2.5 w-[150px] font-bold p-2.5 bg-[#4a5fc1] border-none rounded-[10px]">
              Visit site..
            </button>
          </a>
        </div>
      </div>

      {/* Project 3 */}
      <div className="items block md:inline-block relative bg-[#333] shadow-md w-full md:w-[60%] h-[80%] md:h-full rounded-none md:rounded-[10px] my-5 md:mr-10 opacity-50 md:opacity-100">
        <div className="projectOrder flex absolute top-5 left-5 w-[50px] h-[50px] md:w-[70px] md:h-[70px] rounded-full bg-[#4a5fc1] text-white p-auto z-10">
          <span className="m-auto font-bold text-2xl">3</span>
        </div>
        <Image
          className="GGMMPL_image1 hidden md:inline-block rounded-[10px]"
          src="/images/flat-geometric-background_23-2148958715.jpg"
          alt="Project 3"
          width={800}
          height={600}
          style={{ width: '100%', height: 'auto' }}
        />
        <Image
          className="GGMMPL_image2 block md:hidden rounded-[10px]"
          src="/images/GGMMPL_mobile.png"
          alt="Project 3 Mobile"
          width={400}
          height={800}
          style={{ width: '100%', height: '100%' }}
        />
        <div className="overlay absolute bottom-0 left-0 h-[10%] w-full rounded-[10px] text-white p-2.5 transition-all duration-500"></div>
        <div className="itemContent absolute hidden">
          <div className="text-white whitespace-normal text-center w-1/2 md:w-1/2 m-auto">
            A great looking website for GoyalGlobalMetalMart showcasing all
            of their products along with a metal calculator that calculates
            weight of selected product in real time as user inputs the
            required length.
          </div>
          <a
            href="https://www.goyalglobalmetalmart.com"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline text-white"
          >
            <button className="block mx-auto my-2.5 w-[150px] font-bold p-2.5 bg-[#4a5fc1] border-none rounded-[10px]">
              Visit site..
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
