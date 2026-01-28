export type Language = "id" | "en" | "zh";

export interface LanguageProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
}
