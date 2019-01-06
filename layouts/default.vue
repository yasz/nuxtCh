<template>
  <div>
    <Nav/>
    <nuxt/>
    <Footer/>
  </div>
</template>


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
