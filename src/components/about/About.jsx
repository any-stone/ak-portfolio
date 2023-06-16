import React from 'react'
import './about.css'
import ME from '../../assets/me2.jpg'
import { BsCodeSlash } from 'react-icons/bs'
import { MdComputer } from 'react-icons/md'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <BsCodeSlash className='about__icon' />
              <h5>Development Experience</h5>
              <small>1+ Years</small>
            </article>
            <article className='about__card'>
              <MdComputer className='about__icon' />
              <h5>Technical experience</h5>
              <small>3+ years</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>6+ Completed</small>
            </article>
          </div>

          <p>
            Brewing up a storm in the tech world, I'm a Fullstack Developer with a rich blend of experience from HR to Tech Support, now crafting code like a barista crafts coffee. When not coding, find me by the ocean – my muse, leveling up in video games, or as a coffee connoisseur in pursuit of the perfect blend. With a background as diverse as coffee beans, I’m all set to serve innovation with a dash of creativity - let’s create something brew-tiful together!
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About