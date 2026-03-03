'use client'

import Link from "next/link";

import {useHeader} from "@/hooks/useHeader";

export default function NavItem({isScrolled}) {
  const {isActive, toggle} = useHeader();

  return (
    <div className="header__body-inner container">
      <Link
        className="header__logo logo"
        href="/"
        title="Home"
        aria-label="Home"
      >
        Daniel
      </Link>
      <div
        className={`header__overlay ${isActive ? 'is-active' : ''}`}
      >
        <nav
          className={`header__menu ${isActive ? 'is-active' : ''}`}
        >
          <ul className="header__menu-list-top">
            <li className="header__menu-item">
              <Link
                className="header__menu-link is-active"
                href='/'
                onClick={toggle}
              >
                <span className="icon icon--home">Home</span>

              </Link>
            </li>
            <li className="header__menu-item">
              <Link
                className="header__menu-link"
                href='/'
                onClick={toggle}
              >
                <span className="icon icon--about">About</span>
              </Link>
            </li>
            <li className="header__menu-item">
              <Link
                className="header__menu-link"
                href='/'
                onClick={toggle}
              >
                <span className="icon icon--projects">Projects</span>
              </Link>
            </li>
            <li className="header__menu-item">
              <Link
                className="header__menu-link"
                href='/'
                onClick={toggle}
              >
                <span className="icon icon--services">Servises</span>
              </Link>
            </li>
          </ul>
        </nav>
        <Link
          className="header__contact-us-link button button--accent"
          href="/"
        >
          Contact
        </Link>
      </div>

      <button
        className={`header__burger-button burger-button visible-mobile ${
          isActive ? 'is-active' : ''
        }`}
        type="button"
        aria-label="Open menu"
        title="Open menu"
        onClick={toggle}
      >
        <span className="burger-button__line"></span>
        <span className="burger-button__line"></span>
        <span className="burger-button__line"></span>
      </button>
    </div>
  )
}