<template>
  <div id="home">
   <nav-bar class="home-nav">
     <div slot="center">购物车</div>
   </nav-bar>
   <scroll class="content" 
           ref="scroll" 
           :probe-type='3' 
           @scroll='contentScroll'
           :pull-up-load='true'
           @pullingUp='loadMore'>
      <home-swiper :banners='banners'></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control :titles='["流行","新款","精选"]' @tabClick='tabClick'></tab-control>
      <goods-list :goods="getGoods"></goods-list>
   </scroll>
   <back-top @click.native="backclick" v-show="isShowback"/>
  </div>
</template>

<script>
import HomeSwiper from './childHome/HomeSwiper'
import RecommendView from './childHome/RecommendView'
import FeatureView from './childHome/FeatureView'

import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabcontrol/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backtop/BackTop'

import {getdataforHome, getHomeGoods} from 'network/home.js'
export default {
  name: "Home",
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  data(){
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop':{page: 0,list: []},
        'new':{page: 0,list: []},
        'sell':{page: 0,list: []}
      },
      currentType: 'pop',
      isShowback: false
    }
  },
  created(){
    this._getdataforHome()
    this._getGoods('pop')
    this._getGoods('new')
    this._getGoods('sell')
  },
  computed:{
    getGoods(){
      return this.goods[this.currentType].list
    }
  },
  methods:{
    // 事件监听有关
    tabClick(index){
       switch(index){
         case 0:
           this.currentType = 'pop'
           break;
         case 1:
           this.currentType = 'new'
           break;
         case 2:
           this.currentType = 'sell'
           break;
       }
    },
    backclick(){
      this.$refs.scroll.scroll.scrollTo(0,0,800)
    },
    contentScroll(position){
      this.isShowback = (-position.y) > 1000
    },
    loadMore(){
      this._getGoods(this.currentType)
      //重新计算betterscroll
      this.$refs.scroll.scroll.refresh()
    },
    // 网络请求有关
    _getdataforHome(){
      getdataforHome().then(res=>{
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
    })
  },
  _getGoods(type){
    const page = this.goods[type].page+1
    getHomeGoods(type,page).then(res=>{
       this.goods[type].list.push(...res.data.list)
       this.goods[type].page+=1
      //pullingUp只能消费一次，加载更多完成后，需要调用一下finishPullUp，来进行下一次的pullingUp
       this.$refs.scroll.finishPullUp()
    })
  }
 }
};
</script>

<style scoped>
#home{
  position: relative;
  height: 100vh;
}
.home-nav{
  position: fixed;
  top: 0;
  left:0;
  right: 0; 
  background-color: var(--color-tint);
  color: #fff;
  z-index: 9;
}
.content{
   position: absolute;
   top: 44px;
   bottom: 49px;
   left: 0;
   right: 0;
}
/* .content{
  height: calc(100% - 49px);
  overflow: hidden;
} */
</style>