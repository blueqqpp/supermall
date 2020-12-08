<template>
  <swiper>
     <swiper-item v-for="item in banners" :key='item.title'>
       <a :href="item.link">
         <img :src="item.image" :alt="item.title" @load="swiperLoad">
       </a>
     </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper'
export default {
    name: 'HomeSwiper',
    components: {
      Swiper,
      SwiperItem
    },
    data(){
      return{
         isload: false
      }
    },
    props: {
      banners: {
        type: Array,
        default: function(){
          return []
        }
      }
    },
    methods:{
      //只需要事件发送一次
      swiperLoad(){
        if(!this.isload){
          this.$emit('swiperLoadfinish')
          this.isload = true
        }
      }
    }
}
</script>

<style>

</style>