<template>
   <div class="tab-bar-item" @click="tab">
       <div v-if="!isactive"><slot name="item-icon"></slot></div>
       <div v-else><slot name="item-icon-active"></slot></div>
       <!-- <div :class="{active:isactive}"> <slot name="item-text"></slot></div> -->
       <div :style="activeStyle"> <slot name="item-text"></slot></div>
    </div>
</template>

<script>
export default {
    name: 'TabBarItem',
    props: {
       path: String,
       activeColor: {
           type: String,
           default: 'red'
       }
    },
    data(){
        return {
            // isactive: false
        }
    },
    computed: {
       isactive(){
        //    return this.$route.path == this.path
        return this.$route.path.indexOf(this.path)!==-1
       },
       activeStyle(){
           return this.isactive ? {color:this.activeColor} : {}
       }
    },
    methods:{
        tab(){
            this.$router.replace(this.path)
        }
    },
}
</script>

<style>
.tab-bar-item{
   flex: 1;
   font-size: 14px;
}
.tab-bar-item img{
  margin-top: 5px;
  height: 24px;
  width: 24px;
  vertical-align: middle;
}
/* .active{
    color: red;
} */
</style>