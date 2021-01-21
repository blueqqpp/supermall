<template>
    <div class="goods-info" v-if='Object.keys(detailInfo).length!==0'>
       <div class="info-desc clear-fix">
           <div class="start"></div>
           <div class="desc">{{detailInfo.desc}}</div>
           <div class="end"></div>
       </div>
       <div class="info-key">
           {{detailInfo.detailImage[0].key}}
       </div>
       <div class="info-list">
           <img v-for="(item,index) in detailInfo.detailImage[0].list" :key="index" :src="item" alt="" @load="imageLoad">
       </div>
    </div>
</template>

<script>
export default {
    name: 'DetailGoodsInfo',
    data(){
       return {
           count: 0,
           imageLength: 0
       }
    },
    props: {
        detailInfo: {
            type: Object,
            default(){
                return {}
            }
        }
    },
    methods: {
        imageLoad(){
            //等所有的图片加载完之后再发送
            // if(++this.count==this.imageLength){
            //   this.$emit('imageLoad')
            // }
            this.$emit('imageLoad')
        }
    },
    watch: {
        //观察detailInfo的实时的改变
        detailInfo(){
          this.imageLength = this.detailInfo.detailImage[0].list.length
        }
    }
}
</script>

<style scoped>
.goods-info {
    padding: 20px 0;
    border-bottom: 5px solid #f2f5f8;
}

.info-desc {
    padding: 0 15px;
}

.info-desc .start, .info-desc .end {
    width: 90px;
    height: 1px;
    background-color: #a3a3a5;
    position: relative;
  }

.info-desc .start {
    float: left;
}

.info-desc .end {
    float: right;
}

.info-desc .end::after {
    right: 0;
}

.info-desc .start::before, .info-desc .end::after {
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: #333;
    bottom: 0;
}

.info-desc .desc {
    padding: 15px 0;
    font-size: 14px;
}

.info-key {
    margin: 20px 10px;
    color: #333;
}

.info-list img {
    width: 100%;
}
</style>