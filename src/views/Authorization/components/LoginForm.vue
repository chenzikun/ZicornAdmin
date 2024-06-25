<script setup>
import {CryptoJS} from 'crypto-js';
import {apiLogin} from "@/api/user/login.js";

</script>

<script>

export default {
  name: 'loginForm',

  data() {
    let checkEmail = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('账号不能为空'));
      }
    }
    return {
      loginForm: {
        password: '',
        email: '',
      },
      rules: {
        email: [
          {validator: checkEmail, trigger: 'blur'}
        ]
      }
    };
  },

  methods: {
    submitForm() {
      console.log(this.loginForm.email)
      console.log(this.loginForm.password)
      let cry_password = CryptoJS.SHA256(this.loginForm.password).toString()
      apiLogin({email: this.loginForm.email, password: cry_password})
    }
  }
}
</script>


<template>
  <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" label-width="100px" class="demo-ruleForm">
    <el-form-item label="账号" prop="email">
      <!--   可以通过v-model.number限定model的类型   -->
      <el-input v-model="loginForm.email"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="submitForm">登录</el-button>
    </el-form-item>
  </el-form>

</template>
