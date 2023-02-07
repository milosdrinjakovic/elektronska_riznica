import {sr} from './locales/sr.js'
import {lat} from './locales/lat.js'

module.exports = {
    env: {
        baseUrl: 'https://cms.bitlab.host/api',
        bucketUrl: 'https://cms.bitlab.host/api/data/93/',
        site: 93,
        domain: 'https://elektronskariznica.bitlab.host/',
        flip: 'SP-A5E4E7C9-66B6DE1B-59EC00D3-80AF0562'
    },
    server: {
        port: 3018, // default: 3000 
        host: '0.0.0.0' // default: localhost
    },
    head: {
        meta: [
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {name: 'mobile-web-app-capable', hid: 'mobile-web-app-capable', content: 'yes'},

        ]
    },
    modules: [
        '@nuxtjs/i18n',
        'nuxt-webfontloader',
        'vue-social-sharing/nuxt',
        '@nuxtjs/axios',
        ['nuxt-device-detect', {
            detectOnStart: true,
            refreshOnResize: true
        }]
    ],

    buildModules: [
        '@nuxtjs/vuetify',
        // With options
        '@nuxtjs/moment'
    ],
    plugins: [
        {
            src: '~/plugins/carousel.js',
            ssr: false
        },
        {
            src: '~/plugins/global-components.js'
        },
    ],
    i18n: {
        /* module options */
        locales: [
            {
                code: 'sr',
                name: 'Ћирилица'
            },
            {
                code: 'lat',
                name: 'Latinica'
            },
        ],
        defaultLocale: 'sr',
        vueI18n: {
            fallbackLocale: 'sr',
            messages: {
                sr,
                lat
            }
        }
    },
    axios: {
        baseURL: 'https://cms.bitlab.host/api',
        headers: {
            site: 93
        }
        // proxy: true
    },
    vuetify: {
        extractCss: true,
        theme: {
            themes: {
                dark: false,
                light: {
                    primary: '#fe8202',
                    accent: '#008bc3',
                    secondary: '#1A1A1D',
                    error: '#B71C1C',
                    success: '#2E7D32'
                }
            },
            options: {
                variations: false
            }
        },
        treeShake: true,
        defaultAssets: {
            font: false,
            icons: 'mdi'
        },
        customVariables: ['~/assets/style/base.scss'],
        rtl: false
    },
    moment: {
        defaultLocale: 'sr',
        locales: ['sr', 'sr-cyrl']
    },
    webfontloader: {
        // add Google Fonts as "custom" | workaround required
        custom: {
            families: [
                'Roboto+Condensed:n4'
            ],
            urls: [
                'https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap'
            ]
        }
    },
}