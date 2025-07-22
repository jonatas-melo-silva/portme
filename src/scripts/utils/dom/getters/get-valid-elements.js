import { isDOMCollection } from '../validators/is-DOM-collection'
import { isValidHTMLElement } from '../validators/is-valid-HTML-element'
import { getElementsBySelector } from './get-elements-by-selector'

/**
 * Normaliza diversos tipos de input para um array de elementos válidos
 * @param {string|HTMLElement|NodeList|HTMLCollection} target - Alvo para normalização
 * @returns {HTMLElement[]|[]} - Array de elementos DOM válidos ou vazio
 * @example
 * <div id="myElement"></div>
 * getValidElements('#myElement'); // → [HTMLElement]
 * getValidElements('.myClass'); // → [HTMLElement, HTMLElement, ...]
 * getValidElements('nonexistent'); // → []
 */
export function getValidElements(target) {
  if (typeof target === 'string') {
    return getElementsBySelector(target)
  }

  if (isDOMCollection(target)) {
    return Array.from(target).filter(isValidHTMLElement)
  }

  if (isValidHTMLElement(target)) {
    return [target]
  }

  return []
}
