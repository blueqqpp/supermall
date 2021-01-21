<template>
    <div>
       <div class="userinfo">
           <div class="icon">
               <img src="~assets/img/profile/avatar.svg" alt="">
           </div>
           <div class="reg">
               <div class="login">登录/注册</div>
               <div class="phone">
                   <img src="~assets/img/profile/phone.svg" alt="">
                   <span>暂无绑定手机号</span>
                </div>
           </div>
           <div class="right">
               <img src="~assets/img/common/arrow-left.svg" alt="">
           </div>
       </div>
    </div>
</template>

<script>
export default {
   
}
</script>

<style scoped>
.userinfo {
    display: flex;
    justify-content: flex-start;
    height: 70px;
    padding: 0 0 0 10px;
    background-color: var(--color-tint);
}
.reg {
    flex: 1;
}
.icon img {
    height: 60px;
    width: 60px;
    vertical-align: middle;
}
.reg {
    margin: 10px 0 0 10px;
    color: #fff;
}
.reg img {
    height: 20px;
    width: 20px;
}
.phone {
    margin-top: 5px;
    font-size: 12px;
    font-weight: 200;
}
.phone img {
    vertical-align: middle;
    margin-left: -5px;
}
.right {
    margin-right: 20px;
    width: 15px;
    line-height: 70px;
}
.right img {
    height: 20px;
    width: 20px;
}
</style>