<template>
  <div>
    <div class="d-flex justify-content-center my-4 read-trough-player">
      <i 
        v-show="!isReadingTrough && !isReadingTroughPaused"
        @click="readTrough"
        class="fas fa-play-circle"></i>
      <i 
        v-show="isReadingTrough"
        @click="togglePauseReadingTrough"
        class="fas"
        :class="{
          'fa-play-circle': isReadingTroughPaused, 
          'fa-pause-circle': !isReadingTroughPaused}"></i>
      <i 
        v-show="isReadingTrough"
        @click="stopReadingTrough"
        class="fas fa-stop-circle"></i>
    </div>
    <word-view 
      v-for="(word, index) in words" 
      :key="index"
      :word="word"
      :isPlayerLocked="isReadingTrough"
      :ref="generateReference(word.word)"
      @onPause="stopAudio"
      @onPlay="playAudio"></word-view>
      
  </div>
</template>

<script>
import WordView from './WordView'

export default {
  name: 'WordList',
  components: {WordView},
  props: {
    words: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isPlaying: false,
      isReadingTrough: false,
      isReadingTroughPaused: false,
      readingTroughIndex: 0
    }
  },
  methods: {
    generateReference (word) {
      return `word_${word}`
    },
    readTrough () {
      // this.stopCurrentAudio()
      this.isReadingTrough = true
      this.isReadingTroughPaused = false
      this.readingTroughIndex = 0
      this.readNext()
    },
    readNext () {
      if (!this.isReadingTrough || this.isReadingTroughPaused || this.isPlaying) {
        return
      }
      const nextWord = Object.values(this.words)[this.readingTroughIndex]
      this.readingTroughIndex++
      const child_ref = this.$refs[this.generateReference(nextWord.word)][0]
      child_ref.toggleAudioPlaying()
    },
    togglePauseReadingTrough () {
      if (this.isReadingTroughPaused) {
        this.isReadingTroughPaused = false
        this.readNext()
      } else {
        this.isReadingTroughPaused = true
      }
    },
    stopReadingTrough () {
      this.isReadingTrough = false
      this.isReadingTroughPaused = false
      this.readingTroughIndex = 0
    },
    playAudio (player) {
      if (this.isPlaying) {
        this.stopCurrentAudio()
      }
      this.isPlaying = true
      this.player = player
      this.bindAudioEvents()
      player.play()
    },
    stopAudio (player) {
      this.stopCurrentAudio()
    },
    stopCurrentAudio () {
      this.player.pause()
      this.player.currentTime = 0
      this.isPlaying = false
    },
    onPlayerEnded (event) {
      this.isPlaying = false
      this.readNext()
    },
    onPlayerPause (event) {
      this.isPlaying = false
    },
    onPlayerPlay (event) {
      this.isPlaying = true
    },
    bindAudioEvents () {
      // to prevent duplicate listeners, anonymous functions are not used
      this.player.addEventListener('ended', this.onPlayerEnded)
      this.player.addEventListener('pause', this.onPlayerPause)
      this.player.addEventListener('play', this.onPlayerPlay)
    }
  },
}
</script>

