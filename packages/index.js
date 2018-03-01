import gaSidebar from './sidebar/index';
import gaButton from './button/index';
import gaIcon from './icon/index';
import gaMore from './more/index';

import './style/default.scss';


const components = {
    gaSidebar,
    gaButton,
    gaIcon,
    gaMore
}

const install = function (Vue, locale) {
    for (let i in components) {
        Vue.component(i, components[i])
    }
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

components.install = install

export default components;