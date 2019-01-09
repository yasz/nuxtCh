<template>
  <div>
    <Nav/>
    <nuxt class="main-wrapper" />
    <Footer/>
  </div>
</template>

<style scoped>
.main-wrapper {
    padding-top: 10px;
    padding-bottom: 10px;
}
</style>

<script>
import Nav from "~/components/Nav.vue";
import Footer from "~/components/Footer.vue";
export default {
  components: {
    Nav,
    Footer
  }
};
</script>
