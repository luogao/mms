<template>
  <div class="outer-apply">
    <div class="page-title">
        <h2>生产需求查询</h2>
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
                  <el-form-item label="需求部门">
                      <el-select v-model="form.reason" placeholder="请选择">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
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
      tableData: [],
      options: [
        {
          value: "综合计划部",
          label: "综合计划部"
        },
        {
          value: "生产管理部",
          label: "生产管理部"
        },
        {
          value: "运动鞋生产部",
          label: "运动鞋生产部"
        },
        {
          value: "皮鞋生产部",
          label: "皮鞋生产部"
        },
        {
          value: "布鞋生产部",
          label: "布鞋生产部"
        }
      ]
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
        }
        // {
        //   key1: "20171002",
        //   key2: "皮鞋",
        //   key3: "20180101",
        //   key4: "皮鞋生产部",
        //   key5: "5000",
        //   key6: "正在审批"
        // },
        // {
        //   key1: "20171003",
        //   key2: "布鞋",
        //   key3: "20180201",
        //   key4: "布鞋生产部",
        //   key5: "10000",
        //   key6: "审批完成"
        // }
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
