import { RouterObject } from '../interface'
import React from 'react'
import lazyLoad from '../../util/lazyLoad'

const pageBRouter: RouterObject[] = [
    {
        path: '/pageB',
        element: lazyLoad(React.lazy(() => import('../../views/PageB/index')))
    }
]

export default pageBRouter