"use client";

import { ArrowDownRight, ArrowRight, Braces, Database, Download, Server } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";
import { getMessages } from "@/data/i18n";
import { useLanguage } from "@/components/LanguageProvider";
import { localize } from "@/types/i18n";

export function Hero() {
  const reducedMotion = useReducedMotion();
  const { language } = useLanguage();
  const copy = getMessages(language);
  const profile = [[copy.hero.role, copy.hero.roleValue], [copy.hero.language, "Luau"], [copy.hero.focus, copy.hero.focusValue], [copy.hero.architecture, copy.hero.architectureValue]] as const;
  const entrance = reducedMotion ? {} : { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 } };

  return (
    <section className="hero" id="top">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />
      <div className="container hero-inner">
        <motion.div className="hero-copy" {...entrance} transition={{ duration: 0.6 }}>
          <div className="availability"><span /> {copy.hero.availability}</div>
          <p className="hero-kicker">{copy.hero.kicker}</p>
          <h1>{siteConfig.name}</h1>
          <p className="hero-role">{localize(siteConfig.role, language)}</p>
          <p className="hero-description">{localize(siteConfig.description, language)}</p>
          <div className="hero-actions">
            <Button href="#projects">{copy.hero.viewProjects} <ArrowDownRight size={18} /></Button>
            <Button href="#contact" variant="secondary">{copy.hero.contact} <ArrowRight size={18} /></Button>
            <Button href={siteConfig.cv[language]} download variant="secondary">{copy.hero.downloadCv} <Download size={18} /></Button>
          </div>
          <div className="hero-proof">
            <div><strong>{siteConfig.experienceYears}</strong><span>{copy.hero.years}</span></div>
            <div><strong>{siteConfig.studioCount}</strong><span>{copy.hero.studios}</span></div>
            <div><strong>{siteConfig.projectCount}</strong><span>{copy.hero.releases}</span></div>
          </div>
        </motion.div>

        <motion.aside className="profile-card" {...entrance} transition={{ duration: 0.6, delay: 0.12 }} aria-label="Developer profile">
          <div className="profile-topbar">
            <span>{copy.hero.profile}</span>
            <div><i /><i /><i /></div>
          </div>
          <div className="profile-visual">
            <div className="orbit orbit--one" />
            <div className="orbit orbit--two" />
            <div className="core"><Braces size={28} /></div>
            <Server className="satellite satellite--one" size={17} />
            <Database className="satellite satellite--two" size={17} />
          </div>
          <div className="profile-data">
            {profile.map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}
          </div>
          <div className="profile-status"><span /> {copy.hero.online} <b>{copy.hero.status}</b></div>
        </motion.aside>
      </div>
      <div className="scroll-marker"><span>{copy.hero.scroll}</span><i /></div>
    </section>
  );
}
