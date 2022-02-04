<template>
    <div>
        <h1>Страница с постами</h1>
        <my-input
            :model-value="searchQuery"
            @update:model-value="setSearchQuery"
            placeholder="Search..."
            v-focus
        />
        <div class="app_btns">
            <my-button @click="showDialog">Создать пост</my-button>
            <my-select
                :model-value="selectedSort"
                @update:model-value="setSelectedSort"
                :options="sortOptions"
            />
        </div>

        <my-dialog v-model:show="dialogVisible">
            <post-form @create="createPost"/>
        </my-dialog>


        <post-list v-if="!isPostsLoading"
            :posts="sortedAndSearchPosts"
            @remove="removePost"
        />
        <div v-else>Loading...</div>
        <!-- <pagination
            :totalPages="totalPages"
            @changePage="fetchPosts">
        </pagination> -->
        <div v-intersection="loadMorePosts"></div>
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
import PostForm from '@/components/PostForm.vue'
import PostList from '@/components/PostList.vue'
import Pagination from '@/components/Pagination.vue'
import MyButton from '@/components/UI/MyButton.vue'
import MySelect from '@/components/UI/MySelect.vue'
import MyInput from '@/components/UI/MyInput.vue'

export default {
    components: {
        PostForm, PostList, Pagination,
        MyButton, MySelect, MyInput
    },
    data() {
        return {
            dialogVisible: false,
        }
    },
    methods: {
        ...mapMutations({
            setPage: 'post/setPage',
            setSearchQuery: 'post/setSearchQuery',
            setSelectedSort: 'post/setSelectedSort'
        }),
        ...mapActions({
            loadMorePosts: 'post/loadMorePosts',
            fetchPosts: 'post/fetchPosts'
        }),
        createPost(post) {
            this.posts.push(post)
            this.dialogVisible = false
        },
        removePost(post) {
            this.posts = this.posts.filter(p => p.id !== post.id)
        },
        showDialog() {
            this.dialogVisible = true
        },
    },
    mounted() {
        // this.fetchPosts()
    },
    computed: {
        ...mapState({
            posts: state => state.post.posts,
            isPostsLoading: state => state.post.isPostsLoading,
            selectedSort: state => state.post.selectedSort,
            searchQuery: state => state.post.searchQuery,
            limit: state => state.post.limit,
            totalPages: state => state.post.totalPages,
            page: state => state.post.page,
            sortOptions: state => state.post.sortOptions
        }),
        ...mapGetters({
            sortedPost: 'post/sortedPost',
            sortedAndSearchPosts: 'post/sortedAndSearchPosts'
        })
    },
    watch: {

    }
}
</script>

<style>
.app_btns {
    margin: 15px 0;
    display: flex;
    justify-content: space-between;
}
</style>