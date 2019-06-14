const pkg = require('./package')


module.exports = {
  
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */

  css: [
    './assets/css/style.css',
    './assets/css/style.scss',
    './assets/css/style.less',
    'ant-design-vue/dist/antd.less',

  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    './plugins/plugin'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios'
  ],

  axios: {
    proxy: true,
    prefix: '/api', // baseURL
    credentials: true,
  },
  proxy: {
    '/api/': {
      target: 'http://localhost:8090', // 代理地址
      changeOrigin: true,
      // pathRewrite: {
      //   '^/api': '/api'
      // },
    },
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    loaders: {
      less: { 
        javascriptEnabled: true,
        modifyVars: {
            'primary-color': '#BDB76B',
            // 'component-background':'#BDB76B', 
            'border-radius-base': '2px'
          }
          
      }
    },
    extend(config, ctx) {
      ctx.loaders.less.javascriptEnabled = true
     
    }
  }
}
