import { createApp } from 'vue';
import App from './App.vue';
// import vueMetaManager from './meta'
import 'element-plus/dist/index.css';
import { createMetaManager } from 'vue-meta';
import router from './router';

const app = createApp(App);

const getOptions = binding => {
  const itemHeight = binding.value.itemHeight || 60;
  const rate = binding.value.rate || 1;
  const load = binding.value.load || (() => {});

  return { itemHeight, rate, load };
};

app.directive('infinite-scroll', {
  async mounted(el, binding) {
    const { rate, load } = getOptions(binding);

    const onScroll = () => {
      // 向下刷新
      if (el.scrollTop + el.clientHeight >= el.scrollHeight) {
        binding.value();
        for (let i = 0; i < rate; i++) {
          load('down');
        }
      }
      // 向上刷新
      if (el.scrollTop <= 0) {
        for (let i = 0; i < rate; i++) {
          load('up');
        }
      }
    };

    el.addEventListener('scroll', onScroll);
  },

  unmounted(el) {
    const { onScroll } = el[__SCOPE__];
    el.removeEventListener('scroll', onScroll);
  }
});

app.use(router).use(createMetaManager()).mount('#app');
