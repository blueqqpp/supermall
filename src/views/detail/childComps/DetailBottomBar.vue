<template>
    <div id="bottom-bar">
        <div class="bar-item bar-left">
         <div class="custmor">
            <i class="icon service"></i>
            <div class="service-text">客服</div>
         </div>
        <div class="shop">
            <i class="icon shop"></i>
            <div class="shop-text">店铺</div>
        </div>
        <div class="fav">
            <i class="icon fav"></i>
            <div class="fav-text">收藏</div>
        </div>
        </div>
        <div class="bar-item bar-right">
            <div class="cart" @click="addtocart">
            加入购物车
           </div>
           <div class="buy">
            购买
           </div>
        </div>
    </div>
</template>

<script>
export default {
   name: 'DetailBottomBar',
   methods: {
       addtocart(){
           this.$emit('addtocart')
       }
   }
}
</script>

<style scoped>
#bottom-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 10;
    height: 49px;
    width: 100%;
    background-color: #fff;
    display: flex;
}
.bar-item {
    flex: 1;
    display: flex;
}
.bar-item>div{
    flex: 1;
    justify-content: center;
}
.bar-left {
    margin: 0 -15px 0 10px;
    font-size: 13px;
}
.bar-item .icon {
    display: block;
    width: 24px;
    height: 24px;
    margin: 3px 0;
    background: url('~assets/img/detail/detail_bottom.png') 0 0/100%;
}
.bar-item .service {
    background-position: 0 434px;
}
.bar-item .shop {
    background-position: 0 712px;
}
.bar-right {
    line-height: 55px;
    text-align: center;
}
.bar-right .cart {
    background-color: #ffe817;
    padding: 0 10px;
    color: #333;
}
.bar-right .buy {
    background-color: var(--color-high-text);
    color: #fff;
}
</style>