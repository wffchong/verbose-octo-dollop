const fs = require('fs')
const path = require('path')

/**
 * @description 区分是文件还是文件夹
 *
 */
function diffDirAndFile(dirFilesArr = [], basePath = '') {
    const result = {
        dirs: [],
        files: []
    }
    dirFilesArr.forEach(name => {
        const currentFileStat = fs.statSync(path.resolve(__dirname, basePath + '/' + name))
        // 这里就拿到了一个个的文件或者文件夹
        // console.log('currentFileStat', currentFileStat)
        const isDirectory = currentFileStat.isDirectory()

        if (isDirectory) {
            result.dirs.push(name)
        } else {
            result.files.push(name)
        }
    })

    return result
}

/**
 * @description 获取Src下面所有的文件
 *
 */
function getTotalSrcDir(keyName) {
    // 获取所有的src下面的文件
    const result = fs.readdirSync(path.resolve(__dirname, '../src'))
    // 判断哪些是文件，那些是文件夹，只需要文件夹就行了
    const diffResult = diffDirAndFile(result, '../src')
    console.log('diffResult', diffResult)

    const resolveAliasesObj = {} // 放的就是一个一个的别名配置 @assets: xxx

    diffResult.dirs.forEach(dirName => {
        const key = `${keyName}${dirName}`
        const absPath = path.resolve(__dirname, '../src' + '/' + dirName)
        resolveAliasesObj[key] = absPath
    })
    return resolveAliasesObj
}

module.exports = ({ keyName = '@' } = {}) => {
    return {
        config: (config, env) => {
            // config: 目前的一个配置对象
            // console.log('config', config)
            // env: mode: string, command: string, ssrBuild: boolean
            // const { mode, command, ssrBuild } = env
            // console.log(env)

            // 需要拿到一个个的别名对象然后返回出去
            console.log('keyName', keyName)
            const resolveAliasesObj = getTotalSrcDir(keyName)
            console.log('resolveAliasesObj', resolveAliasesObj)
            return {
                resolve: {
                    alias: resolveAliasesObj
                }
            }
        }
    }
}
