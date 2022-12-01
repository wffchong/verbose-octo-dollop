import { defineConfig } from 'vite'
import viteBaseConfig from './vite.base.config'
import viteDevConfig from './vite.dev.config'
import viteProdConfig from './vite.prod.config'

const envResolver = {
    serve: () => {
        console.log('开发环境')
        return { ...viteBaseConfig, ...viteDevConfig }
    },
    build: () => ({ ...viteBaseConfig, ...viteProdConfig })
}

export default defineConfig(({ command }) => {
    return envResolver[command]()
})
