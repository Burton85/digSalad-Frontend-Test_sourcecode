<script setup lang="ts">
import { ref, inject } from 'vue';
import RepoService from '../helper/RepoService.js';
const setLoading: any = inject('setLoading');
setLoading(true);
const currentPage = ref(1);
const repoList = ref([]);
const load = () => {
  setLoading(true);
  currentPage.value++;
  RepoServiceObj.getRepoList(currentPage.value);
};

const RepoServiceObj: any = new RepoService();
RepoServiceObj.init();
RepoServiceObj.onInit(res => {
  console.log(res);
  setLoading(false);
  repoList.value.push(...res);
});
RepoServiceObj.onRepoChange(res => {
  console.log(res);
  setLoading(false);
  repoList.value.push(...res);
});
</script>

<template>
  <ul v-infinite-scroll="load" class="infinite-list" style="overflow: auto">
    <li v-for="repo in repoList" :key="repo.id" class="infinite-list-item">
      <h2>{{ repo.name }}</h2>
      <p>{{ repo.description }}</p>
      <a :href="repo.html_url" target="_blank">{{ repo.html_url }}</a>
    </li>
  </ul>
</template>
