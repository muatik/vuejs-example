import Verbs from '@/verbs.js'

const findPracticedVerbs = (text) => {
  return text.split(' ')
    .map(word => {
      // trim to root
      word = word.trim()
      // s, ed, ing
      if (word.length < 3) {
        return null
      } 
      if (isKnownVerb(word)) {
        return word
      }

      if (word.slice(-1) == 's' && isKnownVerb(word.slice(0, -1))) {
        return word.slice(0, -1)
      }

      if (word.slice(-2) == 'es' && isKnownVerb(word.slice(0, -2))) {
        return word.slice(0, -2)
      }

      if (word.length > 5 && word.slice(-3) == 'ies' && isKnownVerb(word.slice(0, -3))) {
        return word.slice(0, -3)
      }

      if (word.length > 5 && word.slice(-3) == 'ing' && isKnownVerb(word.slice(0, -3))) {
        return word.slice(0, -3)
      }

      if (word.length > 5 && word.slice(-3) == 'ing' && isKnownVerb(word.slice(0, -3) + 'e')) {
        return word.slice(0, -3) + 'e'
      }

      if (word.slice(-1) == 'd' && isKnownVerb(word.slice(0, -1))) {
        return word.slice(0, -1)
      }

      if (word.slice(-2) == 'ed' && isKnownVerb(word.slice(0, -2))) {
        return word.slice(0, -2)
      }

      if (word.slice(-2) == 'ed' && isKnownVerb(word.slice(0, -3))) {
        return word.slice(0, -3)
      }
      return null
    })
    .filter(word => word !== null && word.trim().length > 0)
}

const isKnownVerb = (word) => {
  return word in Verbs
}

export default {
  findPracticedVerbs, isKnownVerb
}
