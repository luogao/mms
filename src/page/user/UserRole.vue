<template>
  <page class="user-block" title="用户权限">
    <template slot="page-body">
      <section>
        <h3 class="page-sub-title">用户权限列表</h3>
        <el-alert
            title="说明：最高1级可以维护，2级只能进行操作，不能维护"
            type="info"
            show-icon
            close-text="知道了">
        </el-alert>
        <el-table
          class="mt10"
          :data="tableData"
          stripe
          border
          style="width: 100%">
          <el-table-column type="index"></el-table-column>
          <el-table-column
          prop="key1"
          label="姓名">
          </el-table-column>
          <el-table-column
          prop="key2"
          label="权限">
          </el-table-column>
          <el-table-column
          prop="key3"
          label="备注">
          </el-table-column>
        </el-table>
      </section>
      <section>
        <h3 class="page-sub-title">用户权限修改</h3>
        <el-form :inline="true" :model="changeUserRole" label-position="top">
          <el-form-item label="中文姓名">
            <el-select v-model="changeUserRole.user" placeholder="请选择">
              <el-option
                v-for="item in options1"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="密码">
            <el-input type="password" v-model="changeUserRole.password" placeholder="密码"></el-input>
          </el-form-item>
          <el-form-item label="权限">
            <el-select v-model="changeUserRole.role" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">提交</el-button>
          </el-form-item>
        </el-form>
      </section>
    </template>
  </page>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          key1: "张力",
          key2: "2级",
          key3: ""
        },
        {
          key1: "李智",
          key2: "2级",
          key3: ""
        },
        {
          key1: "王梦",
          key2: "1级",
          key3: ""
        },
        {
          key1: "李娟",
          key2: "2级",
          key3: ""
        },
        {
          key1: "张华",
          key2: "2级",
          key3: ""
        }
      ],
      options1: [
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
      changeUserRole:{
        user:'',
        password:'',
        role:''
      },
      options: [{
          value: '1',
          label: '1级'
        }, {
          value: '2',
          label: '2级'
        }]
    };
  },
  methods: {
    onSubmit(){}
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
