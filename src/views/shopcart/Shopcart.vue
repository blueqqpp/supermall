<template>
  <div id="cart">
    <!-- 顶部导航栏 -->
    <nav-bar>
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
    <!-- 商品展示 -->
    <cart-list class="cart-list"></cart-list>
    <!-- 底部汇总 -->
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

import CartList from './childComps/CartList'
import CartBottomBar from './childComps/CartBottomBar'

import { mapGetters } from 'vuex'
export default {
  name: "Shopcart",
  components: {
    NavBar,
    CartList,
    CartBottomBar
  },
  computed: {
   ...mapGetters(["cartLength","cartList"])
  }
};
</script>

<style scoped>
#cart {
  height: 100vh;
}
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
.cart-list {
  height: calc(100% - 44px - 49px - 40px);
}
</style>