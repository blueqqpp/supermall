<template>
    <div class="shop-info" v-if='Object.keys(shop)!==0'>
       <div class="shop-top">
          <img :src="shop.shopLogo" alt="">
          <span class="title">{{shop.name}}</span>
       </div>
       <div class="shop-middle">
           <div class="shop-middle-item shop-middle-left">
               <div class="info-sells">
                   <div class="sells-count">{{shop.sells | sellCountFilter}}</div>
                   <div class="sells-text">总销量</div>
               </div>
               <div class="info-goods">
                   <div class="goods-count">{{shop.goodsCount}}</div>
                   <div class="goods-text">全部宝贝</div>
               </div>
           </div>
           <div class="shop-middle-item shop-middle-right">
               <table>
                   <tr v-for='(item,index) in shop.score' :key="index">
                        <td>{{item.name}}</td>
                        <td :style="{color: item.isBetter==true?'#f13e3a':'#5ea723'}">{{item.score}}</td>
                        <td :style="{backgroundColor: item.isBetter==true?'#f13e3a':'#5ea723',color:'white'}">{{item.isBetter ? '高' : '低'}}</td>
                   </tr>
               </table>
               
           </div>
       </div>
       <div class="shop-bottom">
           <div class="enter-shop">进店逛逛</div>
       </div>
    </div>
</template>

<script>
export default {
    name: 'DetailshopInfo',
    props: {
        shop: {
            type: Object,
            default(){
                return {}
            }
        }
    },
    filters: {
        sellCountFilter(value){
            if(value<10000) return value
            return (value/10000).toFixed(1)+'万'
        }
    }
}
</script>

<style scoped>
.shop-info{
    padding: 25px 8px;
    border-bottom: 5px solid #f2f5f8 ;
}
.shop-top img{
    height: 45px;
    width: 45px;
    border-radius: 50%;
    vertical-align: middle;
    margin-right: 10px;
    border: 1px solid rgba(0,0,0,.1);
}
.shop-middle{
    display: flex;
    margin: 15px 0;
    align-items: center;
}
.shop-middle-item{
    flex: 1;
}
.shop-middle-left{
    text-align: center;
    display: flex;
    color: #333;
    justify-content: space-evenly;
    border-right: 1px solid rgba(0,0,0,.1);
}
.sells-count,
.goods-count{
   font-size: 18px;
   margin-bottom: 10px;
}
.sells-text,
.goods-text{
    font-size: 13px;
    color: #333;
}

.shop-middle-right{
    font-size: 13px;
    color: #333;
}

.shop-middle-right table{
    margin-left: 30px;
    width: 120px;
}
.shop-middle-right table td {
    padding: 5px 0;
}

.shop-bottom{
    text-align: center;
}

.enter-shop{
    /* 以下两种居中方式都可以 */
    /* display: inline-block; */
    margin: auto;
    width: 150px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background-color: #f4f5f7 ;
    border-radius: 10px;
}
</style>