<template>
  <div class="outer-apply">
    <div class="page-title">
        <h2>出库申请</h2>
    </div>
    <div class="page-body">
        <el-form ref="form" :model="form" label-position="top">
            <div class="inline-form-item">
                <el-form-item label="出库时间">
                    <el-date-picker
                    v-model="form.date"
                    align="right"
                    type="date"
                    placeholder="选择日期">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="领用人">
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
                <el-form-item label="领用原因">
                    <el-input v-model="form.reason"></el-input>
                </el-form-item>
                <el-form-item label="生产单编号">
                    <el-input v-model="form.code"></el-input>
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
                    <el-select v-model='scope.row.name' placeholder="请选择">
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
                label="规格">
                <template slot-scope="scope">
                    <el-input v-model="scope.row.specification"></el-input>
                </template>
                </el-table-column>
                <el-table-column
                prop="num"
                label="数量">
                <template slot-scope="scope">
                    <el-input v-model="scope.row.num" place></el-input>
                </template>
                </el-table-column>
                <el-table-column
                prop="remarks"
                label="备注">
                <template slot-scope="scope">
                    <el-input v-model="scope.row.remarks"></el-input>
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
        reason: "",
        code: ""
      },
      tableData: [
        {
          code: "",
          name: '',
          specification: "",
          num: "",
          remarks: ""
        },
        {
          code: "",
          name: '',
          specification: "",
          num: "",
          remarks: ""
        },
        {
          code: "",
          name: '',
          specification: "",
          num: "",
          remarks: ""
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
          value: '1',
          label: "橡胶"
        },
        {
          value:'2',
          label: "皮革"
        },
        {
          value: '3',
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
