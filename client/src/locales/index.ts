import messages_en from './en.json'
import messages_ru from './ru.json'
import messages_zh from './zh.json'
import messages_hi from './hi.json'
import messages_ar from './ar.json'
import messages_ja from './ja.json'
import messages_de from './de.json'
import messages_fr from './fr.json'
import messages_es from './es.json'
import messages_sv from './sv.json'
import messages_tr from './tr.json'
import messages_pt from './pt.json'
import messages_bn from './bn.json'

export const Locales = {
  English: 'en',
  Russian: 'ru',
  Chinese: 'zh',
  Hindi: 'hi',
  Arabic: 'ar',
  Japanese: 'ja',
  German: 'de',
  French: 'fr',
  Spanish: 'es',
  Swedish: 'sv',
  Turkish: 'tr',
  Portuguese: 'pt',
  Bengali: 'bn',
}

export const messages = {
  [Locales.English]: messages_en,
  [Locales.Russian]: messages_ru,
  [Locales.Chinese]: messages_zh,
  [Locales.Hindi]: messages_hi,
  [Locales.Arabic]: messages_ar,
  [Locales.Japanese]: messages_ja,
  [Locales.German]: messages_de,
  [Locales.French]: messages_fr,
  [Locales.Spanish]: messages_es,
  [Locales.Swedish]: messages_sv,
  [Locales.Turkish]: messages_tr,
  [Locales.Portuguese]: messages_pt,
  [Locales.Bengali]: messages_bn,
}

export const defaultLocale = 'en'

export function getLocaleCode(): string {
  return (navigator.languages && navigator.languages[0])
      || navigator.language
      || defaultLocale
}

export function getLocaleWithoutRegionCode(): string {
  const code = getLocaleCode()
  return code.split(/[-_]/)[0]
}
