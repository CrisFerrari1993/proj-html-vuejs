import { createRouter, createWebHistory } from "vue-router";

import Home from './pages/Home.vue';
import NotFound from './pages/NotFound.vue';
import OurTeam from './pages/OurTeam.vue';
import WhatWeOffer from './pages/WhatWeOffer.vue';


const router = createRouter ({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: NotFound
        },
        {
            path: '/ourteam',
            name: 'ourteam',
            component: OurTeam
        },
        {
            path: '/whatweoffer',
            name: 'whatWeOffer',
            component: WhatWeOffer
        }
    ]
})
export { router };