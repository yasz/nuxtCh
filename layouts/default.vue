<template>
  <div>
    <Nav/>
    <nuxt class="main-wrapper" />
    <Footer/>
  </div>
</template>

<style>
.main-wrapper {
    margin-top: 64px;
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
