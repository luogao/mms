<template>
  <div class="outer-apply">
    <div class="page-title">
        <h2>采购单填写</h2>
    </div>
    <el-form ref="form" :model="form" label-position="top">
        <div class="inline-form-item">
            <el-form-item label="申请日期">
                <el-input v-model="form.date"></el-input>
            </el-form-item>
            <el-form-item label="截止日期">
                <el-input v-model="form.user"></el-input>
            </el-form-item>
        </div>
        <div class="inline-form-item">
            <el-form-item label="申请数量">
                <el-input v-model="form.vendor"></el-input>
            </el-form-item>
            <el-form-item label="申请人">
                <el-input v-model="form.vendor"></el-input>
            </el-form-item>
        </div>
        <el-table
            :data="tableData"
            stripe
            border
            style="width: 100%">
            <el-table-column
            prop="code"
            label="编号"
            width="180">
            <template slot-scope="scope">
                <el-input v-model="scope.code"></el-input>
            </template>
            </el-table-column>
            <el-table-column
            prop="name"
            label="名称"
            width="180">
            <template slot-scope="scope">
                <el-input v-model="scope.name"></el-input>
            </template>
            </el-table-column>
            <el-table-column
            prop="specification"
            label="截止日期">
            <template slot-scope="scope">
                <el-input v-model="scope.specification"></el-input>
            </template>
            </el-table-column>
            <el-table-column
            prop="num"
            label="申请部门">
            <template slot-scope="scope">
                <el-input v-model="scope.num"></el-input>
            </template>
            </el-table-column>
            <el-table-column
            prop="num"
            label="申请数量">
            <template slot-scope="scope">
                <el-input v-model="scope.num"></el-input>
            </template>
            </el-table-column>
            <el-table-column
            prop="remarks"
            label="备注">
             <template slot-scope="scope">
                <el-input v-model="scope.prices"></el-input>
            </template>
            </el-table-column>
        </el-table>
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
      },
      tableData: [{
          code: '',
          name: '',
          specification: '',
          num:'',
          prices:''
        }]
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
  .el-table{
      margin-bottom: 50px;
  }
}
</style>
