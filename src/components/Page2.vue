<script setup lang="ts">
import { ref, onMounted } from 'vue';
const ballsRef = ref([]);
const setBallsRef = _ball => {
  ballsRef.value.push(_ball);
};
function moveToRight(_distance: number) {
  return function (_dom: HTMLDivElement) {
    let domOffset = 0;
    while (domOffset < _distance) {
      domOffset += 5;
      move(domOffset);
    }
    function move(_offset: number) {
      setTimeout(() => {
        _dom.style.transform = `translateX(${_offset}px)`;
      }, _offset * 3);
    }
  };
}
const moveToRight500 = moveToRight(500);

onMounted(() => {
  console.log('balls:', ballsRef.value);
  ballsRef.value.forEach(_ball => {
    // console.log(_ball.style);
    moveToRight500(_ball);
  });
});
</script>

<template>
  <h1>1.切出一個九宮格，九宮格的每個長方型格子規格如下:</h1>
  <p class="u-mt-2">此方法僅使用 ref 控制 dom</p>
  <div class="page u-mt-2">
    <div class="cell u-z-1">
      <div
        class="ball"
        :ref="setBallsRef"
        style="transform: translateX(0)"
      ></div>
    </div>
    <div class="cell"></div>
    <div class="cell flashing">
      <div
        class="ball"
        :ref="setBallsRef"
        style="transform: translateX(0)"
      ></div>
    </div>
    <div class="cell"></div>
    <div class="cell flashing"></div>
    <div class="cell"></div>
    <div class="cell u-z-1">
      <div
        class="ball"
        :ref="setBallsRef"
        style="transform: translateX(0)"
      ></div>
    </div>
    <div class="cell"></div>
    <div class="cell flashing">
      <div
        class="ball"
        :ref="setBallsRef"
        style="transform: translateX(0)"
      ></div>
    </div>
  </div>
</template>
