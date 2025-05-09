'use client';

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Add cursor effect from original site
    const cursor = document.querySelector('.cursor');
    if (cursor) {
      document.addEventListener('mousemove', (e) => {
        cursor.setAttribute(
          'style',
          `transform: translate(${e.pageX - 25}px, ${e.pageY - 25}px)`
        );
      });
    }

    // Add menu toggle functionality
    const menuToggle = () => {
      const menu = document.querySelector('.menu');
      const menuCloseBtn = document.querySelector('.menuCloseBtnCont');

      menu?.classList.toggle('menuOpen');
      menuCloseBtn?.classList.toggle('menuCloseBtnContActive');
    };

    const menuBtn = document.querySelector('.header-menu-container');
    const menuCloseBtn = document.querySelector('.menuCloseBtnCont');

    menuBtn?.addEventListener('click', menuToggle);
    menuCloseBtn?.addEventListener('click', menuToggle);

    // Add page navigation functionality
    const openHomePage = () => {
      const pageTitle = document.querySelector('.pageTitle');
      const mainContainer = document.querySelector('.mainContainer');
      const projectsContainer = document.querySelector('.projectsContainer');
      const contactContainer = document.querySelector('.contactContainer');

      if (pageTitle) pageTitle.innerHTML = 'SOFTWARE SOLUTIONS';
      if (mainContainer) (mainContainer as HTMLElement).style.display = 'block';
      if (projectsContainer) (projectsContainer as HTMLElement).style.display = 'none';
      if (contactContainer) (contactContainer as HTMLElement).style.display = 'none';

      menuToggle();
    };

    const openProjectPage = () => {
      const pageTitle = document.querySelector('.pageTitle');
      const mainContainer = document.querySelector('.mainContainer');
      const projectsContainer = document.querySelector('.projectsContainer');
      const contactContainer = document.querySelector('.contactContainer');

      if (pageTitle) pageTitle.innerHTML = 'OUR SERVICES';
      if (mainContainer) (mainContainer as HTMLElement).style.display = 'none';
      if (projectsContainer) (projectsContainer as HTMLElement).style.display = 'block';
      if (contactContainer) (contactContainer as HTMLElement).style.display = 'none';

      menuToggle();
    };

    const openContactPage = () => {
      const pageTitle = document.querySelector('.pageTitle');
      const mainContainer = document.querySelector('.mainContainer');
      const projectsContainer = document.querySelector('.projectsContainer');
      const contactContainer = document.querySelector('.contactContainer');

      if (pageTitle) pageTitle.innerHTML = 'CONTACT ME';
      if (mainContainer) (mainContainer as HTMLElement).style.display = 'none';
      if (projectsContainer) (projectsContainer as HTMLElement).style.display = 'none';
      if (contactContainer) (contactContainer as HTMLElement).style.display = 'block';

      menuToggle();
    };

    const homeMenuItem = document.querySelector('.menu div:nth-child(1)');
    const projectsMenuItem = document.querySelector('.menu div:nth-child(2)');
    const contactMenuItem = document.querySelector('.menu div:nth-child(4)');
    const viewProjectsBtn = document.querySelector('.mainContainer button');

    homeMenuItem?.addEventListener('click', openHomePage);
    projectsMenuItem?.addEventListener('click', openProjectPage);
    contactMenuItem?.addEventListener('click', openContactPage);
    viewProjectsBtn?.addEventListener('click', openProjectPage);

    // Update button text
    if (viewProjectsBtn) {
      const buttonText = viewProjectsBtn.querySelector('b');
      if (buttonText) buttonText.textContent = 'VIEW SERVICES';
    }

    // Add slider functionality for projects
    const slider = document.querySelector('.projectsContainer');
    if (slider) {
      let isDown = false;
      let startX: number;
      let scrollLeft: number;

      slider.addEventListener('mousedown', (e: any) => {
        isDown = true;
        startX = e.pageX - slider.getBoundingClientRect().left;
        scrollLeft = (slider as HTMLElement).scrollLeft;
      });

      slider.addEventListener('mouseleave', () => {
        isDown = false;
      });

      slider.addEventListener('mouseup', () => {
        isDown = false;
      });

      slider.addEventListener('mousemove', (e: any) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.getBoundingClientRect().left;
        const walk = x - startX;
        (slider as HTMLElement).scrollLeft = scrollLeft - walk;
      });
    }

    // Add typewriter animation
    const typewriterElement = document.getElementById('typewriter');
    const phrases = [
      'Custom Software Solutions',
      'Web Application Development',
      'Mobile App Development'
    ];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function typeWriter() {
      const currentPhrase = phrases[phraseIndex];

      if (isDeleting) {
        // Deleting text
        if (typewriterElement) {
          typewriterElement.textContent = currentPhrase.substring(0, charIndex - 1);
        }
        charIndex--;
        typingSpeed = 50; // Faster when deleting
      } else {
        // Typing text
        if (typewriterElement) {
          typewriterElement.textContent = currentPhrase.substring(0, charIndex + 1);
        }
        charIndex++;
        typingSpeed = 100; // Normal typing speed
      }

      // If word is complete, start deleting after a pause
      if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        typingSpeed = 1000; // Pause at the end of the word
      }
      // If deletion is complete, move to next word
      else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typingSpeed = 500; // Pause before starting new word
      }

      setTimeout(typeWriter, typingSpeed);
    }

    // Start the typewriter effect
    typeWriter();

    // Cleanup event listeners
    return () => {
      menuBtn?.removeEventListener('click', menuToggle);
      menuCloseBtn?.removeEventListener('click', menuToggle);
      homeMenuItem?.removeEventListener('click', openHomePage);
      projectsMenuItem?.removeEventListener('click', openProjectPage);
      contactMenuItem?.removeEventListener('click', openContactPage);
      viewProjectsBtn?.removeEventListener('click', openProjectPage);
    };
  }, []);

  return (
    <>
      <div className="cursor"></div>
      <div className="container">
        <div className="header">
          <div className="page-subtitle-container">
            <div className="page-subtitle">
              <b className="pageTitle">SOFTWARE SOLUTIONS</b>
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
          <div className="header-menu-container">
            <img src="/images/menu.svg" style={{ margin: 'auto', width: '50px' }} alt="Menu" />
          </div>
          <div className="header-image-container">
            <img
              src="/images/img.svg"
              style={{ margin: 'auto', width: '50px', borderRadius: '100%' }}
              alt="Profile"
            />
          </div>
        </div>

        <div className="leftBar">
          <div className="leftBar-share-container">
            <div className="iconContainer">
              <img src="/images/instagram.svg" style={{ width: '50px' }} alt="Instagram" />
              <img src="/images/whatsapp.svg" style={{ width: '50px' }} alt="WhatsApp" />
            </div>
          </div>
          <div className="leftBar-page-border-design"></div>
        </div>

        <div className="rightBar">
          <div className="rightBar-page-border-design"></div>
          <div className="rightBar-share-container">
            <div><b>+</b></div>
            <div><b>SHARE</b></div>
          </div>
        </div>

        <div className="main">
          <div
            style={{
              position: 'absolute',
              bottom: '90px',
              right: '150px',
              fontSize: '4rem',
              fontWeight: 'bold',
              color: '#4a5fc1',
            }}
          >
            {'< >'}
          </div>

          <div className="mainContainer">
            <div>
              <span className="hero">
                <b>
                  <span style={{ fontWeight: 'bolder' }}>
                    <span id="typewriter"></span>
                  </span> <br />
              
                </b>
              </span>
            </div>
            <div className="heroDescription">
              Professional software development services tailored to your business.
              From web applications to mobile solutions, I deliver high-quality,
              scalable software that helps your business grow. Let's build something amazing together.
            </div>
            <div>
              <button>
                <b>VIEW SERVICES</b>
              </button>
            </div>
          </div>
        </div>

        <div className="footer-container">
          <div className="footer-page-border-design">
            <div
              style={{
                position: 'absolute',
                bottom: '10px',
                left: '30px',
                fontSize: '8rem',
                color: '#4a5fc1',
              }}
            >
              .
            </div>
          </div>
          <div className="footer">
            <div>© SOFTWARE SOLUTIONS 2024 / ALL RIGHTS RESERVED.</div>
          </div>
        </div>
      </div>
    </>
  );
}
