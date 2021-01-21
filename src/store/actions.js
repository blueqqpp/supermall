import {ADDCOUNTER,ADDTOCART} from './mutations-types'

export default {
    addtocart({state,commit}, payload) {
        return new Promise((resolve, reject) => {
            let oldProduct = state.cartList.find(item => item.iid === payload.iid)
           if (oldProduct) {
               commit('ADDCOUNTER', oldProduct)
               resolve('加入商品数量+1')
           } else {
            payload.count = 1
               commit('ADDTOCART', payload)
               resolve('加入购物车')
         }
        })
   }
}