<template>
  <metainfo>
    <template v-slot:title="{ content }">{{ content }}</template>
  </metainfo>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <br />
  <transition name="fade">
    <Loading v-if="isLoading"></Loading>
  </transition>
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

    // Add meta info
    // The object passed into useMeta is user configurable
    // const { meta } = useMeta({
    //   title: 'My Title',
    // })

    // watchEffect(() => {
    //   const counterValue = counter.value
    //   meta.description = `Counted ${counterValue} times`
    // })

    // Or use a computed prop
    const computedMeta = computed(() => ({
      title: 'My Title' + state.count,
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

    // const { meta, onRemoved } = useMeta(computedMeta)

    // onRemoved(() => {
    //   // Do something as soon as this metadata is removed,
    //   // eg because the component instance was destroyed
    // })

    // Get the currently used metainfo
    // const metadata = useActiveMeta()

    // watch(metadata, (newValue) => {
    //   // metadata was updated, do something
    // })
    // useMeta({
    //   title: 'My Example App',
    //   htmlAttrs: {
    //     lang: 'cn',
    //     amp: true
    //   }
    // })
    return {
      state,
      increment,
      isLoading
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
