import React from 'react'
import './portfolio.css'
import PIC1 from '../../assets/jb.png'
import PIC2 from '../../assets/biteBuddy.png'
import PIC3 from '../../assets/funventory.png'
import PIC4 from '../../assets/uglyTetris.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={PIC1} alt="Joybox app screenshot" />
          </div>
          <h3>Joybox</h3>
          <a href="https://github.com/any-stone/joy-box-front-end" className='btn' target='_blank'>GitHub</a>
          <a href="https://joybox-app.netlify.app/" className='btn btn-primary' target='_blank'>LiveDemo</a>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={PIC2} alt="BiteBuddy app screenshot" />
          </div>
          <h3>BiteBuddy</h3>
          <a href="https://github.com/Nswooten/bite-buddy-front-end" className='btn' target='_blank'>GitHub</a>
          <a href="https://bitebuddyapp.netlify.app/" className='btn btn-primary' target='_blank'>LiveDemo</a>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={PIC3} alt="FUNventory app screenshot" />
          </div>
          <h3>FUNventory</h3>
          <a href="https://github.com/any-stone/funventory-app" className='btn' target='_blank'>GitHub</a>
          <a href="https://funventory-app.fly.dev/" className='btn btn-primary' target='_blank'>LiveDemo</a>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={PIC4} alt="Ugly Tetris app screenshot" />
          </div>
          <h3>Ugly Tetris</h3>
          <a href="https://github.com/any-stone/Shrektris" className='btn' target='_blank'>GitHub</a>
          <a href="https://shrektris.netlify.app/" className='btn btn-primary' target='_blank'>LiveDemo</a>
        </article>
        
      </div>
    </section>
  )
}

export default Portfolio