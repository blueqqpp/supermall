<template>
    <div class="goods-item" @click="itemclick">
       <img v-lazy='showImage' alt="" @load="imageLoad">
       <div class="good-info">
           <p>{{gooditem.title}}</p>
           <span class="good-price">{{gooditem.price}}</span>
           <img src="~assets/img/common/collect.svg" alt="">
           <span>{{gooditem.cfav}}</span>
       </div>
    </div>
</template>

<script>
export default {
    name: 'GoodsListItem',
    props: {
        gooditem: {
            type: Object,
            default(){
                return {}
            }
        }
    },
    computed: {
        showImage(){
            return this.gooditem.img || this.gooditem.image || this.gooditem.show.img
        }
    },
    methods: {
        imageLoad(){
            this.$bus.$emit('imageLoadFinish')
        },
        itemclick(){
            const iid = this.gooditem.iid || this.gooditem.item_id
            this.$router.push({
                path:'/detail',
                query: {iid}
            })
        }
    }
}
</script>

<style>
.goods-item{
    width: 49%;
    padding: 1px;
}
.goods-item img{
    width: 100%;
    border-radius: 5px;
}
.good-info{
    text-align: center;
    font-size: 14px;
    padding-bottom: 10px;
}
.good-price{
    color: var(--color-high-text);
    margin-right: 10px;
}
.good-info p{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.good-info img{
    width: 14px;
    height: 14px;
    margin-right: 5px;
}
</style>