<template>
  <div id="app">
    <page-header v-show="$route.path!=='/'"/>
    <router-view/>
  </div>
</template>

<script>

import pageHeader from 'components/pageHeader'
export default {
  name: 'app',
  components: { pageHeader
  }
}
</script>

<style>


</style>
