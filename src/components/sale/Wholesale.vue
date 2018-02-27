<template>
  <div class="outer-apply">
    <div class="page-title">
        <h2>产品批发</h2>
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
            label="截止日期">
            </el-table-column>
             <el-table-column
            prop="key4"
            label="单位">
            </el-table-column>
            <el-table-column
            prop="key5"
            label="批发价">
            </el-table-column>
            <el-table-column
            prop="key6"
            label="备注">
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
          key3: "20180120",
          key4: "双",
          key5: "350"
        },
        {
          key1: "20171002",
          key2: "皮鞋",
          key3: "20180130",
          key4: "双",
          key5: "600"
        },
        {
          key1: "20171003",
          key2: "布鞋",
          key3: "20180201",
          key4: "双",
          key5: "70"
        }
      ];
      this.tableData = data
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
