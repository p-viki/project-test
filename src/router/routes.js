const routes = [
    {
        path: '/',
        name: "Home",
        component: () => import("../views/home/index.vue"),
    }
]

export default routes