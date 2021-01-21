<template>
    <div class="item-params" v-if="Object.keys(itemParams)!==0">
       <table class="rule">
           <tr v-for='(item,index) in itemParams.tables' :key="index">
               <td v-for='(r,index) in item' :key="index">{{r}}</td>
           </tr>
       </table>
       <table class="info">
           <tr v-for='(item,index) in itemParams.set' :key="index">
               <td class="key">{{item.key}}</td>
               <td class="value">{{item.value}}</td>
           </tr>
       </table>
       <div class="image">
           <img :src="itemParams.image" alt="">
       </div>
    </div>
</template>

<script>
export default {
  name:'DetailItemParams',
  props: {
      itemParams: {
          type: Object,
          default(){
              return {}
          }
      }
  }
}
</script>

<style  scoped>
.item-params {
    font-size: 14px;
    padding: 20px 15px;
    border-bottom: 5px solid #f2f5f8;;
}
.item-params table{
    width: 100%;
    border-collapse: collapse;
}
.rule tr,
.info tr
 {
    /* padding: 10px; */
    height: 42px;
    border-bottom: 1px solid rgba(100, 100, 100, .1);
}
.info .key{
    width: 100px;
}
.info .value{
    color: var(--color-high-text)
}
.image img{
    width: 100%;
}
</style>