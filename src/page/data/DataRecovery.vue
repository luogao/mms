<template>
  <div class="data-backup">
    <div class="page-title">
        <h2>数据恢复</h2>
    </div>
    <div class="page-body">
      <el-upload
          ref="upload"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          action="/"
          :on-change="handleChange"
          :on-error="handleError"
          :on-success="handleSuccess"
          :auto-upload="false">
          <el-button slot="trigger" size="small" type="primary">选取恢复数据</el-button>
          <el-button style="margin-left: 10px;" size="small" v-if="selected" type="success" @click="submitUpload">开始恢复</el-button>
          <div slot="tip" class="el-upload__tip"></div>
      </el-upload>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: false
    };
  },
  methods: {
    handleError() {
      this.$message({
        message: "恢复成功",
        type: "success",
        duration: 1000
      });
    },
    handleSuccess() {
      this.$message({
        message: "恢复成功",
        type: "success",
        duration: 1000
      });
    },
    submitUpload() {
      this.$refs.upload.submit();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleChange(file) {
      this.selected = !this.selected;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
