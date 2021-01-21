import { debounce } from 'common/utils'
import {POP,NEW,SELL} from './const'
import BackTop from 'components/content/backtop/BackTop'

export const itemListener = {
    data() {
        return {
          itemListener: null,
          newRefresh: null
        }
    },
    mounted() {
        this.newRefresh = debounce(this.$refs.scroll.refresh,300)
        this.itemListener = ()=>{
          this.newRefresh()
        }
        this.$bus.$on('imageLoadFinish',this.itemListener)
      },
} 
export const backtop = {
  components: {
     BackTop
  },
  data() {
    return {
      isshowBack: false,
    }
  },
  methods: {
    backtop(){
      this.$refs.scroll.scrollTo(0,0,500)
    }
  }
}

export const tabControlMixin = {
  data() {
    return {
      currentType: POP
    }
  },
  methods: {
    tabClick(index) {
      switch (index) {
        case 0: this.currentType = POP
          break
        case 1: this.currentType = NEW
          break
        case 2: this.currentType = SELL
          break
      }
    }
    
  }
}