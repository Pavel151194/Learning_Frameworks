<template>
    <div class="post-list" v-if="posts.length">
        <h3>Список постов</h3>
        <transition-group name="post-list">
            <post-item
                v-for="post in posts"
                :key="post.id"
                :post="post"
                @remove="$emit('remove', post)"
            />
        </transition-group>
    </div>
    <h2 v-else>Список постов пуст</h2>
</template>

<script>
import PostItem from './PostItem.vue'
export default {
    components: { 
        PostItem 
    },
    props: {
        posts: { type: Array, required: true }
    }
}
</script>

<style scoped>
.post-list {
    display: flex;
    flex-direction: column;
    gap: 15px;
}
.post-list-item {
    display: inline-block;
    margin-right: 10px;
}
.post-list-enter-active, .post-list-leave-to {
    transition: all 0.4s ease;
}
.post-list-enter-from, .post-list-leave-to {
    opacity: 0;
    transform: translateX(130px);
}
.post-list-move {
    transition:  transform 0.4s ease;
}
</style>