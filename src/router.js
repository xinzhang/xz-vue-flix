import VueRouter from 'vue-router';

const Intro = {
    template: `<div class="hero-body" style="background: #1e1d1d">
      <div class="container has-text-centered">
        <div class="columns">
          <div class="column is-half is-offset-one-quarter vertical-align">
            <h1 class="home-intro">
              VueFlix
            </h1>
            <p class="home-subintro">Select a movie below from the list of critically acclaimed Christopher Nolan films.</p>
          </div>
        </div>
      </div>
    </div>`,
};

const routes = [
    { path: '/', component: Intro },
    { path: '/:id', component: Movie },
];

const router = new VueRouter({
    routes,
});

export default router;
