'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

type Section = 'music' | 'collaborations' | 'contact'

const VALID_SECTIONS: Section[] = ['music', 'collaborations', 'contact']

export default function Home() {
  const [activeSection, setActiveSection] = useState<Section>('music')
  const [collabsLoaded, setCollabsLoaded] = useState(false)

  useEffect(() => {
    const hash = window.location.hash.slice(1) as Section
    if (VALID_SECTIONS.includes(hash)) {
      setActiveSection(hash)
      if (hash === 'collaborations') setCollabsLoaded(true)
    }
  }, [])

  function handleNavClick(section: Section) {
    setActiveSection(section)
    if (section === 'collaborations') setCollabsLoaded(true)
    window.history.pushState(null, '', `#${section}`)
  }

  return (
    <>
      <header>
        <nav>
          <div className="logo">Conor Kenahan</div>
          <ul className="nav-links">
            <li>
              <button onClick={() => handleNavClick('music')}>Music</button>
            </li>
            <li>
              <button onClick={() => handleNavClick('collaborations')}>
                Collaborations
              </button>
            </li>
            <li>
              <a href="https://worldecho.live/" target="_blank" rel="noopener noreferrer">
                Radio
              </a>
            </li>
            <li>
              <button onClick={() => handleNavClick('contact')}>Contact</button>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section className={`section${activeSection === 'music' ? ' active' : ''}`}>
          <h1 className="page-title">Music</h1>
          <div className="albums-grid">
            <iframe
              style={{ border: 0 }}
              src="https://bandcamp.com/EmbeddedPlayer/album=2060093600/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/"
            >
              <a href="https://conorkenahan.bandcamp.com/album/water-for-beginners">
                Water: For Beginners by Conor Kenahan
              </a>
            </iframe>
            <iframe
              style={{ border: 0 }}
              src="https://bandcamp.com/EmbeddedPlayer/track=4275193467/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/"
            >
              <a href="https://conorkenahan.bandcamp.com/track/bodyguard">
                Bodyguard by Conor Kenahan
              </a>
            </iframe>
            <iframe
              style={{ border: 0 }}
              src="https://bandcamp.com/EmbeddedPlayer/album=1116782996/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/"
            >
              <a href="https://conorkenahan.bandcamp.com/album/this-living-act">
                This Living Act by Conor Kenahan
              </a>
            </iframe>
            <iframe
              style={{ border: 0 }}
              src="https://bandcamp.com/EmbeddedPlayer/album=2059630046/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/"
            >
              <a href="https://conorkenahan.bandcamp.com/album/reverie">
                Reverie by Conor Kenahan
              </a>
            </iframe>
          </div>
        </section>

        <section className={`section${activeSection === 'collaborations' ? ' active' : ''}`}>
          <h1 className="page-title">Collaborations</h1>
          <div className="albums-grid">
            <iframe
              style={{ border: 0 }}
              src={
                collabsLoaded
                  ? 'https://bandcamp.com/EmbeddedPlayer/album=1284135407/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/'
                  : undefined
              }
            >
              <a href="https://starlaonline.bandcamp.com/album/amphora">
                Amphora by Starla Online
              </a>
            </iframe>
            <iframe
              style={{ border: 0 }}
              src={
                collabsLoaded
                  ? 'https://bandcamp.com/EmbeddedPlayer/track=2425077186/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/'
                  : undefined
              }
            >
              <a href="https://neuro---fuzzy.bandcamp.com/track/h-mar">
                Hämar by Neuro Fuzzy
              </a>
            </iframe>
            <iframe
              style={{ border: 0 }}
              src={
                collabsLoaded
                  ? 'https://bandcamp.com/EmbeddedPlayer/album=2589116798/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/'
                  : undefined
              }
            >
              <a href="https://jseger.com/album/age-cowboy-meets-ok-trill-boy">
                Age Cowboy meets OK Trill Boy by J Seger
              </a>
            </iframe>
            <iframe
              style={{ border: 0 }}
              src={
                collabsLoaded
                  ? 'https://bandcamp.com/EmbeddedPlayer/album=3218423060/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/'
                  : undefined
              }
            >
              <a href="https://jseger.com/album/will-i-only-harvest-some">
                Will I Only Harvest Some by Justin Baker &amp; J Seger
              </a>
            </iframe>
          </div>
        </section>

        <section className={`section${activeSection === 'contact' ? ' active' : ''}`}>
          <h1 className="page-title">Contact</h1>
          <div className="contact-section">
            <div className="contact-image">
              <Image
                src="/images/conor.JPG"
                alt="Conor Kenahan"
                width={450}
                height={600}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div className="contact-links">
              <p>Musician and producer located in Brooklyn, NY.</p>
              <a href="mailto:conorkenahan@gmail.com">Email</a>
              <a href="https://conorkenahan.bandcamp.com/" target="_blank" rel="noopener noreferrer">
                Bandcamp
              </a>
              <a href="https://instagram.com/conmaniac" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
