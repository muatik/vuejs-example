<template>
  <div class="container-fluid">
    <nav class="nav nav-tabs justify-content-center mt-4">
      <li class="nav-item">
        <a class="nav-link active" href="#">Verbs</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Practice</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Stats</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </nav>
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
