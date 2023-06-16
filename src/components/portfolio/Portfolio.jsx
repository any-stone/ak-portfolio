import React from 'react'
import './portfolio.css'
import PIC1 from '../../assets/jb.png'
import PIC2 from '../../assets/biteBuddy.png'
import PIC3 from '../../assets/funventory.png'
import PIC4 from '../../assets/uglyTetris.png'

const data = [
  {
    id: 1,
    image: PIC1,
    title: 'Joybox',
    github: 'https://github.com/any-stone/joy-box-front-end',
    demo: 'https://joybox-app.netlify.app/'
  },
  {
    id: 2,
    image: PIC2,
    title: 'BiteBuddy',
    github: 'https://github.com/Nswooten/bite-buddy-front-end',
    demo: 'https://bitebuddyapp.netlify.app/'
  },
  {
    id: 3,
    image: PIC3,
    title: 'FUNventory app',
    github: 'https://github.com/any-stone/funventory-app',
    demo: 'https://funventory-app.fly.dev/'
  },
  {
    id: 4,
    image: PIC4,
    title: 'Ugly Tetris',
    github: 'https://github.com/any-stone/Shrektris',
    demo: 'https://shrektris.netlify.app/'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>GitHub</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>LiveDemo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio