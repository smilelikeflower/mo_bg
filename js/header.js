<script type="text/x-template" id="hello-world-template">
  <p>Hello hello hello
  </p>
</script>
//注册一个全局组件
Vue.component('my-component', {
    template: '#hello-world-template',
    // data: function () {
    //     return {
    //         mes: '嘿嘿'
    //     }
    // }
});