<template>
    <div class="base-info" v-if='Object.keys(goods).length!==0'>
       <div class="info-title">{{goods.title}}</div>
       <div class="info-price">
           <span class="price">{{goods.newPrice}}</span>
           <span class="oldprice">{{goods.oldPrice}}</span>
           <span class="decsribe" v-if="goods.discount" :style='{backgroundColor: goods.discountBgC}'>{{goods.discount}}</span>
       </div>
       <div class="info-other">
           <span>{{goods.columns[0]}}</span>
           <span>{{goods.columns[1]}}</span>
           <span>{{goods.services[goods.services.length-1].name}}</span>
       </div>
       <div class="info-service">
           <span v-for='(item,index) in (goods.services.length-1)' :key='index'>
               <img :src="goods.services[item-1].icon" alt="">
               <span>{{goods.services[item-1].name}}</span>
           </span>
       </div>
    </div>
</template>

<script>
export default {
  name: 'DetailText',
  props: {
      goods: {
          type: Object,
          default(){
              return {}
          }
      }
  } 
}
</script>

<style scoped>
.base-info{
    margin-top: 5px;
    padding: 5px;
    border-bottom: 6px solid #f2f5f8
}
.info-title{
   padding: 7px;
   font-size: 16px;
   color: #222;
}
.base-info .price{
    color: var(--color-high-text);
    font-size: 24px;
}
.base-info .oldprice{
    font-size: 14px;
    color: #a2a3a7;
    text-decoration: line-through;
    padding: 0 10px;
}
.base-info .decsribe{
    position: relative;
    top: -7px;
    left: -7px;
    color: #fff;
    font-size: 12px;
    border-radius: 10px;
    padding: 3px;
}
.info-service,.info-other{
    display: flex;
    justify-content: space-between;
}
.info-other {
    line-height: 20px;
    margin: 10px 0;
    padding-bottom: 5px;
    font-size: 14px;
    color: #817f88;
    border-bottom: 1px solid rgba(100,100,100,.1) ;
}
.info-service {
    line-height: 40px;
    font-size: 13px;
    color: #222;
}
.info-service img{
    width: 14px;
    height: 14px;
}
</style>