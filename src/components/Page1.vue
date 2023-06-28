<script setup lang="ts">
import { ref } from 'vue';
</script>

<template>
  <h1>1.切出一個九宮格，九宮格的每個長方型格子規格如下:</h1>
  <p class="u-mt-2">此方法僅使用純css</p>
  <div class="page u-mt-2">
    <div class="cell u-z-1">
      <div class="ball goRight"></div>
    </div>
    <div class="cell"></div>
    <div class="cell flashing">
      <div class="ball goRight"></div>
    </div>
    <div class="cell"></div>
    <div class="cell flashing"></div>
    <div class="cell"></div>
    <div class="cell u-z-1">
      <div class="ball goRight"></div>
    </div>
    <div class="cell"></div>
    <div class="cell flashing">
      <div class="ball goRight"></div>
    </div>
  </div>
</template>
