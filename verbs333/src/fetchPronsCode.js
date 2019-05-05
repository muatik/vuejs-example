const fetch = require('node-fetch')
const jsdom = require('jsdom')
const { JSDOM } = jsdom

module.exports = url => fetch(url)
  .then(data => data.text())
  .then(data => {
    const dom = new JSDOM(data)
    const pronunciation = dom.window.document.querySelector('.PronCodes')
    if (pronunciation) {
      return pronunciation.textContent
    } else {
      return ''
    }
  })
