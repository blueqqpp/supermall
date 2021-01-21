<template>
    <div class="wrapper" ref="wrapper">
      <div>
          <slot></slot>
      </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name: 'Scroll',
    props: {
        probeType:{
            type: Number,
            default: 0
        },
        pullUpLoad:{
            type: Boolean,
            default: false
        }
    },
    data(){
        return {
            scroll: null
        }
    },
    mounted(){
        //一般不要使用document.querySelector('wrapper),因为会有多个
        this.scroll = new BScroll(this.$refs.wrapper,{
           click: true,
           probeType: this.probeType,
           pullUpLoad: this.pullUpLoad
        }),
        
        this.scroll.on('scroll',position=>{
            this.$emit('scroll',position)
        }),
        
        this.pullUpLoad && this.scroll.on('pullingUp',()=>{
            this.$emit('pullingUp')
        })
        
    },
    computed: {
        scrollY(){
            return this.scroll.y
        }
    },
    methods:{
        scrollTo(x,y,time=300){
            this.scroll && this.scroll.scrollTo(x,y,time)
        },
        refresh(){
            this.scroll && this.scroll.refresh()
        },
        finishPullUp(){
            this.scroll && this.scroll.finishPullUp()
        }
    }
}
</script>

<style scoped>
.wrapper {
    overflow: hidden;
}
</style>