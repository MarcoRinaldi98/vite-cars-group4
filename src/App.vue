<template>
  <div class="container">
    <AppHeader></AppHeader>
    <router-view></router-view>
  </div>
  
</template>

<script >
import AppHeader from './components/AppHeader.vue';

export default {
  components: {
    AppHeader
  }
}

</script>


<style lang="scss">
@use './styles/general.scss';
</style>
