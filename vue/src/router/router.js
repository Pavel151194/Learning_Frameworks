import { createRouter, createWebHashHistory } from 'vue-router'
import Main from '@/pages/Main'
import PostPage from '@/pages/PostPage'
import PostPageWithStore from '@/pages/PostPageWithStore'
import PostPageCompositionApi from '@/pages/PostPageCompositionApi'
import About from '@/pages/About'
import PostIdPage from '@/pages/PostIdPage'

const routes = [
    {
        path: '/',
        component: Main 
    },
    {
        path: '/posts',
        component: PostPage 
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/posts/:id',
        component: PostIdPage
    },
    {
        path: '/store',
        component: PostPageWithStore
    },
    {
        path: '/composition',
        component: PostPageCompositionApi
    }
]

const router = createRouter({
    routes,
    history: createWebHashHistory(process.env.BASE_URL)
})

export default router