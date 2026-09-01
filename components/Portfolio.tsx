"use client";

import { useCallback, useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectModal } from "@/components/ProjectModal";
import { Capabilities, TechStack, WorkProcess, About, Contact } from "@/components/Sections";
import { Footer } from "@/components/Footer";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { projects } from "@/data/projects";
import type { Project } from "@/types/project";
import { LanguageProvider, useLanguage } from "@/components/LanguageProvider";
import { getMessages } from "@/data/i18n";

export function Portfolio() {
  return <LanguageProvider><PortfolioContent /></LanguageProvider>;
}

function PortfolioContent() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { language } = useLanguage();
  const copy = getMessages(language);

  const syncFromUrl = useCallback(() => {
    const id = new URLSearchParams(window.location.search).get("project");
    setSelectedProject(projects.find((project) => project.id === id) ?? null);
  }, []);

  useEffect(() => {
    const initialUrl = new URL(window.location.href);
    const initialProject = initialUrl.searchParams.get("project");
    if (initialProject && projects.some((project) => project.id === initialProject)) {
      const cleanUrl = new URL(initialUrl);
      cleanUrl.searchParams.delete("project");
      window.history.replaceState({}, "", cleanUrl);
      window.history.pushState({ project: initialProject }, "", initialUrl);
    }
    queueMicrotask(syncFromUrl);
    window.addEventListener("popstate", syncFromUrl);
    return () => window.removeEventListener("popstate", syncFromUrl);
  }, [syncFromUrl]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")), { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const preventCopy = (event: ClipboardEvent) => {
      const target = event.target;
      if (!(target instanceof Element) || !target.closest("[data-copy-allowed]")) event.preventDefault();
    };
    document.addEventListener("copy", preventCopy);
    return () => document.removeEventListener("copy", preventCopy);
  }, []);

  function openProject(project: Project) {
    const url = new URL(window.location.href);
    url.searchParams.set("project", project.id);
    window.history.pushState({ project: project.id }, "", url);
    setSelectedProject(project);
  }

  const closeProject = useCallback(() => {
    if (window.history.state?.project) window.history.back();
    else {
      const url = new URL(window.location.href);
      url.searchParams.delete("project");
      window.history.replaceState({}, "", url);
    }
    setSelectedProject(null);
  }, []);

  return <><Header /><main><Hero /><section id="projects" className="section projects-section"><div className="container"><SectionTitle eyebrow={copy.projects.eyebrow} title={copy.projects.title} description={copy.projects.description} /><div className="project-grid">{projects.map((project) => <ProjectCard key={project.id} project={project} onOpen={openProject} />)}</div></div></section><Capabilities /><TechStack /><WorkProcess /><About /><Contact /></main><Footer /><ProjectModal key={selectedProject?.id ?? "closed"} project={selectedProject} onClose={closeProject} /></>;
}
