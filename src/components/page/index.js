import pageComponent from './page'
const defaultComponentName = 'page'

const Page = {
    install(Vue, options = {}) {
        const componentName = options.componentName || defaultComponentName
        Vue.component(componentName, pageComponent)
    }
}

export default Page