<template>
    <el-container id="mian">
        <el-header style="text-align: right; font-size: 12px">
            <div class="header-title">
                <router-link to="/login"><h2>物料管理系统</h2></router-link>
                <span>设计者：赵银玲</span>
                <span>版本：V1.0</span>
            </div>
        </el-header>
        <el-container id="body">
            <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
                <el-menu router unique-opened>
                    <el-submenu index="1">
                        <template slot="title">物料管理</template>
                        <el-menu-item index="outer_apply">出库申请</el-menu-item>
                        <el-menu-item index="outer_search">出库查询</el-menu-item>
                        <el-menu-item index="1-3">入库申请</el-menu-item>
                        <el-menu-item index="1-4">入库查询</el-menu-item>
                        <el-menu-item index="1-5">物料信息查询</el-menu-item>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title">计划管理</template>
                        <el-submenu index="2-1">
                            <template slot="title">生产管理</template>
                            <el-menu-item index="2-1-1">生产需求填写</el-menu-item>
                            <el-menu-item index="2-1-2">生产需求查询</el-menu-item>
                        </el-submenu>
                        <el-submenu index="2-2">
                            <template slot="title">采购管理</template>
                            <el-menu-item index="2-2-1">采购单填写</el-menu-item>
                            <el-menu-item index="2-2-2">采购单查询</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title">销售管理</template>
                        <el-menu-item index="3-1">产品零售</el-menu-item>
                        <el-menu-item index="3-2">产品批发</el-menu-item>
                    </el-submenu>
                    <el-submenu index="4">
                        <template slot="title">安全性管理</template>
                        <el-menu-item index="4-1">数据备份</el-menu-item>
                        <el-menu-item index="4-2">数据恢复</el-menu-item>
                    </el-submenu>
                    <el-submenu index="5">
                        <template slot="title">系统管理</template>
                        <el-submenu index="5-1">
                            <template slot="title">人事管理</template>
                            <el-menu-item index="5-1-1">用户权限</el-menu-item>
                            <el-menu-item index="5-1-2">用户切换</el-menu-item>
                        </el-submenu>
                        <el-submenu index="5-2">
                            <template slot="title">后台管理</template>
                            <el-menu-item index="5-2-1">系统维护</el-menu-item>
                            <el-menu-item index="5-2-2">系统升级</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-main>
                <router-view/>
            </el-main>
        </el-container>
    </el-container>
</template>

<style lang="scss">
#body{
    height: calc(100vh - 60px);
}
.el-main{
    overflow: auto;    
}
.el-header {
  background-color: #409EFF;
  color: #fff;
  line-height: 60px;
  .header-title{
      display: flex;
      justify-content: space-around;
      align-items: center;
      font-size: 14px;
      h2{
          margin: 0
      }
  }
}

.el-aside {
  color: #333;
}
</style>

<script>
export default {
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄"
    };
    return {
      tableData: Array(20).fill(item)
    };
  }
};
</script>