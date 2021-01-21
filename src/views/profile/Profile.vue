<template>
  <div class="profile">
    <nav-bar class="nav-bar"><div slot="center">我的</div></nav-bar>
    <user-info></user-info>
    <account-info></account-info>
    <normal-list :list-data='orderList' class="orderlist"></normal-list>
    <normal-list :list-data='serviceList'></normal-list>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

import UserInfo from './childComps/UserInfo'
import AccountInfo from './childComps/AccountInfo'
import NormalList from './childComps/NormalList'
export default {
  name: "Profile",
  components: {
    NavBar,
    UserInfo,
    AccountInfo,
    NormalList
  },
  data(){
    return {
      orderList: [
        {icon: 'message.svg',msg:'我的消息'},
        {icon: 'pointer.svg',msg:'积分商城'},
        {icon: 'vip.svg',msg:'会员卡'}
      ],
      serviceList: [
        {icon:'cart.svg',msg:'我的购物车'},
        {icon:'shopping.svg',msg:'下载购物App'}
      ]
    }
  }
};
</script>

<style scoped>
.profile {
  background-color: #f2f2f2;
}
.nav-bar {
  color: #fff;
  font-size: 14px;
  background-color: var(--color-tint);
}
.orderlist {
  border-bottom: 15px solid rgb(236, 234, 234);
}
</style>