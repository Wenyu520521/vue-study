<template>
  <div>
    <MyTable :arr="list"></MyTable>
    <MyTable :arr="list">
      <!-- scope:{row:obj} -->
      <template v-slot="scope">
        <a :href="scope.row.headImgUrl">{{ scope.row.headImgUrl }}</a>
      </template>
    </MyTable>
    <MyTable :arr="list">
      <template v-slot="scope">
        <img :src="scope.row.headImgUrl" style="width: 100px;">
      </template>
    </MyTable>
  </div>
</template>

<script>
import MyTable from '../components/03/MyTable.vue'
export default {
  components: {
    MyTable,
  },
  data() {
    return {
      list: [
        {
          name: '小传同学',
          age: 18,
          headImgUrl:
            'http://yun.itheima.com/Upload/./Images/20210303/603f2d2153241.jpg',
        },
        {
          name: '小黑同学',
          age: 25,
          headImgUrl:
            'http://yun.itheima.com/Upload/./Images/20210304/6040b101a18ef.jpg',
        },
        {
          name: '智慧同学',
          age: 21,
          headImgUrl:
            'http://yun.itheima.com/Upload/./Images/20210302/603e0142e535f.jpg',
        },
      ],
    }
  },
  methods: {},
}
</script>
<style scoped></style>
