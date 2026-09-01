"use client";

import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight, ExternalLink, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";
import { CodeBlock } from "@/components/CodeBlock";
import type { Project } from "@/types/project";
import { useLanguage } from "@/components/LanguageProvider";
import { getMessages } from "@/data/i18n";
import { localize } from "@/types/i18n";

type Tab = "Overview" | "Systems" | "Architecture" | "Code" | "Gallery";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [tab, setTab] = useState<Tab>("Overview");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const { language } = useLanguage();
  const copy = getMessages(language);
  const dialogRef = useRef<HTMLDivElement>(null);
  const availableTabs = useMemo<Tab[]>(() => {
    if (!project) return [];
    return [
      "Overview",
      ...(project.systems.length ? ["Systems" as const] : []),
      ...(project.architecture.nodes.length ? ["Architecture" as const] : []),
      ...(project.codeExamples.length ? ["Code" as const] : []),
      ...(project.gallery.length ? ["Gallery" as const] : []),
    ];
  }, [project]);
  const tabLabels: Record<Tab, string> = { Overview: copy.modal.overview, Systems: copy.modal.systems, Architecture: copy.modal.architecture, Code: copy.modal.code, Gallery: copy.modal.gallery };

  useEffect(() => {
    if (!project) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.setTimeout(() => dialogRef.current?.focus(), 50);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (lightbox !== null) setLightbox(null);
        else onClose();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [project, onClose, lightbox]);

  function moveLightbox(direction: number) {
    if (!project || lightbox === null) return;
    setLightbox((lightbox + direction + project.gallery.length) % project.gallery.length);
  }

  return (
    <AnimatePresence>
      {project && (
        <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
          <motion.div layoutId={`project-${project.id}`} className="project-modal" role="dialog" aria-modal="true" aria-label={`${project.title}: ${copy.modal.tabsLabel}`} tabIndex={-1} ref={dialogRef}>
            <header className="modal-header">
              <div><span>{copy.modal.caseStudy} / {project.index}</span><h2>{project.title}</h2><p>{localize(project.type, language)}</p></div>
              <div className="modal-actions"><a href={project.robloxUrl} target="_blank" rel="noreferrer">{copy.modal.viewRoblox} <ExternalLink size={16} /></a><button onClick={onClose} aria-label={copy.modal.close}><X /></button></div>
            </header>
            <div className={`modal-preview project-cover--${project.index}`}>
              {project.video ? <video className="project-video" controls preload="metadata" poster={project.cover}><source src={project.video} type="video/mp4" /></video> : project.cover ? <Image className="modal-preview-image" src={project.cover} alt={localize(project.shortDescription, language)} fill sizes="(max-width: 640px) 100vw, 1100px" /> : <><span>{localize(project.accent, language)}</span><div className="modal-signal" aria-hidden="true"><i /><i /><i /></div></>}
              <div className="preview-meta"><span>{copy.modal.previewEngine}</span><span>{copy.modal.previewStatus} / {localize(project.status, language).toUpperCase()}</span></div>
            </div>
            <nav className="modal-tabs" aria-label={copy.modal.tabsLabel}>
              {availableTabs.map((item) => <button key={item} className={tab === item ? "active" : ""} onClick={() => setTab(item)}>{tabLabels[item]}</button>)}
            </nav>
            <div className="modal-content">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div key={tab} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} transition={{ duration: 0.18 }}>
                  {tab === "Overview" && <Overview project={project} />}
                  {tab === "Systems" && <Systems project={project} />}
                  {tab === "Architecture" && <ArchitectureDiagram architecture={project.architecture} />}
                  {tab === "Code" && <div className="code-list">{project.codeExamples.map((example, index) => <CodeBlock key={index} example={example} />)}</div>}
                  {tab === "Gallery" && <div className="gallery-grid">{project.gallery.map((item, index) => <button key={index} className={`gallery-item project-cover--0${(index % 3) + 1}`} onClick={() => setLightbox(index)}>{item.src && <Image src={item.src} alt={localize(item.alt, language)} fill sizes="(max-width: 640px) 100vw, 500px" />}<span>{String(index + 1).padStart(2, "0")}</span><div className="gallery-caption"><strong>{localize(item.label, language)}</strong>{!item.src && <small>{localize(item.alt, language)}</small>}</div></button>)}</div>}
                </motion.div>
              </AnimatePresence>
            </div>
            <AnimatePresence>
              {lightbox !== null && <motion.div className="lightbox" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setLightbox(null)}>
                <button className="lightbox-close" onClick={() => setLightbox(null)} aria-label={copy.modal.closeGallery}><X /></button>
                <button onClick={(e) => { e.stopPropagation(); moveLightbox(-1); }} aria-label={copy.modal.previous}><ArrowLeft /></button>
                <div className={`lightbox-frame project-cover--0${(lightbox % 3) + 1}`} onClick={(e) => e.stopPropagation()}>{project.gallery[lightbox].src ? <Image src={project.gallery[lightbox].src} alt={localize(project.gallery[lightbox].alt, language)} fill sizes="90vw" /> : <><span>{localize(project.gallery[lightbox].label, language)}</span><p>{copy.modal.replaceMedia}</p></>}</div>
                <button onClick={(e) => { e.stopPropagation(); moveLightbox(1); }} aria-label={copy.modal.next}><ArrowRight /></button>
              </motion.div>}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Overview({ project }: { project: Project }) {
  const { language } = useLanguage();
  const copy = getMessages(language);
  const details = [[copy.modal.role, localize(project.role, language)], [copy.modal.engine, project.engine], [copy.modal.language, project.language], [copy.modal.platform, project.platform], [copy.modal.status, localize(project.status, language)]];
  return <div className="overview-grid"><div className="overview-main"><span className="content-label">{copy.modal.overviewLabel}</span><h3>{localize(project.description, language)}</h3><span className="content-label">{copy.modal.roleLabel}</span><p>{copy.modal.roleText}</p><div className="highlight-grid">{project.highlights.map((item, index) => <div key={index}><i />{localize(item, language)}</div>)}</div></div><aside className="project-details"><span className="content-label">{copy.modal.details}</span>{details.map(([key, value]) => <div key={key}><span>{key}</span><strong>{value}</strong></div>)}</aside></div>;
}

function Systems({ project }: { project: Project }) {
  const { language } = useLanguage();
  const copy = getMessages(language);
  return <div className="systems-grid">{project.systems.map((system, index) => <article className="system-card" key={index}><span>{copy.modal.system} / {String(index + 1).padStart(2, "0")}</span><h3>{localize(system.title, language)}</h3><p>{localize(system.description, language)}</p><div className="tag-row">{system.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></article>)}</div>;
}
