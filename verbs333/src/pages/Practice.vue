<template>
  <div class="container-fluid">
    <form 
      @submit.prevent="onFormSubmit"
      class="col-md-7 m-4 center mx-auto">
      <div class="form-group">
        <label for="exampleFormControlTextarea1">Type a story</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="8"
          placeholder="type a text which contains the verbs you are learning. "></textarea>
      </div>
      <button type="submit" class="btn btn-secondary">Submit</button>
    </form>
  </div>
</template>

<script>

export default {
  name: 'Practice',
  data () {
    return {
    }
  },
  methods: {
    onFormSubmit () {
      alert('a')
    }
  }
}
</script>
