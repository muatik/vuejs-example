<template>
  <div id="app">
    <nav class="nav nav-tabs justify-content-center mt-4">
      <li class="nav-item">
        <router-link :to="{name: 'Index'}" class="nav-link">Verbs</router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{name: 'Practice'}" class="nav-link">Practice</router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{name: 'Stats'}" class="nav-link">Stats</router-link>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
