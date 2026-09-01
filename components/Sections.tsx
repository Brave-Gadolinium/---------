"use client";

import { ArrowUpRight, Box, BrainCircuit, Braces, Database, Gauge, Gamepad2, Network, Workflow as WorkflowIcon } from "lucide-react";
import { capabilities, focusAreas, siteConfig, techStack, workflow, workExperience } from "@/data/site";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { useLanguage } from "@/components/LanguageProvider";
import { getMessages } from "@/data/i18n";
import { localize } from "@/types/i18n";

const capabilityIcons = [Gamepad2, Network, Database, BrainCircuit, Box, Gauge];

export function Capabilities() {
  const { language } = useLanguage(); const copy = getMessages(language).sections.capabilities;
  return <section id="systems" className="section"><div className="container"><SectionTitle eyebrow={copy.eyebrow} title={copy.title} description={copy.description} /><div className="capability-grid">{capabilities.map((item, index) => { const Icon = capabilityIcons[index]; return <article className="capability-card reveal" key={index}><div className="capability-icon"><Icon /></div><span>0{index + 1}</span><h3>{localize(item.title, language)}</h3><p>{localize(item.description, language)}</p><div className="capability-details">{item.details.map((detail, detailIndex) => <small key={detailIndex}>{localize(detail, language)}</small>)}</div></article>; })}</div></div></section>;
}

export function TechStack() {
  const { language } = useLanguage(); const copy = getMessages(language).sections.stack;
  return <section className="section section--panel"><div className="container tech-layout"><SectionTitle eyebrow={copy.eyebrow} title={copy.title} description={copy.description} /><div className="tech-terminal reveal"><div className="terminal-bar"><span>production_stack.config</span><i>● ● ●</i></div><div className="tech-grid">{techStack.map((tech, index) => <div key={tech}><span>{String(index + 1).padStart(2, "0")}</span><Braces size={16} /><strong>{tech}</strong></div>)}</div></div></div></section>;
}

export function WorkProcess() {
  const { language } = useLanguage(); const copy = getMessages(language).sections.process;
  return <section className="section"><div className="container"><SectionTitle eyebrow={copy.eyebrow} title={copy.title} description={copy.description} /><div className="workflow">{workflow.map(([number, title, description], index) => <article className="workflow-step reveal" key={number}><div><span>{number}</span><WorkflowIcon size={18} /></div><h3>{localize(title, language)}</h3><p>{localize(description, language)}</p>{index < workflow.length - 1 && <i />}</article>)}</div></div></section>;
}

export function About() {
  const { language } = useLanguage(); const copy = getMessages(language).sections.about;
  return <section id="about" className="section section--panel"><div className="container"><div className="about-layout"><div className="about-portrait reveal"><div className="portrait-grid" /><span>DEV / {siteConfig.name}</span><div><Braces /></div><small>ROBLOX STUDIO · LUAU</small></div><div className="about-copy"><SectionTitle eyebrow={copy.eyebrow} title={copy.title} /><p className="about-lead">{copy.lead}</p><p>{copy.body}</p><div className="about-columns"><div><span>{copy.focus}</span>{focusAreas.map((item, index) => <strong key={index}>{localize(item, language)}</strong>)}</div><div><span>{copy.production}</span>{workExperience.map((item) => <strong key={item.company}>{item.company}</strong>)}</div></div></div></div><div className="experience-block"><div className="experience-heading"><span className="eyebrow">{copy.experience}</span><p>{copy.experienceDescription}</p></div><div className="experience-timeline">{workExperience.map((item, index) => <article className="experience-item reveal" key={item.company}><div className="experience-marker"><span>{String(index + 1).padStart(2, "0")}</span><i /></div><div className="experience-card"><div><h3>{item.company}</h3><span>{localize(item.duration, language)}</span></div><strong>{localize(item.role, language)}</strong><p>{localize(item.description, language)}</p></div></article>)}</div></div></div></section>;
}

export function Contact() {
  const { language } = useLanguage(); const copy = getMessages(language).sections.contact;
  const links = Object.entries(siteConfig.links).filter(([, value]) => value);
  return <section id="contact" className="contact-section" data-copy-allowed><div className="contact-grid" aria-hidden="true" /><div className="container contact-inner"><span className="eyebrow">{copy.eyebrow}</span><h2>{copy.title}<br /><em>{copy.accent}</em></h2><p>{copy.description}</p>{links.length > 0 && <div className="contact-links">{links.map(([name, value]) => <a key={name} href={value} target="_blank" rel="noreferrer">{name}<ArrowUpRight size={17} /></a>)}</div>}</div></section>;
}
