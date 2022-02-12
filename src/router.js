import { createWebHistory, createRouter } from "vue-router";
import List from './components/List.vue';
import Home from './components/Home.vue';
import Detail from "@/components/Detail.vue";
import Error from "./components/error.vue";

const routes = [
    {
        path: "/list",
        component: List,
    },
    {
        path: "",
        component: Home,
    },
    {
        path: "/detail/:id(\\d+)",
        component: Detail,
    },
    {  /*존재하지 않는 경로에 대하여 error 페이지 라우팅 구현*/
        path: "/:error(.*)",
        component: Error
    },
];

const router = createRouter({ /*라우터를 사용하기 위한 문법으로 외울 필요는 없고
그냥 해당 코드로 사용한다고만 알면 되며 route 변수의 부분만 수정해주면 됨*/
    history: createWebHistory(),
    routes,
});

export default router;