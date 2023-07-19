import './styles.css';
import Image from 'next/image';
import logo from '../public/logobeb1.svg';
import profilePic from '../public/beb 1.svg';
import project1 from '../public/Screenshot 2023-07-17 at 7.49.25 PM.png';
import project2 from '../public/second Project.png';

export default function Home() {
  return (
    <div>
      <header className="header">
        <nav className='nav-container'>
          <div className="logo-left">
            <Image src={logo.src} width={100} height={100} alt='logo'/>
          </div>
          <div className='nav-middle'>
            <ul>
              <li className="home"><a href='#home'>Home</a></li>
              <li className="portfolio"><a href='#portfolio'>Portfolio</a></li>
              <li className="about"><a href='#about'>About</a></li>
            </ul>
          </div>
          <div className='nav-right'>
            <button className='contactButton'>Contact</button>
          </div>
        </nav>
      </header>
      <main>
        <div id='home' className='profile-container'>
          <div className='profile'>
            <Image src={profilePic.src} width={300} height={300} className='profilePic' alt='Profile picture' />
            <p>Hi there, I&quot;m Chenxi and I am a self taught software developer!</p>
          </div>
        </div>
        <div id='about' className='aboutPage'>
          <p>
            As a software developer I love the grind of getting better, either in terms of
            updating code enough for prduction in a certain project or learning a new coding language.
          </p>
        </div>
        <div id='portfolio' className='portfolio-container'>
          <div>
            <div className='project'>
              <h3>Random Quote Generator</h3>
              <a className='p1Img' target='_blank' href='https://stunning-praline-dc2ee0.netlify.app/'><Image className='img' src={project1.src} width={900} height={600} alt='Random Quote Img'/></a>
              <p>
                This is the first Project that I worked on, it&quot;s a simple quote generator.
                I implemented an API that has random quotes.
              </p>
            </div>
            <div className='project'>
              <a className='p1Img' target='_blank' href='https://luminous-begonia-d93676.netlify.app/'><Image className='img' src={project2.src} width={900} height={600} alt='calculator app' /></a>
              <p>
                This is another project that i worked on, this is a calculator web app.
              </p>
            </div>
            <div className='project3'></div>
          </div>
        </div>
      </main>
      <footer>
        <p></p>
      </footer>
    </div>
  )
}
