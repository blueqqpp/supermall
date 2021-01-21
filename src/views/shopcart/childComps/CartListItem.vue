<template>
    <div class="list-item">
      <div class="info-choose">
          <check-button :is-active='product.isActive' @click.native="checkClick"></check-button>
      </div>
      <div class="info-img">
          <img :src="product.img" alt="">
      </div>
      <div class="info-detail">
          <div class="title">{{product.title}}</div>
          <div class="desc">{{product.desc}}</div>
          <div class="info-price">
              <div class="price">￥{{product.price}}</div>
              <div class="number">x{{product.count}}</div>
          </div>
      </div>
    </div>
</template>

<script>
import CheckButton from 'components/content/checkbutton/CheckButton'

export default {
   name: 'CartListItem',
   components: {
       CheckButton
   },
   props: {
       product: {
           type: Object,
           default(){
               return {}
           }
       }
   },
   methods: {
        checkClick(){
            this.product.isActive = !this.product.isActive
        }
    } 
}
</script>

<style scoped>
.list-item {
    width: 100%;
    padding: 10px 15px;
    display: flex;
    height: 130px;
    border-bottom: 1px solid #ced2d3;
}
.info-choose{
    flex: 1;
    display: flex;
}
.info-img img {
    height: 110px;
    width: 90px;
    border-radius: 7px;
}
.info-detail {
    padding: 0 10px;
    overflow: hidden;
}
.title,
.desc {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.title {
    color: #333333;
    font-size: 17px;
    margin-bottom: 20px;
}
.desc {
    font-size: 14px;
    margin-bottom: 30px;
}
.info-price {
    display: flex;
    justify-content: space-between;
}
.price {
    color: #fa631d
}
</style>