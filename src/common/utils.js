 //防抖函数，原本图片完成要加载30次，现在只需要几次
export function debounce(func, delay) {
    let timer = null
    return function (...args) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            func.apply(this, args)
        }, delay);
    }
}