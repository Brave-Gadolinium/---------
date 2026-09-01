"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { siteConfig } from "@/data/site";
import { getMessages } from "@/data/i18n";
import { useLanguage } from "@/components/LanguageProvider";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const copy = getMessages(language);
  const links = [[copy.navigation.projects, "projects"], [copy.navigation.systems, "systems"], [copy.navigation.about, "about"], [copy.navigation.contact, "contact"]] as const;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
      <div className="header-inner">
        <a href="#top" className="wordmark" aria-label="Back to top">
          {siteConfig.name}<span>.</span>
        </a>
        <nav className={`nav ${open ? "nav--open" : ""}`} aria-label="Main navigation">
          {links.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>
            <span /> {copy.navigation.available}
          </a>
        </nav>
        <div className="header-controls">
          <button className="language-toggle" onClick={() => setLanguage(language === "en" ? "ru" : "en")} aria-label={language === "en" ? "Переключить на русский" : "Switch to English"}>
            <span className={language === "en" ? "active" : ""}>EN</span><i>/</i><span className={language === "ru" ? "active" : ""}>RU</span>
          </button>
        <button className="menu-button" onClick={() => setOpen((value) => !value)} aria-label={open ? copy.navigation.close : copy.navigation.open} aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
        </div>
      </div>
    </header>
  );
}
