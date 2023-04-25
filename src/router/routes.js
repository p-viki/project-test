const routes = [
    {
        path: '/',
        name: 'Index',
        redirect: "/account",
        children: [
            {
                path: "/account",
                name: "Account",
                component: () => import("@/views/index.vue")
            }]
    }
]

export default routes