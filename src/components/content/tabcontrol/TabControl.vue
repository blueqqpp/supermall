<template>
    <div class="tab-control">
        <div v-for="(item,index) in titles" 
        :key='index' class="tab-control-item" 
        :class="{active: currentIndex==index}"
        @click="itemClick(index)">
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name:'TabControl',
        props: {
            titles: {
                type: Array,
                default(){
                    return []
                }
            }
        },
        data(){
            return {
                currentIndex:0
            }
        },
        methods:{
            itemClick(index){
                this.currentIndex = index
                this.$emit('tabClick',index)
            }
        }
    }
</script>

<style>
.tab-control {
    /* position: sticky;
    top: 44px; */
    background-color: #fff;
    display: flex;
    text-align: center;
    font-size: 15px;
    height: 40px;
    line-height: 40px;
}
.tab-control-item {
    flex: 1;
} 
.tab-control-item span{
    padding: 5px;
    height: 50px;
}
.active{
    color: var(--color-high-text);
}
.active span{
    border-bottom: 2px solid var(--color-high-text);
}

</style>