<script>
import slide3 from "~/assets/img/slides/3.jpg";
import slide2 from "~/assets/img/slides/2.jpg";
import slide1 from "~/assets/img/slides/1.jpg";
import Hexagon from "~/components/base/Hexagon.vue";
export default {
  components: {
    Hexagon
  },
  mounted: function() {
    // 基于入参动态生成模板

    console.log(`hello ${this.$refs.box}`);
  },
  props: ["hello"],
  methods:{
    f1(){alert('hello,footer')},
    sonFun(){alert('sofun')}
  },
  render: function(h) {
    let hgNum = this.hgNum > 9 ? 9 : this.hgNum;
    // 初始化全部隐藏，有哪几个就点亮几个
    let ag = [
      [5],
      [3, 5],
      [2, 3, 5],
      [2, 3, 4, 5],
      [2, 3, 4, 5, 8],
      [2, 3, 4, 5, 8, 9],
      [2, 3, 4, 5, 6, 8, 9],
      [1, 2, 3, 4, 5, 6, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9]
    ];

    let has = [];
    for (let i = 1; i < 10; i++) {
      if(ag[hgNum - 1].includes(i)){
        has.push(<Hexagon bgPath={slide2} visibility="visible" />);
      }else{
        has.push(<Hexagon bgPath={slide1} visibility="hidden"/>);        
      }
    }

    let rsa = (
      <div ref="box" class="box">
        <div class="lineF">{has.slice(0,3)}</div>
        <div class="lineEven">{has.slice(3,6)}</div>
        <div class="lineOdd">{has.slice(6,9)}</div>
        
      </div>
    );
    return rsa;
  },
  data: function() {
    return {
      hgNum: 9,
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

