<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
};
</script>

<style>
.tab-bar {
  display: flex;
  position: fixed;
  background-color: #f6f6f6;
  height: 49px;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  box-shadow: 0 -3px 5px rgba(100, 100, 100, 0.1);
}
</style>