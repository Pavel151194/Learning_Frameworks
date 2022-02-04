<template>
    <div class="navbar">
        <div class="home" @click="$router.push('/')">Домой</div>
        <div class="navbar_btns">
            <my-button @click="$router.push('/posts')">Посты</my-button>
            <my-button @click="$router.push('/about')">Инфо</my-button>
            <my-button @click="$router.push('/store')">Store</my-button>
            <my-button @click="$router.push('/composition')">Composition</my-button>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.navbar {
    height: 50px;
    background-color: lightgrey;
    box-shadow: 2px 2px 4px gray;
    display: flex;
    align-items: center;
    padding: 0 15px;
}
.home {
    cursor: pointer;
}
.navbar_btns {
    display: flex;
    gap: 20px;
    margin-left: auto;
}
</style>