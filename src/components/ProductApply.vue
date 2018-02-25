<template>
  <div class="outer-apply">
    <div class="page-title">
        <h2>生产需求填写</h2>
    </div>
    <el-form ref="form" :model="form" label-position="top">
        <div class="inline-form-item">
            <el-form-item label="产品名称">
                <el-input v-model="form.date"></el-input>
            </el-form-item>
            <el-form-item label="填写部门">
                <el-input v-model="form.user"></el-input>
            </el-form-item>
        </div>
        <div class="inline-form-item">
            <el-form-item label="需求日期">
                <el-input v-model="form.vendor"></el-input>
            </el-form-item>
            <el-form-item label="需求数量">
                <el-input v-model="form.vendor"></el-input>
            </el-form-item>
        </div>
        <el-form-item class="action-btn-group">
            <el-button type="primary" @click="onSubmit">提交申请</el-button>
        </el-form-item>
    </el-form>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        date: "",
        user: "",
        vendor: ""
      }
    };
  },
  methods: {
    onSubmit() {}
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.outer-apply {
  
}
</style>
