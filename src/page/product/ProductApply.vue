<template>
  <div class="outer-apply">
    <div class="page-title">
        <h2>生产需求填写</h2>
    </div>
    <div class="page-body">
        <el-form ref="form" :model="form" label-position="top">
            <div class="inline-form-item">
                <el-form-item label="产品名称">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="填写部门">
                    <el-input v-model="form.user"></el-input>
                </el-form-item>
            </div>
            <div class="inline-form-item">
                <el-form-item label="需求日期">
                <el-date-picker
                        v-model="form.date"
                        align="right"
                        type="date"
                        placeholder="选择日期"
                    >
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="需求数量">
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
                label="编号">
                <template slot-scope="scope">
                    <el-input v-model="scope.code"></el-input>
                </template>
                </el-table-column>
                <el-table-column
                prop="name"
                label="名称">
                <template slot-scope="scope">
                    <el-input v-model="scope.name"></el-input>
                </template>
                </el-table-column>
                <el-table-column
                prop="specification"
                label="规格">
                <template slot-scope="scope">
                    <el-input v-model="scope.specification"></el-input>
                </template>
                </el-table-column>
                <el-table-column
                prop="num"
                label="数量">
                <template slot-scope="scope">
                    <el-input v-model="scope.num"></el-input>
                </template>
                </el-table-column>
                <el-table-column
                prop="num"
                label="需求部门">
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
                <el-button class="apply-btn" type="primary" @click="onSubmit">提交申请</el-button>
            </el-form-item>
        </el-form>
    </div>
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
      tableData: [
        {
          code: "",
          name: "",
          specification: "",
          num: "",
          prices: ""
        },
        {
          code: "",
          name: "",
          specification: "",
          num: "",
          prices: ""
        },
        {
          code: "",
          name: "",
          specification: "",
          num: "",
          prices: ""
        }
      ]
    };
  },
  methods: {
    onSubmit() {}
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.el-table {
  margin-bottom: 50px;
}
</style>
