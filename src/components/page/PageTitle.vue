<template>
  <div class="page-title">
    <h2>{{title}}</h2>
  </div>
</template>
<style lang="scss" scoped>
.page-title {
  padding: 20px;
  background: #fff;
  border-bottom: 1px solid #e8e8e8;
  h2 {
    margin-top: 0;
    padding-bottom: 20px;
    border-bottom: 1px solid #ccc;
    font-weight: 300;
  }
}
</style>
<script>
export default {
  name: "PageTitle",
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>
