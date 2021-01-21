<template>
    <div class="bottom-bar">
       <div class="check-content">
           <check-button class="info-check" :is-active='allChoose' @click.native='clickAll'></check-button>
           <span>全选</span>
       </div>
       <div class="price">合计￥{{totalPrice}}</div>
       <div class="calculate" @click="calcClick">去计算({{counter}})</div>
    </div>
</template>

<script>
import CheckButton from 'components/content/checkbutton/CheckButton'
import { mapGetters } from 'vuex'
export default {
      name: 'CartBottomBar' ,
      components: {
          CheckButton
      },
      computed: {
          ...mapGetters(["cartList","cartLength"]),
          totalPrice(){
              return this.cartList.filter(item=>item.isActive===true).reduce((total,item)=>{
                  return total+item.price*item.count
              },0)
          },
          counter(){
              return this.cartList.filter(item=>item.isActive===true).length
          },
          allChoose(){
              if(this.cartLength==0) return false
              //js高阶函数
            //   return this.cartList.every(item=>item.isActive===true)
            // return !(this.cartList.filter(item=>!item.isActive).length)
            // return !this.cartList.find(item=>!item.isActive)

            //for循环
            for(let c of this.cartList){
                if(!c.isActive){
                    return false
                }
            }
            return true
          }
      },
      methods: {
          clickAll(){
              //以下这两种方式都可以

            //   if(this.allChoose){
            //     this.$store.commit('resetInactive')
            //   }else{
            //      this.$store.commit('resetActive')
            //   }

            if(this.allChoose){
               this.cartList.forEach(item=>item.isActive=false)
            }else{
               this.cartList.forEach(item=>item.isActive=true)
            }
          },
          calcClick(){
              if(!this.counter){
                  this.$toast.show('请先加入购物车',1000)
              }
          }
      }
}
</script>

<style scoped>
.bottom-bar {
    position: relative;
    display: flex;
    height: 40px;
    line-height: 40px;
    /* text-align: center; */
    font-size: 14px;
    background-color: #f1f1f1;
}
.check-content {
    width: 80px;
    margin-right: 20px;
}
.info-check {
    display: inline-block;
    vertical-align: middle;
    padding: 0px 20px 0 10px;
}
.calculate {
    width: 80px;
    text-align: center;
    background-color: #f35911;
    color: #fff;
}
.price{
    flex: 1;
    font-size: 16px;
}
</style>