<template>
    <div id="check-button">
        <img src="~assets/img/cart/tick.svg" alt="" 
             :class='{"active":isActive}'
             >
    </div>
</template>

<script>
export default {
    name: 'CheckButton',
    props: {
        isActive: {
            type: Boolean,
            default: true
        }
    }
    
}
</script>

<style scoped>
#check-button {
    margin: auto;
    padding-right: 5px;
}
img {
    height: 19px;
    width: 19px;
    border-radius: 50%;
    border: 1px solid #d6dce0;
}
.active {
    border: 1px solid var(--color-tint);
    background-color: var(--color-tint);
}
</style>