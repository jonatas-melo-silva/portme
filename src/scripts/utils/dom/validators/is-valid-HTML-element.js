/**
 * Verifica se o valor é um elemento HTML válido
 * @param {*} element - Valor a ser verificado
 * @returns {boolean} - True se for instância de HTMLElement
 * @example
 * isValidHTMLElement(document.querySelector('div')); // → true
 * isValidHTMLElement([]); // → false
 */
export function isValidHTMLElement(element) {
  const isHTMLElement = element instanceof HTMLElement

  return isHTMLElement
}
