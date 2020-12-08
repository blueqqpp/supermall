<template>
    <div class="recommend">
      <div v-for="item in recommends" :key='item.sort' class="recommend-item">
          <a :href="item.link">
              <img :src="item.image" alt="">
              <p>{{item.title}}</p>
          </a>
      </div>
    </div>
</template>

<script>
export default {
    name:'RecommendView',
    props: {
        recommends:{
            type: Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style>
.recommend{
    display: flex;
    text-align: center;
    padding: 10px 0 20px;
    font-size: 14px;
    border-bottom: 10px solid rgb(247, 242, 242);
}
.recommend-item{
    flex: 1;
}
.recommend-item img{
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
}
</style>