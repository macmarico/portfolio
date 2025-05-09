'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface HeaderProps {
  pageTitle: string;
}

export default function Header({ pageTitle }: HeaderProps) {
  const toggleMenu = () => {
    window.dispatchEvent(new CustomEvent('toggleMenu'));
  };

  return (
    <div className="header flex w-full h-20 bg-white">
      <div className="page-subtitle-container flex flex-[0_0_400px] h-full bg-[#4a5fc1]">
        <div className="page-subtitle text-center shadow-md mx-auto w-[150px] p-2.5 bg-white text-[#333]">
          <b className="pageTitle">{pageTitle}</b>
        </div>
      </div>
      <div className="pageBorderDesignTop flex-[0_0_calc(100%-1300px)] m-auto h-[3px] bg-[#c4c4c4]"></div>
      <div className="header-contacts-container hidden md:flex uppercase font-bold flex-[0_0_600px] h-full bg-white text-[#333]">
        <div className="m-auto">
          <span>01. CALL </span>
          <a href="tel:+919617195172" className="text-[#4a5fc1] no-underline">+91 9617195172</a>
        </div>
        <div className="m-auto">
          <span>02. WRITE </span>
          <a href="mailto:manishchandra012@gmail.com" className="text-[#4a5fc1] no-underline">
            manishchandra012@gmail.com
          </a>
        </div>
      </div>
      <div className="header-menu-container flex flex-[0_0_80px] bg-white cursor-pointer" onClick={toggleMenu}>
        <Image
          src="/images/menu.svg"
          alt="Menu"
          width={50}
          height={50}
          className="m-auto"
        />
      </div>
      <div className="header-image-container hidden md:flex flex-[0_0_80px] bg-white cursor-pointer">
        <Image
          src="/images/profile.svg"
          alt="Profile"
          width={50}
          height={50}
          className="m-auto rounded-full"
        />
      </div>
    </div>
  );
}


