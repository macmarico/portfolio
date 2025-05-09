'use client';

import Image from 'next/image';

export default function ProjectsContent() {
  return (
    <div className="projectsContainer">
      {/* Project 1 */}
      <div className="items">
        <div className="projectOrder">
          <span style={{ margin: 'auto', fontWeight: 'bolder', fontSize: '1.5rem' }}>1</span>
        </div>
        <Image
          className="GGMMPL_image1"
          src="/images/colorful-palm-silhouettes-background_23-2148541792.jpg"
          alt="Project 1"
          width={800}
          height={600}
          style={{ borderRadius: '10px', width: '100%' }}
        />

        <Image
          className="GGMMPL_image2"
          src="/images/GGMMPL_mobile.png"
          alt="Project 1 Mobile"
          width={400}
          height={800}
          style={{ borderRadius: '10px', width: '100%' }}
        />
        <div className="overlay"></div>

        <div className="itemContent">
          <div
            style={{
              color: 'white',
              whiteSpace: 'normal',
              textAlign: 'center',
              width: '50%',
              margin: 'auto',
            }}
          >
            A great looking website for GoyalGlobalMetalMart showcasing all
            of their products along with a metal calculator that calculates
            weight of selected product in real time as user inputs the
            required length.
          </div>
          <button
            style={{
              display: 'block',
              margin: '10px auto',
              width: '150px',
              fontWeight: 'bold',
              padding: '10px',
              backgroundColor: '#4a5fc1',
              border: 'none',
              borderRadius: '10px',
            }}
          >
            <a
              style={{ textDecoration: 'none', color: 'white' }}
              href="https://www.goyalglobalmetalmart.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit site..
            </a>
          </button>
        </div>
      </div>

      {/* Project 2 */}
      <div className="items">
        <div className="projectOrder">
          <span style={{ margin: 'auto', fontWeight: 'bolder', fontSize: '1.5rem' }}>2</span>
        </div>
        <Image
          className="GGMMPL_image1"
          src="/images/tropical-foliage-background_53876-91352.jpg"
          alt="Project 2"
          width={800}
          height={600}
          style={{ borderRadius: '10px', width: '100%' }}
        />

        <Image
          className="GGMMPL_image2"
          src="/images/GGMMPL_mobile.png"
          alt="Project 2 Mobile"
          width={400}
          height={800}
          style={{ borderRadius: '10px', width: '100%' }}
        />
        <div className="overlay"></div>

        <div className="itemContent">
          <div
            style={{
              color: 'white',
              whiteSpace: 'normal',
              textAlign: 'center',
              width: '50%',
              margin: 'auto',
            }}
          >
            A great looking website for GoyalGlobalMetalMart showcasing all
            of their products along with a metal calculator that calculates
            weight of selected product in real time as user inputs the
            required length.
          </div>
          <button
            style={{
              display: 'block',
              margin: '10px auto',
              width: '150px',
              fontWeight: 'bold',
              padding: '10px',
              backgroundColor: '#4a5fc1',
              border: 'none',
              borderRadius: '10px',
            }}
          >
            <a
              style={{ textDecoration: 'none', color: 'white' }}
              href="https://www.goyalglobalmetalmart.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit site..
            </a>
          </button>
        </div>
      </div>

      {/* Project 3 */}
      <div className="items">
        <div className="projectOrder">
          <span style={{ margin: 'auto', fontWeight: 'bolder', fontSize: '1.5rem' }}>3</span>
        </div>
        <Image
          className="GGMMPL_image1"
          src="/images/flat-geometric-background_23-2148958715.jpg"
          alt="Project 3"
          width={800}
          height={600}
          style={{ borderRadius: '10px', width: '100%' }}
        />

        <Image
          className="GGMMPL_image2"
          src="/images/GGMMPL_mobile.png"
          alt="Project 3 Mobile"
          width={400}
          height={800}
          style={{ borderRadius: '10px', width: '100%' }}
        />
        <div className="overlay"></div>

        <div className="itemContent">
          <div
            style={{
              color: 'white',
              whiteSpace: 'normal',
              textAlign: 'center',
              width: '50%',
              margin: 'auto',
            }}
          >
            A great looking website for GoyalGlobalMetalMart showcasing all
            of their products along with a metal calculator that calculates
            weight of selected product in real time as user inputs the
            required length.
          </div>
          <button
            style={{
              display: 'block',
              margin: '10px auto',
              width: '150px',
              fontWeight: 'bold',
              padding: '10px',
              backgroundColor: '#4a5fc1',
              border: 'none',
              borderRadius: '10px',
            }}
          >
            <a
              style={{ textDecoration: 'none', color: 'white' }}
              href="https://www.goyalglobalmetalmart.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit site..
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
