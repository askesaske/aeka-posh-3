export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Aeka posh',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: ''},
            {name: 'csrf-token', content: '{{ csrf_token() }}'}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/icon.png'}
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '~assets/scss/style.scss',
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '@plugins/v-mask.js',
        '@plugins/repositories.js',
        '@plugins/wheel.js',
        '@plugins/v-scroll.js',
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        ['@nuxtjs/date-fns', {
            defaultLocale: 'ru'
        }],
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
        // https://go.nuxtjs.dev/content
        '@nuxt/content',
        ['vue-scrollto/nuxt', {
            duration: 1000
        }]
    ],
    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        baseURL: 'https://womenscommunity.kz:8443/',
    },

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        manifest: {
            lang: 'en'
        }
    },
    transition: {},
    server: {
        port: 3000
    },

    env: {
        API: '',
    },

    // Content module configuration: https://go.nuxtjs.dev/config-content
    content: {},

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
}
