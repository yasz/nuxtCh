https://down.cnwebe.com/201807/201807153321.zip



# resource

https://zh.nuxtjs.org/guide/installation

[hello,world](http://jspang.com/post/Nuxt.js.html#toc-821)

https://segmentfault.com/a/1190000013139139

layout/default.vue引入components/Nav.vue

https://blog.csdn.net/weixin_36185028/article/details/84541676

https://segmentfault.com/q/1010000011799672



surmo

https://www.jianshu.com/p/871c604d9aa2

https://segmentfault.com/a/1190000011418518



Element UI、vue-antd、AntDesign、vue-beauty

https://github.com/iview/iview



# assets/static[区别](https://segmentfault.com/q/1010000009842688)

`static`放不会变动的文件 `assets`相反



# 目录





# 启动



```shell
#参考h5.md下的npm/yarn安装教程；
yarn create nuxt-app 

npm r babel-plugin-import -D 
npm i vant -S #yarn add vant

yarn install
```
# 引包

## vant

`nuxt.config.js`

```vue
plugins: [
    './plugins/vant'
  ],
```
`plugins/vant.js`

```vue
import Vue from 'vue';
import { Button, Cell } from 'vant';
import 'vant/lib/index.css';

Vue.use(Button);
```

## boostrap

https://bootstrap-vue.js.org/docs/

```
yarn add bootstrap-vue
```

**nuxt.config.js**

```vue
{
  modules: [
    'bootstrap-vue/nuxt',

    // Or if you have custom bootstrap CSS...
    ['bootstrap-vue/nuxt', { css: false }],
  ]
}
```

# 最小化portal

`pages/xxx.vue`(xxx=index/about/contact)

```vue
<template>
  <div>
      <h2>xxx page</h2>
  </div>
</template>
```

`layouts/default.vue`[template]

```vue
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
```

## 导航

`componets/Nav.vue`

```vue
<template>
  <header>
    <nav>导航栏
      <ul>
        <li>
          <nuxt-link :to="{name:'index'}">HOME</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="{name:'about'}">about</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="{name:'contact'}">contact</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>
```

这里做成动态的比较方便



`componets/Footer.vue`

```vue
<template>
  <footer>
    尾部
  </footer>
</template>
```



index是默认的内容，我们将其重定向到home

```vue
<script>
export default {
  fetch ({ params, redirect }) {
    redirect(301, '/home')
  }
}
</script>
```

https://github.com/nuxt/nuxt.js/issues/1843



## FOOTER

[back-to-top工具](https://www.npmjs.com/package/vue-backtotop)

```
yarn add vue-backtotop
编辑D:\2.dev\h5\nuxtCh\node_modules\vue-backtotop\package.json
增加^
```

https://yarnpkg.com/lang/zh-hans/docs/dependency-versions/

## 六边形侧边导航
基础六边形
```vue
<template>
    <div class="boxF">
        <div class="boxS">
          <div class="boxT" :style="`background-image: url(${bgPath}); background-size:cover; visibility:${visibility}`">
            <div class="overlay">
              <a href="#">+</a>
            </div>
          </div>
        </div>
      </div>
</template>
<script>
export default {
    name: 'Hexagon',
    props:['bgPath','visibility'],
}
</script>

<style scoped>
.boxF,
.boxS,
.boxT,
.overlay {
  width: 100px;
  height: 125px;
  overflow: hidden;
}
.boxF,
.boxS {
  visibility: hidden;
}
.boxF {
  transform: rotate(120deg);
  float: left;
  margin-left: 10px;
  -ms-transform: rotate(120deg);
  -moz-transform: rotate(120deg);
  -webkit-transform: rotate(120deg);
}
.boxS {
  transform: rotate(-60deg);
  -ms-transform: rotate(-60deg);
  -moz-transform: rotate(-60deg);
  -webkit-transform: rotate(-60deg);
}
.boxT {
  transform: rotate(-60deg);
  background: no-repeat 50% center;
  background-size: 125% auto;
  -ms-transform: rotate(-60deg);
  -moz-transform: rotate(-60deg);
  -webkit-transform: rotate(-60deg);
  visibility: visible;
}
.overlay {
  transition: all 250ms ease-in-out 0s;
  display: none;
  position: relative;
}
.overlay:hover {
  background-color: rgba(0, 0, 0, 0.6);
}
.boxT:hover .overlay {
  display: block;
}
.overlay a {
  display: inline-block;
  position: absolute;
  left: 50%;
  top: 50%;
  margin: -16px 0 0 -16px;
  border-radius: 3px;
  background-color: #d3b850;
  text-align: center;
  line-height: 32px;
  width: 32px;
  height: 32px;
  text-decoration: none;
  color: White;
  font-size: 18px;
  font-weight: bolder;
}
</style>

```

```vue
<template>
  <div class="box">
    <div class="lineF">
      <Hexagon :bgPath="slide1" style="overflow:hidden;"></Hexagon>
      <Hexagon :bgPath="slide2"></Hexagon>
      <Hexagon :bgPath="slide3"></Hexagon>
    </div>
    <div class="lineEven">
      <Hexagon :bgPath="slide2"></Hexagon>
      <Hexagon :bgPath="slide3"></Hexagon>
      <Hexagon :bgPath="slide1"></Hexagon>
    </div>
    <div class="lineOdd">
      <Hexagon :bgPath="slide3"></Hexagon>
      <Hexagon :bgPath="slide2"></Hexagon>
      <Hexagon :bgPath="slide1"></Hexagon>
    </div>
  </div>
</template> 
```

动态方案：

- [jsx不支持动态修改props](https://react-cn.github.io/react/docs/jsx-in-depth.html)，所以初始化先定义一个基本unit；
- 根据入参进行初始化显示不同的单元；
  - 5
  - 3,5
  - 2,3,5
  - 2,3,4,5
  - 2,3,4,5,8
  - 2,3,4,5,8,9
  - 2,3,4,5,6,8,9
  - 1,2,3,4,5,6,8,9
  - 1,2,3,4,5,6,7,8,9

```vue
render: function(h){
    let hgNum = this.hgNum > 9?9:this.hgNum
// 初始化全部隐藏，有哪几个就点亮几个
    let trim = (<Hexagon bgPath={slide3}></Hexagon>)
    let rs = []
    rs.push(<Hexagon visibility="hidden" bgPath={slide3}></Hexagon>)
    rs.push(<Hexagon bgPath={slide2}></Hexagon>)
    rs.push(<Hexagon bgPath={slide1}></Hexagon>)    
    let rsa = (<div ref="box" class="box">{a}</div>)
    return rsa
  }
```

动态增加
