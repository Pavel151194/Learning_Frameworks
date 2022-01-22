<template>
    <form @submit.prevent>
        <h4>Создание поста</h4>
        <my-input
            v-focus
            v-model:value="post.title"
            placeholder="Название"
        />
        <my-input
            v-model:value="post.body"
            placeholder="Описание"
        />
        <my-button @click="createPost">Создать</my-button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            post: {
                title: '',
                body: ''
            }
        }
    },
    methods: {
        createPost() {
            this.post.id = Date.now()
            this.$emit('create', this.post)
            this.post = {
                title: '',
                body: ''
            }
        }
    }
}
</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

</style>