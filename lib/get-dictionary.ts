import 'server-only'
import type { Dictionary } from '@/dictionaries/en'

const dictionaries = {
  en: () => import('@/dictionaries/en').then((module) => module.en),
  id: () => import('@/dictionaries/id').then((module) => module.id),
}

export const getDictionary = async (locale: keyof typeof dictionaries) => {
  return dictionaries[locale] ? dictionaries[locale]() : dictionaries.en()
}
