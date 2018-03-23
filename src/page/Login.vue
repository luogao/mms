<template>
  <div class="login">
    <el-form :model="form" label-position="top" :rules="rules" ref="loginForm" @submit.native.prevent @submit="onSubmit">
      <h1 class="text-center">物料管理系统</h1>
      <el-form-item prop="name">
          <el-input placeholder="请输入用户名" v-model="form.name">
            <template slot="prepend">用户名</template>
          </el-input>
      </el-form-item>
      <el-form-item prop="psw">
          <el-input type="password" placeholder="请输入密码" v-model="form.psw">
            <template slot="prepend">密码</template>
          </el-input>
      </el-form-item>
      <el-form-item class="action-btn-group">
          <el-button type="primary" @click="onSubmit" native-type="submit">登录</el-button>
      </el-form-item>
      <h2 class="text-center">西安职业技术学院</h2>
      <!-- <div class="logo-block">
        <img src="../assets/logo.jpg" alt="">
      </div> -->
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
      },
      userArray: ["张力", "李智", "王梦", "李娟", "张华"]
    };
  },
  methods: {
    submitForm(formName) {
      let vm = this;
      this.$refs[formName].validate(valid => {
        if (valid) {
          if (
            vm.userArray.indexOf(vm.form.name) !== -1 &&
            vm.form.psw == 123456
          ) {
            localStorage.setItem("mmsUser", vm.form.name);
            this.$message({
              message: "登录成功",
              type: "success",
              duration: 1000,
              onClose: () => {
                vm.$router.replace({ path: "/" });
              }
            });
          } else {
            this.$message({
              message: "登录失败，用户名或密码错误",
              duration: 1000,
              type: "warning"
            });
          }
        } else {
          this.$message({
            message: "登录失败",
            duration: 1000,
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
<style lang="scss">
@import "../assets/css/_variables.scss";
// .logo-block {
//   position: absolute;
//   bottom: 0;
//   right: 0;
//   img {
//     width: 130px;
//     box-shadow: 0px 4px 10px rgba(209, 42, 27, 0.2);
//     display: block;
//     border-radius: 50%;
//     margin: auto
//   }
// }
.login {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  .el-form {
    max-width: 580px;
    box-sizing: border-box;
    padding: 30px;
    background-color: $main_color;
    border-radius: 5px;
    width: 50%;
    position: relative;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
    .el-input__inner {
      border-radius: 0 !important;
    }
    .el-input-group__append,
    .el-input-group__prepend {
      width: 50px !important;
      border-radius: 0 !important;
      color: #000 !important;
      background: green;
      border-color: green;
    }
    .action-btn-group {
      .el-button {
        background: blue;
      }
    }
  }
}
</style>
