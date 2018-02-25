<template>
  <div class="outer-apply">
    <div class="page-title">
        <h2>采购单查询</h2>
    </div>
    <el-form ref="form" :model="form" label-position="top">
        <div class="over-clear">
            <div class="inline-form-item">
                <el-form-item label="起始日期">
                    <el-input v-model="form.date"></el-input>
                </el-form-item>
                <el-form-item label="截止日期">
                    <el-input v-model="form.user"></el-input>
                </el-form-item>
            </div>
            <div class="inline-form-item">
                <el-form-item label="申请人">
                    <el-input v-model="form.reason"></el-input>
                </el-form-item>
                <el-form-item>
                </el-form-item>
            </div>
            <el-button class="pull-right" type="primary" @click="onSubmit">查询</el-button>
        </div>
        <el-table
            :data="tableData"
            stripe
            border
            style="width: 100%">
            <el-table-column type="index"></el-table-column>
            <el-table-column
            prop="code"
            label="编号">
            </el-table-column>
            <el-table-column
            prop="name"
            label="名称">
            </el-table-column>
            <el-table-column
            prop="name"
            label="截止日期">
            </el-table-column>
             <el-table-column
            prop="name"
            label="申请部门">
            </el-table-column>
            <el-table-column
            prop="num"
            label="申请数量">
            </el-table-column>
            <el-table-column
            prop="remarks"
            label="申请状态">
            </el-table-column>
        </el-table>
        
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
        reason: "",
        code: ""
      },
      //   tableData: [{
      //       code: '',
      //       name: '',
      //       specification: '',
      //       num:'',
      //       remarks:''
      //     }]
      tableData: []
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
  .el-form--inline .el-form-item {
    width: 50%;
  }
  .el-table {
    margin-top: 10px;
  }
}
</style>
