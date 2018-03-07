<template>
  <div class="user-block">
    <div class="page-title">
        <h2>用户权限</h2>
    </div>
    <div class="page-body">
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
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{
        key1: '张力',
        key2: '2级',
        key3: ''
      },{
        key1: '李智',
        key2: '2级',
        key3: ''
      },{
        key1: '王梦',
        key2: '1级',
        key3: ''
      },{
        key1: '李娟',
        key2: '2级',
        key3: ''
      },{
        key1: '张华',
        key2: '2级',
        key3: ''
      }]
    };
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
