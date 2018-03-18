<template>
  <div class="outer-apply">
    <div class="page-title">
        <h2>生产需求填写</h2>
    </div>
    <div class="page-body">
        <el-form ref="form" :model="form" label-position="top">
            <div class="inline-form-item">
                <el-form-item label="产品名称">
                    <el-select v-model="form.name" placeholder="请选择">
                        <el-option
                        v-for="item in options1"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="填写部门">
                    <el-select v-model="form.user" placeholder="请选择">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
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
                    <el-input v-model="scope.row.code"></el-input>
                </template>
                </el-table-column>
                <el-table-column
                prop="name"
                label="名称">
                <template slot-scope="scope">
                    <el-input v-model="scope.row.name"></el-input>
                </template>
                </el-table-column>
                <el-table-column
                prop="specification"
                label="规格">
                <template slot-scope="scope">
                    <el-input v-model="scope.row.specification"></el-input>
                </template>
                </el-table-column>
                <el-table-column
                prop="num"
                label="数量">
                <template slot-scope="scope">
                    <el-input v-model="scope.row.num"></el-input>
                </template>
                </el-table-column>
                <el-table-column
                prop="num"
                label="需求部门">
                <template slot-scope="scope">
                    <el-select v-model="scope.row.remarks" placeholder="请选择">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </template>
                </el-table-column>
                <el-table-column
                prop="remarks"
                label="备注">
                <template slot-scope="scope">
                    <el-input v-model="scope.row.prices"></el-input>
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
        vendor: "",
        name:''
      },
      tableData: [
        {
          code: "",
          name: "",
          specification: "",
          num: "",
          prices: "",
          remarks:""
        },
        {
          code: "",
          name: "",
          specification: "",
          num: "",
          prices: "",
          remarks:""
        },
        {
          code: "",
          name: "",
          specification: "",
          num: "",
          prices: "",
          remarks:""
        }
      ],
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
      ],
      options1: [
        {
          value: "1",
          label: "运动鞋"
        },
        {
          value: "2",
          label: "皮鞋"
        },
        {
          value: "3",
          label: "布鞋"
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
