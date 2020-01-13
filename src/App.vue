<template>
  <div id="app">
    <div class="l-container">
      <SectionMap />
      <NavMap />
    </div>
  </div>
</template>

<script>
import SectionMap from "./components/SectionMap.vue";
import NavMap from "./components/NavMap.vue";

export default {
  name: "app",
  components: {
    SectionMap,
    NavMap
  }
};
</script>

<style lang="scss">
@import "./styles/global.scss";
</style>
