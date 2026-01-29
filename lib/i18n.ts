import en from '@/public/locales/en.json'
import pt from '@/public/locales/pt.json'

export type Language = 'en' | 'pt'

export const translations = {
  en,
  pt,
}

export function useTranslation(lang: Language) {
  return translations[lang] || translations.en
}
