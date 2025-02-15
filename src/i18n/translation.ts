import { siteConfig } from '../config'
import type I18nKey from './i18nKey'
import { ar } from './languages/ar'
import { en } from './languages/en'

import { tzm } from './languages/zgh'

export type Translation = {
  [K in I18nKey]: string
}

const defaultTranslation = en

const map: { [key: string]: Translation } = {
  en: en,
  ar: ar,
  zgh: tzm,
  tzm: tzm,
}

export function getTranslation(lang: string): Translation {
  return map[lang.toLowerCase()] || defaultTranslation
}

export function i18n(key: I18nKey): string {
  const lang = siteConfig.lang || 'en'
  return getTranslation(lang)[key]
}
