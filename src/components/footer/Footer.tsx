'use client'

import Link from "next/link";
import SendForm from "@/components/footer/SendForm";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__body">
          <div className="footer__title">
            <h3>Get in Touch with Me</h3>
          </div>
          <div className="footer__menu">
            <div className="footer__menu-column">
              <div className="footer__menu-main-text">
                I'm always open to discuss exciting projects and new
                opportunities, Let's collaborate!
              </div>
              <div className="footer__menu-main-contacts ">
                <div
                  className="footer__menu-main-link"
                >
                  <span className="icon icon--letter-svg">dyushchenko0@gmail.com</span>
                </div>
                <div
                  className="footer__menu-main-link"
                >
                  <span className="icon icon--phone">+38-(098)-87-18-756</span>
                </div>
                <div
                  className="footer__menu-main-link"
                >
                  <span className="icon icon--location">Ukraine, Kharkiv</span>
                </div>
              </div>
              <div className="footer__menu-main-contacts is-horizontal">
                <a
                  className="footer__menu-main-contacts-link"
                  href="https://github.com/dyushchenk0"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub"
                  aria-label="GitHub"
                >
                  <span className="icon icon--github"></span>
                </a>
                <a
                  className="footer__menu-main-contacts-link"
                  href="https://www.linkedin.com/in/danile-yushchenko-1b20043a1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                  aria-label="LinkedIn"
                >
                  <span className="icon icon--linkedin"></span>
                </a>
                <a
                  className="footer__menu-main-contacts-link"
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
            <SendForm />
          </div>
        </div>
      </div>
    </footer>
  )
}