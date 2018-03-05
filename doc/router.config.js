const Icon = r => require.ensure([], () => r(require('./view/zh/icon.md')), 'icon')
const Button = r => require.ensure([], () => r(require('./view/zh/button.md')), 'button')
const Radio = r => require.ensure([], () => r(require('./view/zh/radio.md')), 'radio')

const baseUrl = 'gaComponents';
const language = 'zh';
const url = `/${baseUrl}/${language}`;

const routes = [
    {
        path: `${url}/Icon`,
        component: Icon
    },
    {
        path: `${url}/Button`,
        component: Button
    },
    {
        path: `${url}/Radio`,
        component: Radio
    },
    {
        path: '/',
        redirect: `${url}/Icon`
    }, 
    {
        path: '*',
        redirect: `${url}/Icon`
    }
]

export default routes;