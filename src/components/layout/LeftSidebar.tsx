'use client';

import Image from 'next/image';

export default function LeftSidebar() {
  return (
    <div className="leftBar absolute bg-white w-20 left-0 top-20 h-[calc(100vh-80px)] hidden md:block">
      <div className="leftBar-share-container flex flex-col w-full h-[200px] bg-[#333]">
        <div className="iconContainer m-auto">
          <Image
            src="/images/instagram.svg"
            alt="Instagram"
            width={50}
            height={50}
            className="block mx-auto my-5"
          />
          <Image
            src="/images/whatsapp.svg"
            alt="WhatsApp"
            width={50}
            height={50}
            className="block mx-auto my-5"
          />
        </div>
      </div>
      <div className="leftBar-page-border-design m-auto h-[calc(100%-200px)] w-[3px] bg-[#c4c4c4]"></div>
    </div>
  );
}
