export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {color: '#f00'},
  /*
   ** Global CSS
   */
  css: [
    '@/assets/scss/index.scss'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~plugins/coreui-register'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-moduleule',
    // Doc: https://github.com/nuxt-community/stylelint-module
    // '@nuxtjs/stylelint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/vaso2/nuxt-fontawesome
    // ['nuxt-fontawesome', {
    //   component: 'fa',
    //   imports: [
    //     {
    //       set: '@fortawesome/free-solid-svg-icons',
    //       icons: ['fas']
    //     }
    //   ]
    // }],
    // // Doc: https://bootstrap-vue.js.org
    // ['bootstrap-vue/nuxt', {
    //     bootstrapCSS: false,
    //     bootstrapVueCSS: false
    // }],
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  server: {
    port: process.env.NUXT_PORT,
    host: process.env.NUXT_HOST
  },
  /*
   ** Build configuration
   */
  build: {
    babel: {
      presets({ isServer }) {
        return [
          [
            require.resolve('@nuxt/babel-preset-app'),
            // For nuxt-edge users
            // require.resolve('@nuxt/babel-preset-app-edge'),
            {
              buildTarget: isServer ? 'server' : 'client',
              corejs: { version: 3 }
            }
          ]
        ]
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
    }
  }
}
