<template>
    <div class="account">
      <div class="account-item">
          <div class="number">
              <div class="balance">0.00</div>
              <span>元</span>
          </div>
          <div class="account-info">我的余额</div>
      </div>
      <div class="account-item">
          <div class="number">
              <div class="balance">0</div>
              <span>个</span>
          </div>
          <div class="account-info">我的优惠</div>
      </div>
      <div class="account-item">
          <div class="number">
              <div class="balance">0</div>
              <span>个</span>
          </div>
          <div class="account-info">我的积分</div>
      </div>
    </div>
</template>

<script>
export default {
   
}
</script>

<style  scoped>
.account {
    display: flex;
    /* height: 90px; */
    border-bottom: 15px solid rgb(236, 234, 234);
}
.account-item {
    background-color: #fff;
    padding: 20px;
    font-size: 12px;
    font-weight: 400;
    color: #666;
    text-align: center;
    width: 100%;
    margin-right: 1px;
}
.account-item:last-of-type {
    margin-right: 0;
}
.balance {
    display: inline-block;
    font-size: 24px;
    font-weight: 700;
    color: orangered
}
.number {
    margin-bottom: 5px;
}
</style>