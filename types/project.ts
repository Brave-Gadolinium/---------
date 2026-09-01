import type { LocalizedText } from "@/types/i18n";

export type ArchitectureType = "client" | "network" | "server" | "data";

export interface ProjectSystem {
  title: LocalizedText;
  description: LocalizedText;
  tags: string[];
}

export interface ArchitectureNode {
  id: string;
  label: string;
  type: ArchitectureType;
  description: LocalizedText;
}

export interface ArchitectureConnection {
  from: string;
  to: string;
}

export interface CodeExample {
  title: LocalizedText;
  language: "luau";
  description: LocalizedText;
  code: string;
}

export interface GalleryItem {
  src?: string;
  alt: LocalizedText;
  label: LocalizedText;
}

export interface Project {
  id: string;
  index: string;
  title: string;
  type: LocalizedText;
  shortDescription: LocalizedText;
  description: LocalizedText;
  role: LocalizedText;
  engine: string;
  language: string;
  platform: string;
  status: LocalizedText;
  robloxUrl: string;
  cover?: string;
  video?: string;
  accent: LocalizedText;
  tags: string[];
  highlights: LocalizedText[];
  systems: ProjectSystem[];
  architecture: {
    nodes: ArchitectureNode[];
    connections: ArchitectureConnection[];
  };
  codeExamples: CodeExample[];
  gallery: GalleryItem[];
}
