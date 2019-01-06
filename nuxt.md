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

```vue

```

`componets/Footer.vue`

```vue
<template>
  <footer>
    尾部
  </footer>
</template>
```

