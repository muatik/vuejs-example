<template>
  <div class="container-fluid">
    <form 
      @submit.prevent="onFormSubmit"
      class="col-md-7 m-4 center mx-auto">
      <div class="form-group">
        <label for="exampleFormControlTextarea1">Type a story</label>
        <textarea 
          v-model="story"
          class="form-control" id="exampleFormControlTextarea1" rows="10"
          placeholder="type a text which contains the verbs you are learning. "></textarea>
      </div>
      <button type="submit" class="btn btn-secondary">Submit</button>
    </form>
  </div>
</template>

<script>

import Analyzer from '@/Analyzer'
import Progress from '@/ProgressStore'

export default {
  name: 'Practice',
  data () {
    return {
      story: ''
    }
  },
  methods: {
    onFormSubmit () {
      // admitted and flying played accepts this is not a verb but ok so listens and watches and
      
      const usedWords = Analyzer.findPracticedVerbs(this.story)
      console.log(usedWords)
      usedWords.forEach(Progress.increase)
      console.log(Progress.getUsedWords())
      
    },
  }
}
</script>
