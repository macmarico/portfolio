'use client';

import { useEffect } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import Link from 'next/link';

export default function Home() {
  useEffect(() => {
    // Add typewriter animation
    const typewriterElement = document.getElementById('typewriter');
    const phrases = [
      'ibitcode Software Solutions',
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
  }, []);

  return (
    <MainLayout pageTitle="HOME">
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
          From web applications to mobile solutions, we deliver high-quality,
          scalable software that helps your business grow. Let's build something amazing together.
        </div>
        <div>
          <Link href="/services">
            <button>
              <b>VIEW SERVICES</b>
            </button>
          </Link>
        </div>
      </div>
    </MainLayout>
  );
}
