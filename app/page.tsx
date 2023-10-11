import './styles.css';
import Image from 'next/image';
import logo from '../public/logo.svg';
import profilePic from '../public/IMG_3329.jpeg';
import project1 from '../public/Screenshot 2023-07-17 at 7.49.25 PM.png';
import project2 from '../public/second Project.png';

export default function Home() {
  return (
    <div className='background'>
      <div className='circle'></div>
      <div className='main-container'>
        <header className="header">
          <nav className='nav-container'>
            <div className="logo-left">
              <Image src={logo.src} width={60} height={62} alt='logo'/>
            </div>
            <div className='nav-middle'>
              <ul>
                <li><a className="projects" href='#home'>Projects</a></li>
                <li><a className="resume" href='#portfolio'>Resume</a></li>
                <li><a className="about" href='#about'>About</a></li>
              </ul>
            </div>
            <div className='nav-right'>
            </div>
          </nav>
        </header>
        <main>
          <div id='home' className='profile-container'>
            <div className='intro'>
              <p className='title'>&#60;Hello&#47;&#62;</p>
              <p className='title-decription'>My name is Chenxi. I&#39;m a <span>&#123;self-taught&#125;</span> software developer based in Toronto, ON</p>
            </div>
          </div>
          <div id='portfolio' className='portfolio-container'>
            <div className='project'>
                <a className='p1Img' target='_blank' href='https://stunning-praline-dc2ee0.netlify.app/'>
                  <h3 className='project-title'>Random Quote Generator</h3>
                  <Image className='img' src={project1.src} width={1152} height={700} alt='Random Quote Img'/>
                  <p className='project-description'>
                    This is the first Project that I worked on, it&quot;s a simple quote generator.
                    I implemented an API that has random quotes.
                  </p>
                </a>
            </div>
            <div className='project'>
              <a className='p1Img' target='_blank' href='https://luminous-begonia-d93676.netlify.app/'>
                <Image className='img' src={project2.src} width={1152} height={700} alt='calculator app' />
                <p className='project-description'>
                  This is another project that i worked on, this is a calculator web app.
                </p>
              </a>
            </div>
            <div className='project3'></div>
          </div>
        </main>
        <footer>
          <p></p>
        </footer>
      </div>
    </div>
  )
}
