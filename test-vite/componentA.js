// import componentACss from './componentA.module.css'
import componentALess from './componentA.module.less';

console.log('componentALess', componentALess)

const div = document.createElement('div')

document.body.appendChild(div)

div.className = componentALess.footerContent
