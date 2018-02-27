<template>
  <div class="user-block">
    <div class="page-title">
        <h2>用户权限</h2>
    </div>
    <el-alert
        title="说明：最高1级可以维护，2级只能进行操作，不能维护"
        type="info"
        show-icon
        close-text="知道了">
    </el-alert>
    <el-card class="box-card mt10">
        <h3 class="mt0"><span class="info-label">当前用户</span>赵银玲</h3>
        <h3 class="mt0"><span class="info-label">权限</span>1级</h3>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
