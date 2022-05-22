<template>
  <div style="position: relative">
    <TheHeader/>
    <Nuxt/>
    <TheFooter/>
  </div>
</template>

<script>
import TheHeader from "../components/TheHeader";
import TheFooter from "../components/TheFooter";

export default {
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

<style lang="scss">
@import '../node_modules/@splidejs/splide/src/css/core/index';
</style>
