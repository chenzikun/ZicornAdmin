<script setup>

import {LoginForm} from "@/views/Authorization/components/index.js";
</script>

<template>
  <el-container class="el-row--flex">
    <el-col :span="12" class="welcome-login">
      <div>
        <img class="logo" src="../../assets/imgs/logo.png" alt="">
        <span class="text-20px font-bold">ElementAdmin</span>
      </div>
      <div class="flex justify-center items-center">
        <div>
          <img src="../../assets/svgs/login-box-bg.svg" alt="" style="width: 350px;">
          <div class="">欢迎使用本管理系统</div>
        </div>

      </div>
    </el-col>
    <el-col :span="12">
      <LoginForm></LoginForm>
    </el-col>
  </el-container>
</template>

<script>

</script>

<style scoped>
.logo {
   width: 48px;
   height: 48px;
   margin-right: 10px;
}
.welcome-login{
  padding: 30px;
  background-color: #353e55;
}

.text-20px {
  font-size: 20px;
  color: white;
}


</style>