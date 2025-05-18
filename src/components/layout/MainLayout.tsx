'use client';

import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import Menu from './Menu';
import CustomCursor from '../ui/CustomCursor';

interface MainLayoutProps {
  children: ReactNode;
  pageTitle: string;
}

export default function MainLayout({ children, pageTitle }: MainLayoutProps) {
  return (
    <>
      <CustomCursor />
      <div className="container">
        <div className="clouds-container">
          <img src="/images/cloud1.svg" alt="Cloud" className="cloud cloud-1" />
          <img src="/images/cloud2.svg" alt="Cloud" className="cloud cloud-2" />
          <img src="/images/cloud3.svg" alt="Cloud" className="cloud cloud-3" />
          <img src="/images/cloud4.svg" alt="Cloud" className="cloud cloud-4" />
        </div>

        <Header pageTitle={pageTitle} />
        <LeftSidebar />
        <RightSidebar />
        <Menu />

        <div className="main">
          <div
            style={{
              position: 'absolute',
              bottom: '90px',
              right: '150px',
              width: '80px',
              height: '80px',
            }}
          >
            <svg width="80" height="80" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <g fill="#4a5fc1">
                <path d="M34.1,77.1c-0.8,0-1.6-0.3-2.2-0.9L10.3,54.6c-1.2-1.2-1.2-3.1,0-4.3l21.6-21.6c1.2-1.2,3.1-1.2,4.3,0
                  c1.2,1.2,1.2,3.1,0,4.3L17.1,52.5l19.2,19.2c1.2,1.2,1.2,3.1,0,4.3C35.7,76.8,34.9,77.1,34.1,77.1z"/>
                <path d="M65.9,77.1c-0.8,0-1.6-0.3-2.2-0.9c-1.2-1.2-1.2-3.1,0-4.3l19.2-19.2L63.7,33.4c-1.2-1.2-1.2-3.1,0-4.3
                  c1.2-1.2,3.1-1.2,4.3,0l21.6,21.6c1.2,1.2,1.2,3.1,0,4.3L68.1,76.2C67.5,76.8,66.7,77.1,65.9,77.1z"/>
              </g>
            </svg>
          </div>
          {children}
        </div>

        <Footer />
      </div>
    </>
  );
}
