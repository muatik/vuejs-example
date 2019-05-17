<template>
  <div class="d-flex justify-content-center word-container pt-3 border-bottom" :class="{isPlaying: isPlaying}">
    
    <div class="col-md-5">
      <h4>
        <span class="word">{{word.word}}</span>
        <small class="text-muted pronunciation ">{{word.pronunciation}}</small></h4>
    </div>

    <div v-show="isAudioAvailable" :class="{'invisible': isPlayerLocked}">
      <audio ref="player" >
        <source :src="getAudioUrl" type="audio/mpeg">
        Your browser does not support the audio element.
      </audio>
      <i 
        v-show="!isPlaying" 
        @click="toggleAudioPlaying" class="far fa-play-circle"></i>
      <i 
        v-show="isPlaying"
        @click="toggleAudioPlaying" class="fas fa-pause-circle"></i>
    </div>

  </div>
</template>

<script>
export default {
  name: 'WordView',
  props: ['word', 'isPlayerLocked'],
  data () {
    return {
      player: null,
      isAudioAvailable: false,
      isPlaying: false
    }
  },
  computed: {
    getAudioUrl () {
      const firstWord = this.word.word.split(' ')[0]
      try {
        const audio = require(`../assets/media/${firstWord}.mp3`)
        this.isAudioAvailable = true
        return audio
      } catch (e) {}
    }
  },
  mounted() {
    this.$refs.player.addEventListener('ended', event => {
      this.isPlaying = false
    })
    this.$refs.player.addEventListener('pause',event => {
      this.isPlaying = false
    })
    this.$refs.player.addEventListener('play', event => {
      this.isPlaying = true
    })
  },
  methods: {
    toggleAudioPlaying () {
      if (this.isPlaying) {
        this.$emit('onPause', this.$refs.player)
      } else {
        this.$emit('onPlay', this.$refs.player)
      }
    }
  }
}
</script>

<style scoped>

i {
  padding: 14px 22px;
  margin: 0 0px;
  color: rgb(130, 179, 130)!important;
  font-size: 24px!important;
  cursor: pointer;
}
.isPlaying .word{
  /* color: rgb(149, 112, 11); */
  text-shadow: 1px 1px 4px rgb(209, 172, 69);
}
</style>
