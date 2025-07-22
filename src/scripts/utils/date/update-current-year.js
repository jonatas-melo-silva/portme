import { getElementsBySelector } from '../dom/getters/get-elements-by-selector'

/**
 * Atualiza o conteúdo de texto dos elementos DOM com o ano atual.
 * @param {string|HTMLElement|NodeList} target - Seletor ou elemento(s) DOM
 * @returns {void}
 * @example
 * <span id="year"></span>
 * updateCurrentYear('#year');
 */
export function updateCurrentYear(target) {
  const elements = getElementsBySelector(target)

  const hasNoElements = !elements
  const isEmptyCollection = elements.length === 0
  const shouldSkipUpdate = hasNoElements || isEmptyCollection

  if (shouldSkipUpdate) return

  const currentYear = new Date().getFullYear()

  for (const element of elements) {
    element.textContent = currentYear
  }
}
