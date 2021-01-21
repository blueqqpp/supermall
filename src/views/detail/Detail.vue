<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @titleClick='tabTitle' ref="nav"></detail-nav-bar>
    <scroll class="content" 
            ref="scroll"
            :probeType='3'
            @scroll='contentScroll'>
      <detail-swiper :top-images='topImages'></detail-swiper> 
      <detail-base-info :goods='goods'></detail-base-info>
      <detail-shop-info :shop='shop'></detail-shop-info>
      <detail-goods-info :detail-info='detailInfo' @imageLoad='imageLoad'></detail-goods-info>
      <detail-item-params ref="params" :item-params="itemParams"></detail-item-params>
      <detail-comment-info ref="comment" :comment-info='commentInfo'></detail-comment-info>
      <goods-list ref="recommend" :goods='recommendGoods'></goods-list>
    </scroll>
     <back-top v-show="isshowBack" @click.native="backtop"></back-top>
     <detail-bottom-bar @addtocart='addtoCart'></detail-bottom-bar>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailItemParams from './childComps/DetailtemParams'
import DetailCommentInfo from './childComps/DetailCommentInfo'
import DetailBottomBar from './childComps/DetailBottomBar'

import Scroll from 'components/common/scroll/Scroll'
import GoodsList from 'components/content/goods/GoodsList'

import {getDetail,getRecommend,Goods,Shop,ItemParams} from 'network/detail.js'
import {itemListener,backtop} from 'common/mixin'
import {debounce} from 'common/utils'

import { mapActions } from 'vuex'

export default {
  name:'Detail',
  data(){
      return {
           iid: '',
           topImages: [],
           goods: {},
           shop: {},
           detailInfo: {},
           itemParams: {},
           commentInfo: {},
           recommendGoods: [],
           themesTops: [],
           getThemesTops: null,
           currentIndex: 0,
      }
  },
  mixins: [itemListener,backtop],
  components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailItemParams,
      DetailCommentInfo,
      DetailBottomBar,
      GoodsList,
      Scroll,
  },
  created(){
        this._getDetail()
        this._getRecommend()

        this.getThemesTops = debounce(()=>{
          this.themesTops = []
          this.themesTops.push(0)
          this.themesTops.push(this.$refs.params.$el.offsetTop)
          this.themesTops.push(this.$refs.comment.$el.offsetTop)
          this.themesTops.push(this.$refs.recommend.$el.offsetTop)
          this.themesTops.push(Number.MAX_VALUE)
        },200)

    },
    mounted(){
     
  },
  destroyed(){
    this.$bus.$off('imageLoadFinish',this.itemListener)
  },
 
  methods: {
    ...mapActions(["addtocart"]),
      imageLoad(){
        //  this.$refs.scroll.refresh() //只会处理一次
        this.newRefresh()
        //正确的方式是在图片加载完成后获取offsetTop
        //此时需要防抖
        this.getThemesTops()
      },
      tabTitle(index){
        this.$refs.scroll.scrollTo(0,-this.themesTops[index],500)
      },
      contentScroll(position){
        let y = -position.y
        this.isshowBack = y >= 1000
        let len = this.themesTops.length
        for(let i = 0;i<len;i++){
            // if(this.currentIndex!==i && (i<len-1 &&y>this.themesTops[i] && y<=this.themesTops[i+1] || y>=this.themesTops[i])){
            //   this.currentIndex = i
            //   this.$refs.nav.currentIndex = this.currentIndex
            // } 

            //hack做法 用空间换时间
            if(this.currentIndex!==i && i<len-1 && y>=this.themesTops[i] && y<this.themesTops[i+1]){
              this.currentIndex = i
              this.$refs.nav.currentIndex = this.currentIndex
              break
            }
        }
      },
      addtoCart(){
        let product = {}
        product.iid = this.$route.query.iid
        product.img = this.topImages[0]
        product.title = this.goods.title
        product.price = this.goods.realPrice
        product.desc = this.goods.desc

        // this.$store.dispatch('addtocart',product)
        this.addtocart(product).then(res=>{
          // this.message = res
          // this.show = true
          // console.log(res)
          // setTimeout(()=>{
          //   this.message = ''
          //   this.show = false
          // },1000)
          this.$toast.show(res,1500)
        })
      },
      _getDetail(){
            //1.获取到参数
         this.iid = this.$route.query.iid
        //2.请求数据
         getDetail(this.iid).then(res=>{
            const data = res.result
            console.log(data)
            //获取顶部的图片
            this.topImages = data.itemInfo.topImages
            //获取商品信息
            this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
            //获取商家信息
            this.shop = new Shop(data.shopInfo)
            //获取商品详细信息
            this.detailInfo = data.detailInfo
            //获取参数信息
            this.itemParams = new ItemParams(data.itemParams.info,data.itemParams.rule)
            //保存评价信息
            if(data.rate.list){
               this.commentInfo = data.rate.list[0]
            }
        })
     },
       _getRecommend(){
          getRecommend().then(res=>{
            this.recommendGoods = res.data.list
        })
    },
    }
}
</script>

<style scoped>
#detail{
    position: relative;
    z-index: 1;
    background-color: #fff;
    height: 100vh;
}
.detail-nav{
    position: relative;
    background-color: #fff;
    z-index: 10;
}
.content {
    height: calc(100% - 44px - 49px);
}
</style>