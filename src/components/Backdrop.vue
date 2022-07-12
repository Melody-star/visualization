<!-- 边框和渐变 -->

<template>
  <div id="backdrop-left"></div>
  <div id="backdrop-right"></div>
  <div id="frame"></div>
</template>

<script setup></script>

<style scope>
#backdrop-left {
  background-image: linear-gradient(
    to right,
    rgba(197, 215, 235, 1),
    rgba(223, 88, 91, 0)
  );
  height: 1080px;
  width: 600px;
  position: absolute;
  pointer-events: none;
}

#backdrop-right {
  background-image: linear-gradient(
    to right,
    rgba(197, 215, 235, 0),
    rgba(197, 215, 235, 1)
  );
  height: 1080px;
  width: 600px;
  position: absolute;
  left: 1320px;
  pointer-events: none;
}

#frame {
  /* 边框 */
  left: 39px;
  right: 39px;
  top: 110px;
  width: 1900px;
  height: 931px;
  background-image: url(../assets/aaa.png);
  position: absolute;
  background-repeat: no-repeat;
  pointer-events: none;
}
</style>
