<template>
    <div class="comment-info" v-if="Object.keys(commentInfo).length !== 0">
       <div class="title">
           <div>用户评价</div>
           <div class="more">更多</div>
       </div>
       <div class="user-info">
           <!-- <img :src="getUserimage" alt="">   -->
           <!-- <span>{{getUsername}}</span> -->
           <img :src="commentInfo.user.avatar" alt="">
           <span>{{commentInfo.user.uname}}</span>
       </div>
       <div class="comment">
           <p>{{commentInfo.content}}</p>
       </div>
       <div class="date-info">
            <span>{{commentInfo.created | showDate}}</span>
            <span>{{commentInfo.style}}</span>
       </div>
       <div class="picture">
           <img :src="item" alt="" v-for="(item,index) in commentInfo.images" :key="index">
       </div>
    </div>
</template>

<script>
import {formatDate} from 'common/utils'
export default {
    name: 'DetailCommentInfo',
    props: {
        commentInfo: {
           type: Object,
           default() {
		      return {}
          }
        }
    },
    //需要添加，如果对象不为空才显示，一开始加载到的是空对象
    // computed: {
    //     getUserimage(){
    //        if(this.commentInfo && this.commentInfo.user){
    //            return this.commentInfo.user.avatar
    //        }
    //     },
    //     getUsername(){
    //       if(this.commentInfo && this.commentInfo.user){
    //            return this.commentInfo.user.uname
    //        }
    //     }
    // },
    filters: {
        showDate(value){
            let date = new Date(value*1000)
            return formatDate(date,'yyyy-MM-dd hh:mm:ss')
        }
    }
}
</script>

<style scoped>
.comment-info {
    padding-bottom: 25px;
    border-bottom: 5px solid #f2f5f8 ;
}
.title{
    display: flex;
    padding: 0 15px;
    justify-content: space-between;
    height: 50px;
    line-height: 50px;
    border-bottom: 2px solid #f2f5f7
}
.more {
    font-size: 14px;
}
.user-info {
    padding: 10px 15px;
}
.user-info img {
    height: 45px;
    width: 45px;
    border-radius: 50%;
    vertical-align: middle;
    margin-right: 10px;
    border: 1px solid rgba(0,0,0,.1);
}
.comment {
    padding: 5px 15px;
    font-size: 14px;
    line-height: 20px;
}
.date-info {
   padding: 5px 15px;
   font-size: 13px;
   color: #aaa9af
}
.date-info span{
    padding-right: 10px;
}
.picture {
    padding: 0 15px;
    display: flex;
}
.picture img{
    height: 90px;
    width: 80px;
    margin-right: 3px;
}
</style>