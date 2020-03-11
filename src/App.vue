<template>
    <div id="app">
        <section class="hero is-primary is-medium">
            <router-view></router-view>
            <div class="hero-foot">
                <div class="columns is-mobile">
                    <div v-for="movieChoice in movieChoices" class="column" :key="movieChoice.id">
                        <router-link :to="`/${movieChoice.id}`" tag="li" class="movie-choice">
                            <img :src="`${movieChoice.smallImgSrc}`" class="desktop" />
                            <p class="mobile">{{ movieChoice.subtitle }}</p>
                        </router-link>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import movies from './assets/movieData.json';
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
@import './assets/styles.scss';
</style>
