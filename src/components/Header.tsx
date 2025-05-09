'use client';

import Image from 'next/image';

export default function Header() {
  const menuToggle = () => {
    const menu = document.querySelector('.menu');
    const menuCloseBtn = document.querySelector('.menuCloseBtnCont');

    menu?.classList.toggle('menuOpen');
    menuCloseBtn?.classList.toggle('menuCloseBtnContActive');
  };

  return (
    <div className="header">
      <div className="page-subtitle-container">
        <div className="page-subtitle">
          <b className="pageTitle">HOME</b>
        </div>
      </div>
      <div className="pageBorderDesignTop"></div>
      <div className="header-contacts-container">
        <div>
          <span>01. CALL </span>
          <a href="tel:+919617195172">+91 9617195172</a>
        </div>
        <div>
          <span>02. WRITE </span>
          <a href="mailto:manishchandra012@gmail.com">
            manishchandra012@gmail.com
          </a>
        </div>
      </div>
      <div className="header-menu-container" onClick={menuToggle}>
        <Image
          src="/images/menu.svg"
          alt="Menu"
          width={50}
          height={50}
          style={{ margin: 'auto', width: '50px' }}
        />
      </div>
      <div className="header-image-container">
        <Image
          src="/images/profile.svg"
          alt="Profile"
          width={50}
          height={50}
          style={{ margin: 'auto', width: '50px', borderRadius: '100%' }}
        />
      </div>
    </div>
  );
}
