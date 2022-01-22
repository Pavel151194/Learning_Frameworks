<template>
   <button class="btn">
       <slot></slot>
   </button>
</template>

<script>
export default {
    name:'my-button'
}
</script>

<style scoped>
.btn {
    padding: 10px 15px;
    align-self: flex-end;
    background: none;
    color: teal;
    border: 1px solid teal;
    cursor: pointer;
    transition: ease-in-out 150ms;
}
.btn:hover {
    color: white;
    background: teal;
}
</style>