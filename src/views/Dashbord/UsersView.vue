<script setup>
import {apiGetUsers} from "@/api/users.js";
import {ref} from "vue";

// 双向绑定，不然等数据加载出来后页面无法刷新
let tableData = ref([]);

const getTableList = async () => {
  const res = await apiGetUsers().catch(() => {
  }).finally(() => {
  });

  if (res) {
    tableData.value = res.data
  }
}

getTableList()


</script>


<template>
  <el-table
      :data="tableData"
      stripe
      style="width: 100%">
    <el-table-column
        prop="name"
        label="姓名"
        width="180">
    </el-table-column>
    <el-table-column
        prop="age"
        label="年龄"
        width="180">
    </el-table-column>
    <el-table-column
        prop="email"
        label="邮箱">
    </el-table-column>
  </el-table>
</template>

<style scoped>

</style>