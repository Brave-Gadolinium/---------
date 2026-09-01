import { siteConfig } from "@/data/site";
import { useLanguage } from "@/components/LanguageProvider";
import { getMessages } from "@/data/i18n";

export function Footer() {
  const { language } = useLanguage(); const copy = getMessages(language).footer;
  return <footer><div className="container footer-inner"><span>© {new Date().getFullYear()} {siteConfig.name}</span><span>{copy.role}</span><a href="#top">{copy.back}</a></div></footer>;
}
