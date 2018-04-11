<template>
  <page class="system-block" title="系统维护">
    <template slot="page-body">
      <div class="request-block">
        <ul>
          <template v-if="fakeData.length">
            <li class="request-item" v-for="(item, index) in fakeData" :key="index">
              <div class="item-meta">
                <span class="item-name">{{item.name}}</span>
                <p class="item-detail">{{item.details}}</p>
              </div>
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
    </template>
  </page>
</template>

<script>
export default {
  data() {
    return {
      fakeData: [
        {
          name: "出库申请",
          details: '编号：30001；日期：2017-12-22；名称：布料；规格：PL-01；数量：10；领用人：王梦'
        },
        {
          name: "入库申请",
          details: '编号：30001；日期：2017-10-22；名称：布料；规格：PL-01；数量：20；领用人：王梦'
        },
        {
          name: "生产需求申请",
          details: '编号：20171003；名称：布鞋；需求日期：20180201；需求部门：布鞋生产部；需求数量：10000'
        },
        {
          name: "采购单申请",
          details: '编号：30001；名称：布料；规格：PL-01；截止日期：2017-12-15；申请部门：布鞋生产部'
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
    .item-detail{
      margin-bottom: 0;
      }
  }
}
</style>
