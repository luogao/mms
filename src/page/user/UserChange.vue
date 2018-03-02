<template>
  <div class="user-block">
    <div class="page-title">
        <h2>用户切换</h2>
    </div>
    <div class="page-body">
      <el-card class="box-card mt10">
          <h3 class="mt0"><span class="info-label">当前用户</span>赵银玲</h3>
          <h3 class="mt0"><span class="info-label">权限</span>1级</h3>
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
    return {};
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
            duration:1000,
            onClose: ()=>{
                this.$router.replace({ path: '/login' })
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
