<template>
  <div class="login">
    <el-form :model="form" label-position="top" :rules="rules" ref="loginForm">
        <h2 class="text-center">西安职业技术学院</h2>
        <h3 class="text-center">物料管理系统</h3>
        <el-form-item label="用户名" prop="name">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="psw">
            <el-input type="password" v-model="form.psw"></el-input>
        </el-form-item>
        <el-form-item class="action-btn-group">
            <el-button type="primary" @click="onSubmit">登录</el-button>
        </el-form-item>
        </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: null,
        psw: null
      },
      rules: {
        name: [{ required: true, message: "请输入用户名" }],
        psw: [{ required: true, message: "请输入密码" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      let vm = this 
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$message({
            message: "登录成功",
            type: "success",
            duration:1000,
            onClose: ()=>{
                vm.$router.replace({ path: '/' })
            }
          });
        } else {
          this.$message({
            message: "登录失败",
            duration:1000,
            type: "warning"
          });
          console.log("error submit!!");
          return false;
        }
      });
    },
    onSubmit() {
      this.submitForm("loginForm");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/css/_variables.scss";
.login {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $main_color;
  .el-form {
    box-sizing: border-box;
    padding: 30px;
    background-color: #fff;
    border-radius: 5px;
    width: 50%;
    height: 50%;
  }
}
</style>
