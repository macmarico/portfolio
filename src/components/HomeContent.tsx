'use client';

export default function HomeContent() {
  const openProjectPage = () => {
    const pageTitle = document.querySelector('.pageTitle');
    const mainContainer = document.querySelector('.mainContainer');
    const projectsContainer = document.querySelector('.projectsContainer');
    const contactContainer = document.querySelector('.contactContainer');

    if (pageTitle) pageTitle.innerHTML = 'PROJECTS';
    if (mainContainer) (mainContainer as HTMLElement).style.display = 'none';
    if (projectsContainer) (projectsContainer as HTMLElement).style.display = 'block';
    if (contactContainer) (contactContainer as HTMLElement).style.display = 'none';
  };

  return (
    <div className="mainContainer">
      <div className="clouds-container">
        <img src="/images/cloud1.svg" alt="Cloud" className="cloud cloud-1" />
        <img src="/images/cloud2.svg" alt="Cloud" className="cloud cloud-2" />
        <img src="/images/cloud3.svg" alt="Cloud" className="cloud cloud-3" />
        <img src="/images/cloud4.svg" alt="Cloud" className="cloud cloud-4" />
      </div>
      <div>
        <span className="hero">
          <b>
            Hii, I'm <b style={{ fontWeight: 'bolder' }}>manish.</b> <br />
            <span style={{ fontWeight: 'bolder' }}>
              I am a full stack web developer
            </span>
          </b>
        </span>
      </div>
      <div className="heroDescription">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua
      </div>
      <div>
        <button onClick={openProjectPage}>
          <b>VIEW PROJECTS</b>
        </button>
      </div>
    </div>
  );
}
