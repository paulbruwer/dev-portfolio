"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const HamburgerNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on escape key
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleEsc);

    // Prevent body scroll when menu is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = ''; // Cleanup on unmount
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  }

  return (
    <div className="hamburger-nav no-print">
      <button onClick={toggleMenu} className={`hamburger-button ${isOpen ? 'open' : ''}`} aria-label="Toggle navigation menu" aria-expanded={isOpen}>
        <span />
        <span />
        <span />
      </button>
      
      {isOpen && (
        <div className="hamburger-menu-overlay" onClick={closeMenu}>
          <nav className="hamburger-menu" onClick={(e) => e.stopPropagation()}>
            <Link href="#skills" onClick={closeMenu}>Core Skills</Link>
            <Link href="#experience" onClick={closeMenu}>Experience</Link>
            <Link href="#integrations" onClick={closeMenu}>Integrations</Link>
            <Link href="#risk-alignment" onClick={closeMenu}>Risk Alignment</Link>
            <Link href="#education" onClick={closeMenu}>Education</Link>
          </nav>
        </div>
      )}
    </div>
  );
};

export default HamburgerNav;
