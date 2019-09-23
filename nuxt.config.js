
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'GIT 540 - Fall 2019'||process.env.npm_package_name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/sparkyfav.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/materialize'
  ],
    /*
  ** Global CSS
  */
  css: [
    '@/node_modules/materialize-css/dist/css/materialize.min.css',
    '@/assets/css/gitstyle.css'
  ],
  /*
  ** Nuxt.js dev-modules
  */
 
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@bazzite/nuxt-optimized-images',
  ],
  optimizedImages: {
    optimizeImages: false
  },
  router: {
    linkActiveClass: 'active-link'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      config.node = {
          fs: 'empty'
      }
    }
  },
}
