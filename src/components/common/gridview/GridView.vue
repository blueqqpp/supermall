<template>
    <div ref='gridView' class="gridview">
       <slot></slot>
    </div>
</template>

<script>
export default {
   name:'GridView',
   props: {
       cols: {
           type: Number,
           default: 2
       },
       vMargin: {
           type: Number,
           default: 8
       },
        hMargin: {
           type: Number,
           default: 8
       },
        linespace: {
           type: Number,
           default: 8
       },
        itemspace: {
           type: Number,
           default: 8
       }
   },
   mounted: function(){
       setTimeout(this._autoLayout,20)
   },
   updated: function(){
       this._autoLayout()
   },
   methods: {
       _autoLayout(){
           let gridEl = this.$refs.gridView
           let children = gridEl.children
           //设置内边距
           gridEl.style.padding = `${this.vMargin}px ${this.hMargin}px`
           //计算item的大小
           let itemWidth = (gridEl.clientWidth-2*this.hMargin-(this.cols-1)*this.itemspace)/this.cols
           for(let i=0;i<children.length;i++){
               let item = children[i]
               item.style.width = itemWidth + 'px'
               if((i+1)%this.cols!==0){
                   item.style.marginRight = this.itemspace + 'px'
               }
               if(i>=this.cols){
                   item.style.marginTop = this.linespace + 'px'
               }
           }
       }
   }
}
</script>

<style scoped>
.gridview {
   display: flex;
   flex-wrap: wrap;
}
</style>