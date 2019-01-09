<script>
import slide3 from "~/assets/img/slides/3.jpg";
import slide2 from "~/assets/img/slides/2.jpg";
import slide1 from "~/assets/img/slides/1.jpg";
import Hexagon from "~/components/base/Hexagon.vue"
export default {
  components:{
    Hexagon
  }
  ,mounted: function () {
    // 基于入参动态生成模板
    console.log(`hello ${this.$refs.box}`)

  }
  ,props:['hello']
  ,render: function (h,context) {
    console.log(`hello2${context}`)
    return (<div ref="box" class="box"><Hexagon bgPath={slide3}></Hexagon></div>)
  }
  ,data: function() {
    return {
      slide3: slide3,
      slide2: slide2,
      slide1: slide1
    };
  }
};
</script>

<style scoped>
.box {
  overflow: hidden;
  width: 400px;
  max-height: 500px;
}
.lineF,
.lineOdd,
.lineEven {
  overflow: hidden;
}
.lineOdd {
  margin-top: -30px;
}
.lineEven {
  padding-left: 55px;
  margin-top: -30px;
}

</style>

