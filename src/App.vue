<template>
  <metainfo>
    <template v-slot:title="{ content }">{{ content }}</template>
  </metainfo>
  <transition name="fade">
    <Loading v-if="isLoading"></Loading>
  </transition>
  <nav :class="isMenuActive ? 'menu menu--open' : 'menu'">
    <div
      :class="
        isMenuActive
          ? 'menu__container menu__container--open'
          : 'menu__container'
      "
    >
      <a class="menu__item" href="javascript:;">
        <img src="./assets/menu/aboutus.png" alt="aboutus" />
      </a>
      <a class="menu__item" href="javascript:;">
        <img src="./assets/menu/careers.png" alt="careers" />
      </a>
      <a class="menu__item" href="javascript:;">
        <img src="./assets/menu/services.png" alt="services" />
      </a>
      <a class="menu__item" href="javascript:;">
        <img src="./assets/menu/works.png" alt="works" />
      </a>
      <a class="menu__item" href="javascript:;">
        <img src="./assets/menu/insights.png" alt="insights" />
      </a>
      <a class="menu__item" href="javascript:;">
        <img src="./assets/menu/contact.png" alt="contact" />
      </a>
    </div>
    <div :class="isMenuTop ? 'menu__bar' : 'menu__bar menu__bar--scrolled'">
      <div class="menu__logo">
        <img
          v-show="!isMenuActive"
          src="./assets/logo-color.svg"
          alt="digiSalad"
        />
        <img v-show="isMenuActive" src="./assets/logo.svg" alt="digiSalad" />
      </div>
      <div class="menu__sideBtn">
        <a class="menu__start">
          <p>START YOUR PROJECT</p>
        </a>
        <div
          @click="switchMenu()"
          :class="
            isMenuActive
              ? 'menu--trigger active'
              : isMenuTop
              ? 'menu--trigger'
              : 'menu--trigger menu--trigger-scrolled'
          "
        >
          <div class="short"></div>
        </div>
      </div>
    </div>
  </nav>
  <router-view></router-view>
</template>

<script lang="ts">
import { computed, reactive, ref, provide } from 'vue';
import { useMeta } from 'vue-meta';
import Loading from './components/Loading.vue';

export default {
  setup() {
    const isLoading = ref<boolean>(false);
    function setLoading(bol: boolean): void {
      isLoading.value = bol;
    }
    provide('setLoading', setLoading);

    const state = reactive({ count: 0 });

    function increment() {
      state.count++;
    }
    const computedMeta = computed(() => ({
      title: 'Front-End-Developer-Test',
      description: `Counted ${state.count} times`,
      meta: [
        { charset: 'utf-8' },
        {
          name: 'description',
          content:
            'Epiloge is about connecting in your field of interest. Our vision is to help people share their knowledge, work, projects, papers and ideas and build their network through what they do rather where they live, study or work.'
        },
        {
          property: 'og:description',
          content:
            'Epiloge is about connecting in your field of interest. Our vision is to help people share their knowledge, work, projects, papers and ideas and build their network through what they do rather where they live, study or work.' +
            state.count
        },
        {
          property: 'og:title',
          content:
            'Epiloge - Build your network in your field of interest' +
            state.count
        },
        { property: 'og:site_name', content: 'Epiloge' },
        { property: 'og:type', content: 'website' },
        { name: 'robots', content: 'index,follow' },
        { property: 'robots', content: 'index,follow' }
      ]
    }));
    useMeta(computedMeta);

    const isMenuActive = ref<boolean>(false);
    function switchMenu() {
      console.log('switchMenu');
      isMenuActive.value = !isMenuActive.value;
    }

    const isMenuTop = ref<boolean>(true);
    window.addEventListener('scroll', function () {
      var scrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      if (scrollPosition == 0) {
        isMenuTop.value = true;
      } else {
        isMenuTop.value = false;
      }
    });
    return {
      state,
      increment,
      isLoading,
      isMenuActive,
      switchMenu,
      isMenuTop
    };
  },
  mounted() {
    document.dispatchEvent(new Event('render-event'));
  },
  components: {
    Loading
  }
};
</script>

<style lang="scss">
@import './style/main.scss';
/* #app {
  padding-bottom: v-bind(appPadding);
} */
</style>
