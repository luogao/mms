<template>
  <div class="page-body">
    <slot></slot>
  </div>
</template>
<style lang="scss" scoped>
.page-body {
  background: #fff;
  padding: 20px;
  margin: 24px 24px 0;
  section + section {
    margin-top: 20px;
  }
}
.page-sub-title {
  margin-top: 0;
  color: #3f9eff;
}
</style>
<script>
export default {
  name:'PageBody'
};
</script>
