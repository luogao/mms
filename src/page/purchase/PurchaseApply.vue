<template>
  <page class="outer-apply" title="采购单填写">
    <template slot="page-body">
        <el-form ref="form" :model="form" label-position="top">
            <div class="inline-form-item">
                <el-form-item label="申请日期">
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
                <el-form-item label="申请数量">
                    <el-input v-model="form.user"></el-input>
                </el-form-item>
                <el-form-item label="申请人">
                    <el-select v-model="form.vendor" placeholder="请选择">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
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
                    <el-input v-model="scope.row.code"></el-input>
                </template>
                </el-table-column>
                <el-table-column
                prop="name"
                label="名称"
                width="180">
                <template slot-scope="scope">
                    <el-select v-model="scope.row.name" placeholder="请选择">
                        <el-option
                        v-for="item in options1"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </template>
                </el-table-column>
                <el-table-column
                prop="specification"
                label="截止日期">
                <template slot-scope="scope">
                    <el-input v-model="scope.row.specification"></el-input>
                </template>
                </el-table-column>
                <el-table-column
                prop="num"
                label="申请部门">
                <template slot-scope="scope">
                    <el-input v-model="scope.row.num"></el-input>
                </template>
                </el-table-column>
                <el-table-column
                prop="num"
                label="申请数量">
                <template slot-scope="scope">
                    <el-input v-model="scope.row.num"></el-input>
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
                <el-button class="apply-btn" type="primary" @click="onSubmit">保存</el-button>
            </el-form-item>
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
        vendor: "",
        endDate: ""
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
      ],
      options: [
        {
          value: "张力",
          label: "张力"
        },
        {
          value: "李智",
          label: "李智"
        },
        {
          value: "王梦",
          label: "王梦"
        },
        {
          value: "李娟",
          label: "李娟"
        },
        {
          value: "张华",
          label: "张华"
        }
      ],
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
    margin-bottom: 50px;
  }
}
</style>
