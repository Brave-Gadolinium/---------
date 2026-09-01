"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import type { Project } from "@/types/project";
import { useLanguage } from "@/components/LanguageProvider";
import { getMessages } from "@/data/i18n";
import { localize } from "@/types/i18n";

interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project) => void;
}

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  const { language } = useLanguage();
  const copy = getMessages(language);
  return (
    <motion.button layoutId={`project-${project.id}`} className="project-card reveal" onClick={() => onOpen(project)} aria-label={`${copy.projects.ariaOpen}: ${project.title}`}>
      <div className={`project-cover project-cover--${project.index}`}>
        {project.cover && <Image className="project-cover-image" src={project.cover} alt={localize(project.shortDescription, language)} fill sizes="(max-width: 900px) 100vw, 1180px" priority={project.index === "01"} />}
        <span className="cover-index">{copy.projects.project} / {project.index}</span>
        {!project.cover && <div className="cover-art" aria-hidden="true"><i /><i /><i /></div>}
        <span className="cover-label">{localize(project.accent, language)}</span>
        <span className="open-project">{copy.projects.open} <ArrowUpRight size={16} /></span>
      </div>
      <div className="project-info">
        <div><span>{localize(project.type, language)}</span><h3>{project.title}</h3></div>
        <p>{localize(project.shortDescription, language)}</p>
        <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
      </div>
    </motion.button>
  );
}
