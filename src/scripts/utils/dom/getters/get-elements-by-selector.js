import { isValidHTMLElement } from '../validators/is-valid-HTML-element'

/**
 * Obtém elementos DOM a partir de um seletor CSS
 * @param {string} selector - Seletor CSS (#id, .class, tag)
 * @returns {HTMLElement[]|[]} - Array de elementos DOM válidos ou vazio
 * @example
 * <div id="myElement"></div>
 * getElementsBySelector('#myElement'); // → [HTMLElement]
 * getElementsBySelector('.myClass'); // → [HTMLElement, HTMLElement, ...]
 * getElementsBySelector('nonexistent'); // → []
 */
export function getElementsBySelector(selector) {
  if (!isValidSelector(selector)) {
    return []
  }

  if (isValidIdSelector(selector)) {
    const element = document.getElementById(selector.slice(1))
    return element ? [element] : []
  }

  return [...document.querySelectorAll(selector)].filter(isValidHTMLElement)
}

function isValidIdSelector(selector) {
  const startsWithHash = selector.startsWith('#')
  const hasValidLength = selector.length > 1
  return startsWithHash && hasValidLength
}

function isValidSelector(selector) {
  const isString = typeof selector === 'string'
  const isNotEmpty = selector.trim().length > 0
  return isString && isNotEmpty
}
