<template>
  <div>
    <Hexagon visibility="visible" :bgPath=slidea @click="sonFun"></Hexagon>
  </div>
</template>

<script>
import Hexagon from "~/components/base/Hexagon.vue";
import slide2 from "~/assets/img/slides/2.jpg";

export default {
  components: {
    Hexagon
  },
  methods:{
    sonFun(param){
      alert("HELLO!!!")
    }
  },
  data: function() {
    return {
      slidea: slide2,
     
    };
  }
};
</script>
