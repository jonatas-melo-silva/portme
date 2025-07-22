/**
 * Verifica se o valor é uma coleção DOM válida (NodeList ou HTMLCollection)
 * @param {*} collection - Valor a ser verificado
 * @returns {boolean} - True se for NodeList ou HTMLCollection
 * @example
 * isDOMCollection(document.querySelectorAll('div')); // true
 * isDOMCollection([]); // false
 */
export function isDOMCollection(collection) {
  const isNodeList = collection instanceof NodeList
  const isHTMLCollection = collection instanceof HTMLCollection

  return isNodeList || isHTMLCollection
}
