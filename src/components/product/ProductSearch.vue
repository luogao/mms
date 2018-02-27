<template>
  <div class="outer-apply">
    <div class="page-title">
        <h2>生产需求查询</h2>
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
                <el-form-item label="需求部门">
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
            prop="key1"
            label="编号">
            </el-table-column>
            <el-table-column
            prop="key2"
            label="名称">
            </el-table-column>
            <el-table-column
            prop="key3"
            label="需求日期">
            </el-table-column>
             <el-table-column
            prop="key4"
            label="需求部门">
            </el-table-column>
            <el-table-column
            prop="key5"
            label="需求数量">
            </el-table-column>
            <el-table-column
            prop="key6"
            label="需求状态">
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
      tableData: []
    };
  },
  methods: {
    onSubmit() {
      let data = [
        {
          key1: "20171001",
          key2: "运动鞋",
          key3: "20171220",
          key4: "运动鞋生产部",
          key5: "1000",
          key6: "审批完成"
        },
        {
          key1: "20171002",
          key2: "皮鞋",
          key3: "20180101",
          key4: "皮鞋生产部",
          key5: "5000",
          key6: "正在审批"
        },
        {
          key1: "20171003",
          key2: "布鞋",
          key3: "20180201",
          key4: "布鞋生产部",
          key5: "10000",
          key6: "审批完成"
        }
      ];
      this.tableData = data;
    }
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
