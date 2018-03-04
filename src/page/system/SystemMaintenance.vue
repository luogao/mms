<template>
  <div class="system-block">
    <div class="page-title">
        <h2>系统维护</h2>
    </div>
    <div class="page-body">
    <div class="request-block">
      <ul>
        <template v-if="fakeData.length">
          <li class="request-item" v-for="(item, index) in fakeData" :key="index">
            <span class="item-name">{{item.name}}</span>
            <div class="item-action">
              <el-button type="primary" size="mini" @click="change">更改</el-button>
              <el-button type="warning" size="mini" plain @click="stop(index)">终止审批</el-button>
            </div>
          </li>
        </template>
        <template v-else>
          <li class="request-item no-data">
            暂无请求
          </li>
        </template>
      </ul>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fakeData: [
        {
          name: "申请1"
        },
        {
          name: "申请2"
        },
        {
          name: "申请3"
        },
        {
          name: "申请4"
        },
        {
          name: "申请5"
        }
      ]
    };
  },
  methods: {
    stop(index) {
      this.$confirm("是否终止该审批", "提示", {
        confirmButtonText: "是",
        cancelButtonText: "否",
        type: "warning"
      })
        .then(() => {
          this.fakeData.splice(index, 1);
        })
        .catch(() => {});
    },
    change() {
      this.$message({
        message: "更改成功",
        type: "success"
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.request-block {
  ul {
    padding: 0;
    list-style: none;
  }
  .request-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #ebeef5;
    background-color: #fff;
    overflow: hidden;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    color: #303133;
    & ~ .request-item {
      margin-top: 10px;
    }
    &.no-data {
      text-align: center;
      display: block;
      font-weight: 600;
    }
  }
}
</style>
