<template>
  <page class="outer-apply" title="物料信息查询">
    <template slot="page-body">
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
                  <el-form-item label="起始日期">
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
                  <el-form-item label="物料名称">
                    <el-select v-model="form.code" placeholder="请选择">
                        <el-option
                        v-for="item in options1"
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
              <el-table-column
              type="index">
              </el-table-column>
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
              label="规格">
              </el-table-column>
              <el-table-column
              prop="key4"
              label="入库数量">
              </el-table-column>
              <el-table-column
              prop="key5"
              label="出库数量">
              </el-table-column>
              <el-table-column
              prop="key6"
              label="库存余量">
              </el-table-column>
              <el-table-column
              prop="key7"
              label="备注">
              </el-table-column>
          </el-table>
          
      </el-form>
    </template>
  </page>
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
      tableData: [],
      options1: [
        {
          value: "1",
          label: "橡胶"
        },
        {
          value: "2",
          label: "皮革"
        },
        {
          value: "3",
          label: "布料"
        }
      ]
    };
  },
  methods: {
    onSubmit() {
      let data = [
        {
          key1: "10001",
          key2: "橡胶",
          key3: "XJ-01",
          key4: "15",
          key5: "5",
          key6: "10"
        },
        {
          key1: "10002",
          key2: "皮革",
          key3: "PG-01",
          key4: "20",
          key5: "10",
          key6: "10"
        },
        {
          key1: "10003",
          key2: "布料",
          key3: "PL-01",
          key4: "20",
          key5: "10",
          key6: "10"
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
