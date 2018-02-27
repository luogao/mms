<template>
  <div class="system-block">
    <div class="page-title">
        <h2>系统升级</h2>
    </div>
    <div class="text-center">
        <el-progress v-if="isUpgrade" type="circle" :status="percentage === 100 ? 'success' :''" :percentage="percentage"></el-progress>
    </div>
    <el-form class="mt10">
        <el-form-item class="action-btn-group">
            <el-button v-if="!isUpgrade" type="primary" size="small" @click="systemUpgrade">系统升级</el-button>
            <el-button v-if="isUpgrade" type="primary" size="small" @click="isUpgrade = false">{{percentage === 100 ? '完成' :'取消'}}</el-button>
        </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isUpgrade: false,
      percentage: 0,
      timer:null
    };
  },
  watch: {
    isUpgrade(val) {
      if (val) {
        this.fakeLoading();
      }
    }
  },
  beforeDestroy () {
      clearTimeout(this.timer)
      this.timer = null
  },
  methods: {
    systemUpgrade() {
      this.$confirm("是否进入系统升级", "提示", {
        confirmButtonText: "是",
        cancelButtonText: "否",
        type: "warning"
      })
        .then(() => {
          this.isUpgrade = true;
        })
        .catch(() => {
          this.isUpgrade = false;
        });
    },
    fakeLoading() {
        if (this.percentage < 100) {
            this.timer = setTimeout(() => {
                this.percentage ++
                this.fakeLoading()
            }, 500);
        }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
