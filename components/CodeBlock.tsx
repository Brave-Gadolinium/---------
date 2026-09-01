"use client";

import type { CodeExample } from "@/types/project";
import { useLanguage } from "@/components/LanguageProvider";
import { localize } from "@/types/i18n";

export function CodeBlock({ example }: { example: CodeExample }) {
  const { language } = useLanguage();
  const title = localize(example.title, language);

  return (
    <article className="code-example">
      <div className="code-heading"><div><h4>{title}</h4><p>{localize(example.description, language)}</p></div><span>{example.language}</span></div>
      <div className="code-window">
        <div className="code-bar"><span>{title.toLowerCase().replaceAll(" ", "-")}.luau</span></div>
        <pre><code>{example.code}</code></pre>
      </div>
    </article>
  );
}
