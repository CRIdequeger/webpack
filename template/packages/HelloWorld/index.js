import HelloWorld from './src/HelloWorld'

HelloWorld.install = function (Vue) {
  Vue.component(HelloWorld.name, HelloWorld)
}

export default HelloWorld
