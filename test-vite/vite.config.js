import { defineConfig, loadEnv } from 'vite'
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

export default defineConfig(({ command, mode }) => {
    // 环境变量通常可以从 process.env 获得。
    // 注意 Vite 默认是不加载 .env 文件的，
    // 因为这些文件需要在执行完 Vite 配置后才能确定加载哪一个，
    // 举个例子，root 和 envDir 选项会影响加载行为。
    // 不过当你的确需要时，你可以使用 Vite 导出的 loadEnv 函数来加载指定的 .env 文件。
    // console.log(process.env)

    // mode是根据当前的环境的值所定下来的，当我们在敲下 yarn dev 的时候，默认是执行了 yarn dev --mode development
    // --mode 代表参数，比如可以执行 yarn dev --mode -dev 则 mode 的值为 dev
    console.log('mode -->', mode)
    // process.cwd() 当前node工作目录
    console.log('process.cwd -->', process.cwd())
    // 根据当前工作目录中的 `mode` 加载 .env 文件
    // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
    const env = loadEnv(mode, process.cwd(), 'ENV')
    // console.log(env)

    return envResolver[command]()
})
