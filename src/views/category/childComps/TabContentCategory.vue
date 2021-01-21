<template>
  <div>
       <grid-view :cols='3' :v-margin='20' :linespace='15' v-if='subcategories.list'>
       <div class="item" v-for='(item,index) in subcategories.list' :key="index">
           <a :href="item.link">
               <div class="item-img"><img :src="item.image" alt=""></div>
               <div class="item-text">{{item.title}}</div>
           </a>
       </div>
    </grid-view>
  </div>
</template>

<script>
import GridView from 'components/common/gridview/GridView'
export default {
  name: 'TabContentCategory',
  components: {
    GridView
  },
  props: {
      subcategories: {
          type: Object,
          default(){
              return {}
          }
      }
  }
}
</script>

<style scoped>
img {
    width: 100%;
}
.item {
    text-align: center;
}
.item-img {
    width: 82%;
}
.item-text {
  margin-top: 15px;
  font-size: 12px;
}
</style>