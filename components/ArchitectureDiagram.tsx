import { ArrowDown } from "lucide-react";
import type { Project } from "@/types/project";
import { useLanguage } from "@/components/LanguageProvider";
import { getMessages } from "@/data/i18n";
import { localize } from "@/types/i18n";

export function ArchitectureDiagram({ architecture }: { architecture: Project["architecture"] }) {
  const { language } = useLanguage();
  const copy = getMessages(language);
  return (
    <div className="architecture-diagram">
      {architecture.nodes.map((node, index) => (
        <div className="architecture-step" key={node.id}>
          <div className={`architecture-node architecture-node--${node.type}`} tabIndex={0}>
            <span>{node.type}</span>
            <strong>{node.label}</strong>
            <p>{localize(node.description, language)}</p>
          </div>
          {index < architecture.nodes.length - 1 && <div className="architecture-link"><ArrowDown size={19} /><span>{node.type === "client" ? copy.architecture.network : ""}</span></div>}
        </div>
      ))}
    </div>
  );
}
