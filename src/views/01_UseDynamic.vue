<template>
  <div>
    <button @click="comName = 'UserName'">账号密码填写</button>
    <button @click="comName = 'UserInfo'">个人信息填写</button>

    <p>下面显示注册组件:</p>
    <div style="border: 1px solid red">
      <!-- vue内置的组件component，可以动态显示组件 -->
      <!-- <component :is="comName"></component> -->

      <!-- vue内置的keep-alive组件把要缓存的组件包起来 -->
      <!-- 组件缓存的好处：不会频繁的创建和销毁组件，提升性能使页面更快的呈现 -->
      <keep-alive>
         <component :is="comName"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
// 目标：动态组件 - 切换组件显示
// 场景：同一个挂载点切换不同组件显示
// 1.创建要被切换的组件 -- 标签+样式
// 2.引入到要展示的vue文件内，注册
// 3.变量-承载要显示的组件名
// 4.设置挂载点<component :is="变量名"></component>
// 5.点击按钮-切换变量名的值为要显示的组件名

import UserInfo from '../components/01/UserInfo.vue'
import UserName from '../components/01/UserName.vue'
export default {
  data() {
    return {
      comName: UserName,
    }
  },
  methods: {},
  components: {
    UserInfo,
    UserName,
  },
}
</script>
<style scoped></style>
