import loading from './loading.vue';

const Loading = {}
//Vue.use时会自动调用install方法;
Loading.install = function (Vue) {
    //1. 生成一个Vue的子类 同时这个子类也就是组件
    const LoadingConstructor = Vue.extend(loading);
    //2. 生成一个该子类的实例
    const instance = new LoadingConstructor();
    // 创建一个div;
    const div = document.createElement('div');
    // 并将此div加入全局挂载点内部
    instance.$mount(div);
    document.body.appendChild(instance.$el)
    //注入vue的原型链
    Vue.prototype.$loading = {
        show() {
            instance.show = true
        },
        close(){  
            instance.show = false
        }
    }
}
export default Loading
