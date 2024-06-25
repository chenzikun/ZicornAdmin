<script setup>
import {ElContainer, ElHeader, ElAside} from 'element-plus'
</script>

<template>
  <div class="common-layout">
    <el-container class="mx-auto flex h-full">
      <el-header style="background-color: #79bbff">导航栏</el-header>
      <el-container>
        <el-aside style="background-color: #001529">
          <el-menu index="1">
            <el-sub-menu index="1">
              <template #title></template>
              <el-menu-item-group>
                <el-menu-item index="1-1">Option 1</el-menu-item>
                <el-menu-item index="1-2">Option 1</el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>
          </el-menu>
        </el-aside>
        <el-main>信息栏</el-main>
      </el-container>
      <el-footer >footer</el-footer>
    </el-container>
  </div>
</template>


<script>

</script>

<style scoped>

</style>