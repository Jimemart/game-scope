import { toPairs } from 'lodash'

export const extractPlatforms = (platforms) => {
  const translated =  platforms.map(elem => {
    switch (elem) {
      case 1:
        return 'PS4'
      case 2:
        return 'XBOX'
      case 3:
        return 'SWITCH'
      case 4:
        return 'PC'
      default:
        return ''
    }
  })
  return translated.join(' ')
}

export const formatFile = (file) => {
  if (!file) return
  const { platforms, studio, release, key_words, type } = file
  return {
    estuido: studio,
    lanzamiento: release,
    claves: key_words.join(', '),
    genero: type,
    plataformas: extractPlatforms(platforms)
  }
}

export const arrayOfFile = (formated) => {
  return toPairs(formated)
}
