<template>
  <div class="container-fluid">
    <word-list
      :words="words"></word-list>
  </div>
</template>

<script>
import Verbs from '@/verbs.js'
import WordList from '@/components/WordList'

export default {
  name: 'IndexPage',
  components: {WordList},
  data () {
    return {
      words: Verbs
    }
  }
}
</script>
