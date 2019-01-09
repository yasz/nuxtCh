<script>
import slide3 from "~/assets/img/slides/3.jpg";
import slide2 from "~/assets/img/slides/2.jpg";
import slide1 from "~/assets/img/slides/1.jpg";
import Hexagon from "~/components/base/Hexagon.vue"
import HTML from 'vue-html'
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
    //  return h`<div>z</div>`
    let count = 9
    let trim = (<Hexagon bgPath={slide3}></Hexagon>)
    let a = []
    a.push(<Hexagon bgPath={slide3}></Hexagon>)
    a.push(<Hexagon bgPath={slide2}></Hexagon>)
    a.push(<Hexagon bgPath={slide1}></Hexagon>)
    
    let head = (<div ref="box" class="box">{a}</div>)

    return head
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

