import MainView from '../pages/MainView.vue';
import GiftView from '../pages/GiftView.vue';
import ProfileView from '../pages/ProfileView.vue';
import { createRouter, createWebHistory } from 'vue-router'


const routes = [
    { path: "/", name: "Home", component: MainView },
    { path: "/gifts", name: "Gifts", component: GiftView },
    { path: "/profile", name: "Profile", component: ProfileView }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
