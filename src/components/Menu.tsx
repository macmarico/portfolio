'use client';

import { useState } from 'react';

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openHomePage = () => {
    const pageTitle = document.querySelector('.pageTitle');
    const mainContainer = document.querySelector('.mainContainer');
    const projectsContainer = document.querySelector('.projectsContainer');
    const contactContainer = document.querySelector('.contactContainer');

    if (pageTitle) pageTitle.innerHTML = 'HOME';
    if (mainContainer) (mainContainer as HTMLElement).style.display = 'block';
    if (projectsContainer) (projectsContainer as HTMLElement).style.display = 'none';
    if (contactContainer) (contactContainer as HTMLElement).style.display = 'none';
    
    setIsMenuOpen(false);
  };

  const openProjectPage = () => {
    const pageTitle = document.querySelector('.pageTitle');
    const mainContainer = document.querySelector('.mainContainer');
    const projectsContainer = document.querySelector('.projectsContainer');
    const contactContainer = document.querySelector('.contactContainer');

    if (pageTitle) pageTitle.innerHTML = 'PROJECTS';
    if (mainContainer) (mainContainer as HTMLElement).style.display = 'none';
    if (projectsContainer) (projectsContainer as HTMLElement).style.display = 'block';
    if (contactContainer) (contactContainer as HTMLElement).style.display = 'none';
    
    setIsMenuOpen(false);
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
    
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className={`menu ${isMenuOpen ? 'menuOpen' : ''}`}>
        <div style={{ margin: 'auto' }}>
          <div onClick={openHomePage}>HOME</div>
          <div onClick={openProjectPage}>PROJECTS</div>
          <div>ABOUT</div>
          <div onClick={openContactPage}>CONTACT</div>
        </div>
      </div>

      <div 
        className={`menuCloseBtnCont ${isMenuOpen ? 'menuCloseBtnContActive' : ''}`} 
        onClick={menuToggle}
      >
        <span style={{ color: 'white', fontWeight: 'bolder', margin: 'auto' }}>X</span>
      </div>
    </>
  );
}
