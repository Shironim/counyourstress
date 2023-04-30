// https://nuxt.com/docs/api/configuration/nuxt-config
import {defineNuxtConfig} from 'nuxt/config'

export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  alias:{
    '@assets' : '/assets',
    '@factories' : '/factories'
  },
  css:[
    '@/assets/stylesheets/index.scss'
  ]
})
