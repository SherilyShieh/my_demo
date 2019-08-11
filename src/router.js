import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Day2 from './views/Day2.vue'
import Test from './views/Test.vue'
Vue.use(Router)


export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            redirect: '/day1'
        },
        {
            path: '/day1/:id',
            name: 'day1',
            beforeEnter: (to, from, next) => {
                console.log('beforeEnter')
                next()
            },
            // component: Home
            components: {
                default: () =>
                    import ('./views/Home.vue'),
                test: Test
            }

        },
        {
            path: '/day2/:id',
            name: 'day2',
            props: true,
            // component: Day2,
            components: {
                default: Day2,
                // test: Home
            },
            children: [{
                path: 'test',
                name: 'test',
                component: Test
            }]
        }
    ]
});