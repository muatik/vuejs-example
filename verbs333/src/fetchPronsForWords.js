const pronsFetch = require('./fetchPronsCode.js')
const verbWords = require('./verbs.js')
// const verbWords = ['goaa']
const verbs = {}

async function asyncForEach (array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array)
  }
}

async function start () {
  console.log('starts...')
  await asyncForEach(verbWords, async word => {
    const url = `https://www.ldoceonline.com/dictionary/${word}`
    const pronunciation = await pronsFetch(url)
    console.log(`fetched ${url} ${pronunciation}`)
    verbs[word] = {
      word, pronunciation
    }
  })
  console.log('done...')
  console.log(JSON.stringify(verbs))
}

start()
