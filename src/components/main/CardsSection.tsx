'use client'
import {useState, useEffect} from "react";
import Link from "next/link";
import Image from "next/image";
import {Typewriter} from "react-simple-typewriter";

import Hero from "./Hero";

import PortfolioPreview from "../../../public/images/portfolio-preview.jpg";
import DashbourdUI from "../../../public/images/dashbourd_ui.jpg";
import ModivoClone from "../../../public/images/modivo-clone.jpg"


export default function Main() {
  return (
    <section className="section">
      <header className="section__header">
        <div className="section__header-inner container">
          <div className="section__header-info">
            <h2
              className="section__title"
              id="featured-title"
            >Featured Work
            </h2>
            <p className="section__subtitle tag">A showcase of my recent projects demonstrating expertise in frontend development, modern frameworks, and creative problem-solving
            </p>
          </div>
        </div>
      </header>
      <div className="section__body container">
        <div className="card__body">
          <div className="card__body card__grid--2--cols">
            <ul className="list tile">
              <li className="list__item">
                <div className="card container">
                  <div className="card__preview">
                    <div className="card__preview-main">
                      <Image
                        className="card__preview-image"
                        src={ModivoClone}
                        alt="Portfolio preview"
                      ></Image>
                    </div>
                    <div className="card__preview-info">
                      <h4 className="card__preview-title h5">E-Commerse Website</h4>
                      <div className="card__preview-description">
                        <p>Full-featured e-commerce platform with product filtering, cart logic, and responsive UI. Includes dynamic product pages and state management.
                        </p>
                      </div>
                      <div className="card__preview-stack">
                        <p>HTML</p>
                        <p>CSS/SCSS</p>
                        <p>JavaScript</p>
                        <p>TypeScript</p>
                        <p>React</p>
                        <p>Redux</p>
                      </div>
                      <div className="card__preview-block">
                        <a
                          className="card__preview-icon"
                          href="https://github.com/dyushchenk0/Modivo-clone"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="GitHub"
                          aria-label="GitHub"
                        >
                          <span className="icon icon--github">GitHub</span>
                        </a>
                        <a
                          className="card__preview-icon"
                          href="/"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Live demo"
                          aria-label="Live demo"
                        >
                          <span className="icon icon--live-demo">Live Demo</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="list__item">
                <div className="card container">
                  <div className="card__preview">
                    <div className="card__preview-main">
                      <Image
                        className="card__preview-image"
                        src={PortfolioPreview}
                        alt="Portfolio preview"
                      ></Image>
                    </div>
                    <div className="card__preview-info">
                      <h4 className="card__preview-title h5">Portfolio Website</h4>
                      <div className="card__preview-description">
                        <p>Personal website built with React and Next.js focusing on performance, SEO optimization, and clean component architecture.
                        </p>
                      </div>
                      <div className="card__preview-stack">
                        <p>HTML</p>
                        <p>CSS/SCSS</p>
                        <p>JavaScript</p>
                        <p>TypeScript</p>
                        <p>React</p>
                        <p>Zustand</p>
                      </div>
                      <div className="card__preview-block">
                        <a
                          className="card__preview-icon"
                          href="https://github.com/dyushchenk0/My-Portfolio"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="GitHub"
                          aria-label="GitHub"
                        >
                          <span className="icon icon--github">GitHub</span>
                        </a>
                        <a
                          className="card__preview-icon"
                          href="/"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Live demo"
                          aria-label="Live demo"
                        >
                          <span className="icon icon--live-demo">Live Demo</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="list__item">
                <div className="card container">
                  <div className="card__preview">
                    <div className="card__preview-main">
                      <Image
                        className="card__preview-image"
                        src={DashbourdUI}
                        alt="Portfolio preview"
                      ></Image>
                    </div>
                    <div className="card__preview-info">
                      <h4 className="card__preview-title h5">Dashbourd for School</h4>
                      <div className="card__preview-description">
                        <p>Personal website built with React and Next.js focusing on performance, SEO optimization, and clean component architecture.
                        </p>
                      </div>
                      <div className="card__preview-stack">
                        <p>HTML</p>
                        <p>CSS/SCSS</p>
                        <p>Tailwind CSS</p>
                        <p>JavaScript</p>
                        <p>TypeScript</p>
                        <p>React</p>
                        <p>Redux</p>
                        <p>Jest</p>
                      </div>
                      <div className="card__preview-block">
                        <a
                          className="card__preview-icon"
                          href="https://github.com/dyushchenk0/next-dashboard-ui"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="GitHub"
                          aria-label="GitHub"
                        >
                          <span className="icon icon--github">GitHub</span>
                        </a>
                        <a
                          className="card__preview-icon"
                          href="/"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Live demo"
                          aria-label="Live demo"
                        >
                          <span className="icon icon--live-demo">Live Demo</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}