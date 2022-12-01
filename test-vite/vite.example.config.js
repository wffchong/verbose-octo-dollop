import { defineConfig } from 'vite'

// 这里保存的时学习的时候的一些配置

export default defineConfig({
    optimizeDeps: {
        exclude: ['lodash-es'], // 不进行依赖预构建
        envPrefix: 'ENV_' // 配置VITE注入客户端变量的前缀
    }
})

// /** @type {import('vite').UserConfig} */
// const viteConfig = {
//     optimizeDeps: {
//         include: ['lodash-es']
//     }
// }
