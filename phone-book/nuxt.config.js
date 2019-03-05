const pkg = require('./package');

module.exports = {
    mode    : 'universal',
    loading : { color : '#3f51b5' },

    /*
  ** Headers of the page
  */
    head : {
        title : pkg.name,
        meta  : [
            { charset : 'utf-8' },
            { name : 'viewport', content : 'width=device-width, initial-scale=1' },
            { hid : 'description', name : 'description', content : pkg.description }
        ],
        link : [
            { rel : 'icon', type : 'image/x-icon', href : '/favicon.ico' },
        ]
    },

    /*
  ** Customize the progress-bar color
  */
    loading : { color : '#fff' },

    /*
  ** Global CSS
  */
    css : [
    ],

    /*
  ** Plugins to load before mounting the App
  */
    plugins : [
        {src : '~/plugins/fireauth.js'},
    ],
    analyze : {
        analyzerMode : 'static'
    },
    router : {
        middleware : 'router-auth'
    },
    // vendor : [
    //     'firebase',
    //     'vuetify'
    // ],

    /*
  ** Nuxt.js modules
  */
    modules : [
    // Doc: https://github.com/nuxt-community/axios-module#usage
        '@nuxtjs/axios',
        // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
        '@nuxtjs/bulma'
    ],
    /*
  ** Axios module configuration
  */
    axios : {
    // See https://github.com/nuxt-community/axios-module#options
    },

    /*
  ** Build configuration
  */
    build : {
        vendor : [
            'firebase',
            'firebase-auth',
            'vuexfire'
        ],
        postcss : {
            preset : {
                features : {
                    customProperties : false
                }
            }
        },
        /*
    ** You can extend webpack config here
    */
        extend(config, ctx) {
            // Run ESLint on save
            if (ctx.isDev && ctx.isClient) {
                config.module.rules.push({
                    enforce : 'pre',
                    test    : /\.(js|vue)$/,
                    loader  : 'eslint-loader',
                    exclude : /(node_modules)/,
                    options : {
                        fix : true
                    }
                });
            }
        }
    }
};