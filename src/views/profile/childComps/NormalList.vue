<template>
    <div class="normal">
     <div v-for="(item,index) in listData" :key="index" class="normal-item">
         <div class="icon">
             <img :src="getsrc(item.icon)" alt="">
         </div>
         <div class="text">{{item.msg}}</div>
     </div>
    </div>
</template>

<script>
export default {
   name: 'NormalList',
   props: {
       listData:{
          type: Array,
          default(){
           return []
       }
    }
   },
   //只是一个属性，不可以直接传参数
   computed: {
       getsrc(){
           return function(icon){
              return require('assets/img/profile/'+icon)
           }
       }
   }
}
</script>

<style scoped>
.normal-item {
    display: flex;
    height: 44px;
    line-height: 44px;
    background-color: #fff;
    font-size: 13px;
    color: #333;
}
.normal-item:last-of-type .text{
    border-bottom: none;
}
.icon {
    width: 30px;
}
.icon img {
    width: 20px;
    height: 20px;
    vertical-align: middle;
    margin-left: 7px;
}
.text {
    padding-left: 5px;
    flex: 1;
    border-bottom:1px solid rgba(100,100,100,.1) ;
}
</style>