import { defineConfig } from 'vite'

export default defineConfig({
    optimizeDeps: {
        // exclude: ['lodash-es'] // 不进行依赖预构建
    }
})
