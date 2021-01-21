<template>
  <div id="category">
   <nav-bar class='navbar'><div slot="center">商品分类</div></nav-bar>
   <div class="content">
        <tab-menu :categories='categories'
                  @selectItem='itemClick'></tab-menu>
          <scroll id="tab-content" ref='scroll'>
             <tab-content-category :subcategories='showSubcategory'></tab-content-category>
             <tab-control :titles="['综合','新品','销量']" @itemClick="tabClick"></tab-control>
             <goods-list :goods="showCategoryDetail"></goods-list>
          </scroll>
   </div>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

import TabMenu from './childComps/TabMenu'
import TabContentCategory from './childComps/TabContentCategory'

import Scroll from 'components/common/scroll/Scroll'
import GoodsList from 'components/content/goods/GoodsList'
import TabControl from 'components/content/tabcontrol/TabControl'

import {getCategory,getSubcategory,getCategoryDetail} from 'network/category.js'
import {POP,NEW,SELL} from 'common/const'
import {itemListener,tabControlMixin} from 'common/mixin'
import { debounce } from 'common/utils'



export default {
  name:'Catogray',
  components: {
    NavBar,
    TabMenu,
    TabContentCategory,
    Scroll,
    GoodsList,
    TabControl
  },
  mixins: [itemListener,tabControlMixin],
  data(){
    return {
      categories: [],
      categoryData: {},
      currentIndex: -1
    }
  },
  created(){
    //请求分类数据
      this._getCategory()
  },
  computed: {
     showSubcategory(){
       if(this.currentIndex==-1) return {}
       return this.categoryData[this.currentIndex].subcategories
     },
     showCategoryDetail(){
       if(this.currentIndex==-1) return {}
       return this.categoryData[this.currentIndex].categoryDetail[this.currentType]
     }
  },
  methods: {
    _getCategory(){
      getCategory().then(res=>{
        //获取分类的数据
        this.categories = res.data.category.list
        console.log(res)
        //进行初始化
        for(let i=0;i<this.categories.length;i++){
          this.categoryData[i]={
            subcategories: {},
            categoryDetail: {
              'pop':[],
              'new':[],
              'sell':[]
            }
          }
        }
        //获取第一个分类的数据
        this._getSubcategories(0)
      })
    },
    _getSubcategories(index){
       this.currentIndex = index
       const maitKey = this.categories[index].maitKey
       getSubcategory(maitKey).then(res=>{
         this.categoryData[index].subcategories = res.data
         this.categoryData = {...this.categoryData}
         this._getCategoryDetail(POP)
         this._getCategoryDetail(NEW)
         this._getCategoryDetail(SELL)
       })
    },
    _getCategoryDetail(type){
      const miniWallkey = this.categories[this.currentIndex].miniWallkey
      getCategoryDetail(miniWallkey,type).then(res=>{
        this.categoryData[this.currentIndex].categoryDetail[type] = res
        this.categoryData = {...this.categoryData}
      })
    },
    itemClick(index){
       this._getSubcategories(index)
    }
  }
}
</script>

<style scoped>
#category {
  height: 100vh;
}
.navbar {
  font-weight: 700;
  background-color: var(--color-tint);
  color: #fff;
}
.content {
  position: absolute;
  left: 0;  
  right: 0;
  top: 44px;
  bottom: 49px;
  display: flex;
}
#tab-content {
  height: 100%;
  flex: 1;
}

</style>