<template>
    <div class="page_wrapper">
        <div
            v-for="pageNumber in totalPages"
            :key="pageNumber"
            class="page"
            :class="{'current-page': page === pageNumber}"
            @click="changePage(pageNumber)">
            {{ pageNumber }}
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            page: 1,
        }
    },
    props: {
        totalPages: { type: Number, required: true },
    },
    methods: {
        changePage(pageNumber) {
            this.page = pageNumber
        }
    },
    watch: {
        page() {
            this.$emit('changePage', this.page)
        }
    }
}
</script>

<style scoped>
.page_wrapper {
    display: flex;
    margin-top: 15px;
    justify-content: center;
    gap: 5px;
}
.page {
    border: 1px solid black;
    padding: 10px;
    cursor: pointer;
}
.current-page {
    border: 2px solid teal;
}
</style>