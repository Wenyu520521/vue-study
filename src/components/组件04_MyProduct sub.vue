<template>
  <div class="my-product">
    <h3>标题: {{ title }}</h3>
    <p>价格: {{ price }}元</p>
    <p>{{ intro }}</p>
    <button @click="subFn">宝刀，砍一元</button>
  </div>
</template>

<script>
import EventBus from '../EventBus/index.js';
export default {
  props: ['index','title', 'price', 'intro'],
  methods:{
    subFn(){
      // eslint-disable-next-line vue/no-mutating-props
      /**
       *  错误：单向数据流 （从父到子的数据流向）
       *  1.子组件改父组件传入的数据不通知父亲，会导致数据的不一致性
       *  2.vue规定props“本身”只读的（不允许重新赋值）
       */
      // this.price = this.price - 1

      // 2. this.$emit() 主动触发事件
      // this.$emit('父组件里的自定义事件名'，子要向父传递的值)
      // this.$emit('subprice',this.index,1)

      // 目标：跨组件传值
      EventBus.$emit('send',this.index,1)
    }
  }
}
</script>

<style>
.my-product {
  width: 400px;
  padding: 20px;
  border: 2px solid #000;
  border-radius: 5px;
  margin: 10px;
}
</style>