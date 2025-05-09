'use client';

import Image from 'next/image';

export default function LeftSidebar() {
  return (
    <div className="leftBar">
      <div className="leftBar-share-container">
        <div className="iconContainer">
          <Image
            src="/images/instagram.svg"
            alt="Instagram"
            width={50}
            height={50}
            style={{ width: '50px' }}
          />
          <Image
            src="/images/whatsapp.svg"
            alt="WhatsApp"
            width={50}
            height={50}
            style={{ width: '50px' }}
          />
        </div>
      </div>
      <div className="leftBar-page-border-design"></div>
    </div>
  );
}
