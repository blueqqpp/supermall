import request from './request'

export function getDetail(iid) {
    return request({
        url: '/detail',
        params: {
          iid
        }
    })
}

export function getRecommend() {
    return request({
        url: '/recommend'
    })
}

export class Goods{
    constructor(itemInfo, columns, services) {
        this.title = itemInfo.title
        this.oldPrice = itemInfo.oldPrice
        this.newPrice = itemInfo.price
        this.realPrice = itemInfo.lowNowPrice
        this.discount = itemInfo.discountDesc
        this.discountBgC = itemInfo.discountBgColor
        this.desc = itemInfo.desc
        this.columns = columns
        this.services = services
    }
}

export class Shop{
    constructor(shopInfo) {
        this.name = shopInfo.name
        this.shopLogo = shopInfo.shopLogo
        this.fans = shopInfo.cFans
        this.goodsCount = shopInfo.cGoods
        this.sells = shopInfo.cSells
        this.score = shopInfo.score
    }
}

export class ItemParams{
    constructor(info, rule) {
        this.set = info.set
        this.tables = rule.tables[0]
        this.image = info.images ? info.images[0] : '';
    }
}