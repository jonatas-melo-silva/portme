import { updateCurrentYear } from './utils/date/update-current-year'
import { getElementsBySelector } from './utils/dom/getters/get-elements-by-selector'

document.addEventListener('DOMContentLoaded', () => {
  updateCurrentYear('#current-year-at-footer')
  updateSocialMediaLinks(
    USER_PROFILES_ABOUT,
    SOCIAL_BASE_URLS,
    '#social-media-about',
    'data-social-media'
  )
})

const USER_PROFILES_ABOUT = {
  linkedin: 'in/jonatas-melo-silva/',
  github: 'jonatas-melo-silva',
  instagram: 'jonatas_melo_silva',
  x: 'JonatasMeloSil3',
}

const SOCIAL_BASE_URLS = {
  linkedin: 'https://www.linkedin.com/',
  github: 'https://github.com/',
  instagram: 'https://www.instagram.com/',
  x: 'https://x.com/',
}

/**
 * Atualiza os links das redes sociais no container especificado.
 * @param {object} userProfiles - Objetos contendo os perfis de usuário
 * @param {object} socialBaseUrls - Objetos contendo as URLs base das redes sociais
 * @param {string} socialMediaContainer - Seletor do container das redes sociais
 * @param {string} dataset - Nome do atributo de dados que contém o nome da rede social
 *
 * @returns {void}
 * @example
 * updateSocialMediaLinks(
 *   { linkedin: 'in/jonatas-melo-silva/' },
 *   { linkedin: 'https://www.linkedin.com/' },
 *   '#social-media-about',
 *   'data-social-media'
 * )
 * @description
 * Atualiza os links das redes sociais dentro de um container específico.
 * Verifica se o container e os links existem antes de realizar a atualização.
 * Cada link é atualizado com a URL base da rede social e o perfil do usuário.
 * Os links são abertos em nova aba com segurança (rel="noopener noreferrer").
 */
function updateSocialMediaLinks(
  userProfiles,
  socialBaseUrls,
  socialMediaContainer,
  dataset
) {
  const container = getElementsBySelector(socialMediaContainer)

  const hasContainer = !container
  const isEmptyContainer = container.length === 0
  const shouldSkipUpdate = hasContainer || isEmptyContainer

  if (shouldSkipUpdate) return

  const socialMediaLinks = container[0].querySelectorAll(`a[${dataset}]`)

  const hasSocialMediaLinks = !socialMediaLinks
  const isEmptySocialMediaLinks = socialMediaLinks.length === 0
  const shouldSkipLinksUpdate = hasSocialMediaLinks || isEmptySocialMediaLinks

  if (shouldSkipLinksUpdate) return

  for (const link of socialMediaLinks) {
    const socialMedia = link.getAttribute(dataset)
    const userProfile = userProfiles[socialMedia]

    if (!userProfile) continue

    link.href = `${socialBaseUrls[socialMedia]}${userProfile}`
    link.target = '_blank'
    link.rel = 'noopener noreferrer'
  }
}
