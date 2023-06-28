<script setup lang="ts">
import { onMounted, inject } from 'vue';
import { safariHacker } from '../helper/safariHacker.js';
const setLoading: any = inject('setLoading');

onMounted(() => {
  console.log('mounted in the composition api!');
  setLoading(false);
  safariHacker(document.querySelector('#app'));
});

// watch(isVip, filterMarkerList);
</script>
<template>
  <div class="container u-plr-2">
    <nav class="nav u-mtb-2">
      <router-link :to="'test1'">題目1-1</router-link>
      <router-link :to="'page1'">題目2-1</router-link>
      <router-link :to="'page2'">題目2-2</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>
