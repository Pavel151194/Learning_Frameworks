<template>
    <div>
        <h1>Страница с постами</h1>
        <my-input
            v-model="searchQuery"
            placeholder="Search..."
            v-focus
        />
        <div class="app_btns">
            <my-button>Создать пост</my-button>
            <my-select
                v-model="selectedSort"
                :options="sortOptions"
            />
        </div>

        <my-dialog v-model:show="dialogVisible">
            <post-form/>
        </my-dialog>


        <post-list v-if="!isPostsLoading"
            :posts="sortedAndSearchedPosts"
        />
        <div v-else>Loading...</div>
    </div>
</template>

<script>
import { ref } from 'vue'
import { usePosts } from '@/hooks/usePosts'
import { useSortedPosts } from '@/hooks/useSortedPosts'
import { useSortedAndSearchedPosts } from '@/hooks/useSortedAndSearchedPosts'
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
            sortOptions: [
                { value: 'title', name: 'По названию' },
                { value: 'body', name: 'По описанию' }
            ]
        }
    },
    setup(props) {
        const { posts, isPostsLoading, totalPages } = usePosts(10)
        const { selectedSort, sortedPosts } = useSortedPosts(posts)
        const { searchQuery, sortedAndSearchedPosts } = useSortedAndSearchedPosts(sortedPosts)

        return { posts, isPostsLoading, totalPages, selectedSort, sortedPosts, searchQuery, sortedAndSearchedPosts }
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