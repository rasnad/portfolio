export type LocalizedText = {
  en: string;
  es: string;
};

export function text(en: string, es: string): LocalizedText {
  return { en, es };
}
