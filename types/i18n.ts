export type Language = "en" | "ru";

export interface LocalizedText {
  en: string;
  ru: string;
}

export function localize(text: LocalizedText, language: Language): string {
  return text[language];
}
