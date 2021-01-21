import {ADDCOUNTER,ADDTOCART} from './mutations-types'

export default {
    ADDCOUNTER(state, payload) {
        payload.count++
    },
    ADDTOCART(state, payload) {
        payload.isActive = true
        state.cartList.push(payload)
    },
    // resetActive(state, payload) {
    //     state.cartList.forEach(item=>item.isActive = true)
    // },
    // resetInactive(state, payload) {
    //     state.cartList.forEach(item=>item.isActive = false)
    // }
}