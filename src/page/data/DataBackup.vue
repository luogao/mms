<template>
  <div class="data-backup">
    <div class="page-title">
        <h2>数据备份</h2>
    </div>
    <el-alert
        title="说明：数据备份需要一定的时间，请耐心等待"
        type="info"
        show-icon
        close-text="知道了">
    </el-alert>
    <el-progress :percentage="percentage" v-if="startBackup" :status="percentage === 100 ? 'success':''" class="mt10"></el-progress>
    <el-button size="small" type="primary" class="mt10" @click="startBackup = !startBackup">{{startBackup?'取消':'备份数据'}}</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      startBackup: false,
      percentage: 0,
      timer: null
    };
  },
  beforeDestroy() {
    clearTimeout(this.timer);
    this.timer = null;
  },
  watch: {
    startBackup(val) {
      if (val) {
        this.fakeBackup();
      } else {
        clearTimeout(this.timer);
        this.timer = null;
      }
      console.log()
    },
    percentage(val) {
      if (val === 100) {
        this.$message({
          message: "数据备份成功！",
          type: "success",
          duration: 1000
        });
        clearTimeout(this.timer);
        this.timer = null;
        this.startBackup = false;
        this.downloadFn("/static/data/2018-02-01.xlsx", "system_backup");
        this.percentage = 0
      }
    }
  },
  beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    console.log(this.startBackup)
    if(this.startBackup){
      console.log(to,from)
      return
    }else{
      next()
    }
  },
  methods: {
    fakeBackup() {
      if (this.percentage < 100) {
        this.timer = setTimeout(() => {
          this.percentage++;
          this.fakeBackup();
        }, 500);
      }
    },
    downloadFn(href, title) {
      var el = document.createElement("a");
      el.setAttribute("href", href);
      el.setAttribute("download", title);
      el.click();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
