import React from 'react'
import './header.css'
import CTA from './CTA'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hey I'm</h5>
        <h1>Annie Kuxa</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
      </div>
    </header>
  )
}

export default Header