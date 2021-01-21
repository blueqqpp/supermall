<template>
    <div>
      <scroll class="content" ref="scroll">
          <cart-list-item v-for="(item,index) in cartList" :key="index" :product='item'></cart-list-item>
      </scroll>
    </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
import CartListItem from './CartListItem'

import { mapGetters } from 'vuex'

export default {
  name: "CartList",
  components: {
      Scroll,
      CartListItem
  },
  computed: {
      ...mapGetters(["cartList"])
  },
  //不能在created中，因为有缓存
  activated(){
    this.$refs.scroll.refresh()
  }
}
</script>

<style scoped>

.content {
    height: 100%;
    overflow: hidden;
}
</style>