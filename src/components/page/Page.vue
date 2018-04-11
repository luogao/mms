<template>
  <div class="page">
    <page-title :title="title">
      <slot name="page-title"></slot>
    </page-title>
    <page-body>
      <slot name="page-body"></slot>
    </page-body>
  </div>
</template>
<style lang="scss" scoped>

</style>
<script>
import PageBody from "./PageBody";
import PageTitle from "./PageTitle";
export default {
  name: "Page",
  components: {
    PageBody,
    PageTitle
  },
  props:{
    title: {
      type: String,
      required: true
    }
  }
};
</script>
