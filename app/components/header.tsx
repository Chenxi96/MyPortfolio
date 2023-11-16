import React from "react";
import logo from '../../public/logo.svg';
import Menu from '../../public/menu burger.svg';

const header = () => {
    return (
        <header className="header">
          <nav className='nav-container'>
            <div className="logo-left">
              <img src={logo.src} alt='logo'/>
            </div>
            <div className='nav-middle-browser'>
              <ul>
                <li><a className="projects" href='#home'>Projects</a></li>
                <li><a className="resume" href='#portfolio'>Resume</a></li>
                <li><a className="about" href='#about'>About</a></li>
              </ul>
            </div>
            <div className='nav-dropDown-mobile'>
              <img src={Menu.src}  alt='dropdown menu' />
              <div className='dropdown'>
                <ul>
                  <li><a className="projects" href='#home'>Projects</a></li>
                  <li><a className="resume" href='#portfolio'>Resume</a></li>
                  <li><a className="about" href='#about'>About</a></li>
                </ul>
              </div>
            </div>
            <div className='nav-right'>
            </div>
          </nav>
        </header>
    )
}

export default header