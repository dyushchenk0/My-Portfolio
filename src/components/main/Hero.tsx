'use client'
import Image from "next/image";
import {Typewriter} from "react-simple-typewriter";

import DeveloperImg from "../../../public/images/photo.png"

export default function Hero() {
  return (
    <section
      className="hero"
      aria-labelledby="hero__title"
    >
      <div className="hero__main container">
        <div className="hero__body">
          <p className="hero__subtitle">
            <span className="green">.</span> Available for full-time work
          </p>
          <h1
            className="hero__title"
            id="hero__title"
          >
            Hi, I'm Daniel
          </h1>
          <div className="hero__jobs">
            <Typewriter
              words={[
                "Frontend Developer",
                "Web Developer",
                "React Developer",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </div>

          <div className="hero__description">
            <p>I create beutiful, function, and user-centerd digital experiences. With
              1+ years of experiences in web Development, I bring ideas to life through
              clean code and thoughtful design
            </p>
          </div>
          <div className="hero__meta">
              <span className="hero__meta-item icon icon--location">
                Based in Ukraine
              </span>

            <span className="hero__meta-item icon icon--suit-case">
                Available Now
              </span>
          </div>

          <div className="hero__actions">
            <button className="button btn--primary">
              <span className="icon icon--arrow-right">Hire Me</span>
            </button>

            <button className="button btn--outline">
              <span className="icon icon--download">Download CV</span>
            </button>
          </div>

          <div className="hero__socials">
            <p className="hero__follow">Follow me:</p>
            <a
              className="hero__follow-item"
              href="https://github.com/dyushchenk0"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              aria-label="GitHub"
            >
              <span className="icon icon--github"></span>
            </a>
            <a
              className="hero__follow-item"
              href="https://www.linkedin.com/in/danile-yushchenko-1b20043a1/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              aria-label="LinkedIn"
            >
              <span className="icon icon--linkedin"></span>
            </a>
            <a
              className="hero__follow-item"
              href="https://t.me/danillALdev"
              target="_blank"
              rel="noopener noreferrer"
              title="Telegram"
              aria-label="Telegram"
            >
              <span className="icon icon--telegram"></span>
            </a>
          </div>

        </div>
        <div className="hero__preview">
          <Image
            src={DeveloperImg}
            width={520}
            height={520}
            alt="Developer photo"
            priority
          ></Image>
        </div>
      </div>
    </section>
  )
}