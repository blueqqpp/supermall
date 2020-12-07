<template>
    <div class="nav-bar">
       <div class="left"><slot name="left"></slot></div>
       <div class="center"><slot name="center"></slot></div>
       <div class="right"><slot name="right"></slot></div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>
.nav-bar{
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    font-size: 16px;
    box-shadow: 0 3px 5px rgba(50,100,100,.2 green, blue, alpha) ;
}
.left,.right{
    width: 60px;
}
.center {
    flex: 1;
}
</style>