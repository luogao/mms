<template>
  <div class="outer-apply">
    <div class="page-title">
        <h2>采购单查询</h2>
    </div>
    <div class="page-body">
      <el-form ref="form" :model="form" label-position="top">
          <div class="over-clear">
              <div class="inline-form-item">
                  <el-form-item label="起始日期">
                    <el-date-picker
                        v-model="form.date"
                        align="right"
                        type="date"
                        placeholder="选择日期"
                      >
                    </el-date-picker>
                  </el-form-item>
                  <el-form-item label="截止日期">
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
              label="申请部门">
              </el-table-column>
              <el-table-column
              prop="key5"
              label="申请数量">
              </el-table-column>
              <el-table-column
              prop="key6"
              label="申请状态">
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
        endDate:''
      },
      tableData: []
    };
  },
  methods: {
    onSubmit() {
      let data = [
        {
          key1: "10001",
          key2: "橡胶",
          key3: "XJ-01",
          key4: "2017-11-10",
          key5: "运动鞋生产部",
          key6: "完成采购"
        },
        {
          key1: "20001",
          key2: "皮革",
          key3: "PG-01",
          key4: "2017-12-10",
          key5: "皮鞋生产部",
          key6: "正在采购"
        },
        {
          key1: "30001",
          key2: "布料",
          key3: "PL-01",
          key4: "2017-12-15",
          key5: "布鞋生产部",
          key6: "正在审批"
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
