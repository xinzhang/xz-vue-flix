<template>
    <div id="app">
        <section class="hero is-primary is-medium">
            <router-view></router-view>

            <div class="hero-foot">
                <div class="columns is-mobile">
                    <div v-for="movieChoice in movieChoices" class="column" :key="movieChoice.id">
                        <router-link :to="`/${movieChoice.id}`" tag="li" class="movie-choice">
                            <i
                                :class="[{ 'fa fa-check-circle favorite-check': movieChoice.favorite }]"
                                aria-hidden="true"
                            ></i>
                            <img :src="`${movieChoice.smallImgSrc}`" class="desktop" />
                            <p class="mobile movie-title">{{ movieChoice.subtitle }}</p>
                        </router-link>
                    </div>
                </div>
            </div>
        </section>
        <p class="appreciation-tag">
            Inspired by @makv25's
            <a href="https://dribbble.com/shots/3720358-Daily-Ui-025-TV-app" target="_blank">daily dribble</a>
        </p>
        <a
            href="https://hackernoon.com/building-a-movie-app-interface-with-vue-js-cdc8aeb5db0b"
            target="_blank"
            class="medium-section button is-small"
        >
            <i class="fa fa-medium" aria-hidden="true"></i>
        </a>
        <a href="https://twitter.com/djirdehh" target="_blank" class="twitter-section">
            <i class="fa fa-twitter-square" aria-hidden="true"></i>
        </a>
    </div>
</template>

<script>
import movies from './assets/movies.json';
import router from './router';

export default {
    name: 'App',
    router: router,
    data() {
        return {
            movieChoices: movies,
        };
    },
    components: {},
};
</script>

<style lang="scss">
@import 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.4.2/css/bulma.min.css';
@import 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css';
@import './assets/styles.scss';
</style>
