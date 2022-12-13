import { RouterObject } from './interface'
import { useRoutes, Navigate } from 'react-router-dom'
import PageA from '../views/PageA'
import PageB from '../views/PageB'

// 导入所有的路由
const metaRouters: Record<string, any> = import.meta.glob('./modules/*.tsx', {
    eager: true
})

console.log(metaRouters)

// 处理路由
export const routerArray: RouterObject[] = []

// 添加路由信息
Object.keys(metaRouters).forEach(item => {
    Object.keys(metaRouters[item]).forEach(key => {
        routerArray.push(...metaRouters[item][key])
    })
})

const rootRouter: RouterObject[] = [
    {
        path: '/',
        element: <Navigate to='/pageA' />
    },
    ...routerArray,
    {
        path: '/pageA',
        element: <PageA />
    },
    // {
    //     path: '/pageB',
    //     element: <PageB />
    // }
]

const router = () => {
    const routes = useRoutes(rootRouter)
    return routes
}

export default router
