import { defineConfig } from 'vite'

export default defineConfig({
    optimizeDeps: {
        exclude: ['lodash-es'] // 不进行依赖预构建
    }
})

// /** @type {import('vite').UserConfig} */
// const viteConfig = {
//     optimizeDeps: {
//         include: ['lodash-es']
//     }
// }
