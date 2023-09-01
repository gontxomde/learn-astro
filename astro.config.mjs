

import { defineConfig } from 'astro/config';
import vercelServerless from '@astrojs/vercel/serverless';
// import image from "@astrojs/image"

export default defineConfig({
  output: 'server',
  adapter: vercelServerless(),
  // integrations:[
  //   image({
  //     serviceEntrypoint: '@astrojs/image/sharp'
  //   })
  // ]
});