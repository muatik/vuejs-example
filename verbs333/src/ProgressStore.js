
const progress = {
  'usedWords': {
    // 'accept': {
    //   used: 4,
    //   strength: 'weak'
    // }
  }
}

const increase = (word) => {
  if (!(word in progress.usedWords)) {
    progress.usedWords[word] = {
      'used': 0,
      'strengh': 'weak'
    }
  }

  progress.usedWords[word].used++
  persist()
}

const getUsedWords = () => {
  return progress.usedWords
}

const getUsedWord = (word) => {
  return new Map(progress.usedWords[word])
}

const persist = () => {
  localStorage.setItem('progress', JSON.stringify(progress.usedWords))
}

const load = () => {
  const data = localStorage.getItem('progress')
  if (data != null) {
    progress.usedWords = JSON.parse(data)
  }
}
load()

export default {
  increase,
  getUsedWords,
  getUsedWord
}
