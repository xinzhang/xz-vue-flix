import Vue from 'vue';
import VueRouter from 'vue-router';
import Intro from './components/Intro';
import Movie from './components/Movie';
import MovieTrailer from './components/MovieTrailer';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Intro },
    { path: '/:id', component: Movie },
    { path: '/:id/trailer', component: MovieTrailer },
];

const router = new VueRouter({
    routes,
});

export default router;
