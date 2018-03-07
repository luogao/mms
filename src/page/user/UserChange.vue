<template>
  <div class="user-block">
    <div class="page-title">
        <h2>用户切换</h2>
    </div>
    <div class="page-body">
      <el-card class="box-card mt10">
          <h3 class="mt0"><span class="info-label">当前用户</span>{{curuser}}</h3>
          <h3 class="mt0"><span class="info-label">权限</span>{{(userArray.filter(el=>{return el.name == curuser})[0].role)}}</h3>
      </el-card>
      <el-form class="mt10">
          <el-form-item class="action-btn-group">
              <el-button type="primary" @click="onUserChange">用户切换</el-button>
          </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const curuser = () => {
      return localStorage.getItem("mmsUser");
    };
    return {
      curuser: curuser(),
      userArray: [
        {
          name: "张力",
          role: "2级"
        },
        {
          name: "李智",
          role: "2级"
        },
        {
          name: "王梦",
          role: "1级"
        },
        {
          name: "李娟",
          role: "2级"
        },
        {
          name: "张华",
          role: "2级"
        }
      ]
    };
  },
  methods: {
    onUserChange() {
      this.$confirm("是否注销当前用户", "提示", {
        confirmButtonText: "是",
        cancelButtonText: "否",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "注销成功",
            duration: 1000,
            onClose: () => {
              this.$router.replace({ path: "/login" });
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消"
          });
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
