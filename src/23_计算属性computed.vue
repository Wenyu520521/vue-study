<template>
  <div>
    <p>{{ num }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      a: 10,
      b: 20,
    }
  },
  methods: {},
  // 计算属性：
  // 场景：一个变量的值，需要用另外的变量计算得来
  /**
   * 语法：
   * computed:{
   *  计算属性名(){
   *    return 值
   * }
   * }
   * 注意：计算属性和data属性都是变量，不能重名
   */
  computed: {
    num() {
      return this.a + this.b
    },
  },
}
</script>
<style scoped></style>
