import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>ANNIE KUXA</a>

      <ul className='permalinks'>
        <li> <a href="#">Home</a></li>
        <li> <a href="#about">About</a></li>
        <li> <a href="#experience">Experience</a></li>
        <li> <a href="#portfolio">Portfolio</a></li>
        <li> <a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/annkuksa/"><BsLinkedin/></a>
        <a href="https://github.com/any-stone"><FaGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Annie Kuxa. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer