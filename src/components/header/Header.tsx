'use client'

import NavItem from "@/components/header/NavItem";
import {useHeader} from "@/hooks/useHeader";

export default function Header() {
  const { isScrolled } = useHeader();

  return (
    <div>
      <header className={`header ${isScrolled ? 'is-scrolled' : ''}`}>
        <div className="header__inner container">
          <NavItem isScrolled={isScrolled}/>
        </div>
      </header>
    </div>
  )
}