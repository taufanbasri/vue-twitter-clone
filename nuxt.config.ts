import { env } from "process";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  runtimeConfig: {
    jwtAccessSecret: env.JWT_ACCESS_TOKEN_SECRET,
    jwtRefreshSecret: env.JWT_REFRESH_TOKEN_SECRET
  }
})
