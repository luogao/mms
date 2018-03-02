<template>
  <div class="outer-apply">
    <div class="page-title">
        <h2>出库查询</h2>
    </div>
    <div class="page-body">
      <el-form ref="form" :model="form" label-position="top">
          <div class="over-clear">
              <div class="inline-form-item">
                  <el-form-item label="起始时间">
                      <el-date-picker
                        v-model="form.date"
                        align="right"
                        type="date"
                        placeholder="选择日期"
                      >
                      </el-date-picker>
                  </el-form-item>
                  <el-form-item label="结束时间">
                      <el-date-picker
                        v-model="form.endDate"
                        align="right"
                        type="date"
                        placeholder="选择日期"
                      >
                      </el-date-picker>
                  </el-form-item>
              </div>
              <div class="inline-form-item">
                  <el-form-item label="领用人">
                      <el-input v-model="form.reason"></el-input>
                  </el-form-item>
                  <el-form-item label="物料名称">
                      <el-input v-model="form.code"></el-input>
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
              label="出库时间">
              </el-table-column>
              <el-table-column
              prop="key3"
              label="名称">
              </el-table-column>
              <el-table-column
              prop="key4"
              label="规格">
              </el-table-column>
              <el-table-column
              prop="key5"
              label="数量">
              </el-table-column>
              <el-table-column
              prop="key6"
              label="出库状态">
              </el-table-column>
              <el-table-column
              prop="key7"
              label="领用人">
              </el-table-column>
          </el-table>
          
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
        reason: "",
        code: "",
        endDate: ""
      },
      tableData: []
    };
  },
  methods: {
    onSubmit() {
      let data = [
        {
          key1: "10001",
          key2: "2017-10-26",
          key3: "橡胶",
          key4: "XJ-01",
          key5: "5",
          key6: "完成",
          key7: "张三"
        },
        {
          key1: "20001",
          key2: "2017-11-16",
          key3: "皮革",
          key4: "PG-01",
          key5: "10",
          key6: "正在审批",
          key7: "李四"
        },
        {
          key1: "30001",
          key2: "2017-12-22",
          key3: "布料",
          key4: "PL-01",
          key5: "10",
          key6: "正在审批",
          key7: "王五"
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
