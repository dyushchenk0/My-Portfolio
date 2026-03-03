'use client'
import {useState, useEffect} from "react";
import Link from "next/link";
import Image from "next/image";

import Hero from "./Hero";
import CardsSection from "./CardsSection";

import AboutPreview from "../../../public/images/about-preview.jpg";

export default function Main() {
  return (
    <main>
      <Hero />

      <section className="about">
        <div className="about__inner container">
          <div className="about__content">
            <div className="about__content-top">
              <div className="about-top__title">
                Building Meaningful
                Digital Experiences
              </div>
              <div className="about__desc">
                I’m a creative Frontend Developer passionate about building modern, responsive, and user-focused web experiences.
                What started as a love for design evolved into a deep curiosity about how the web works - blending logic and creativity to transform ideas into functional, engaging products.
              </div>
              <div className="about__desc">Outside of coding, I enjoy exploring new technologies, refining my projects, and finding smarter ways to make the web faster and more engaging.
                I strongly believe in continuous learning and pushing myself to grow both technically and creatively.
              </div>
            </div>
            <div className="about__content-bottom">
              <div className="about__title h5">What Drives Me</div>
              <ul className="about__list">
                <li className="about__list-item">
                  <span className="icon icon--services"><p className="about__item-title">Technologies</p></span>
                  <p className="about__list-item-text">HTML,CSS/SCSS/TailWind</p>
                  <p className="about__list-item-text">JavaScript, TypeScript, React, Node.js</p>
                  <p className="about__list-item-text">Redux, Zustand, Jest</p>
                </li>
                <li className="about__list-item">
                  <span className="icon icon--education"><p className="about__item-title">Education</p></span>
                  <p className="about__list-item-text">Kharkiv Computer Technical College</p>
                </li>
                <li className="about__list-item">
                  <span className="icon icon--projects"><p className="about__item-title">Projects</p></span>
                  <p className="about__list-item-text">Build more then 5 projects</p>
                </li>
              </ul>
            </div>

          </div>
          <div className="about__preview">
                      </div>
        </div>
      </section>

      <CardsSection />
    </main>
  )
}