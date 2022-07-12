<template>
<div class="animate__animated animate__fadeInRight">
    <div class="electric">
    <div class="icon">
      <img src="../../assets/组1.png" alt="" style="height: 24px; width: auto" />
    </div>
    <div class="text">
      <b>电力消耗情况 </b>
      <span style="font-size: 15px"><b>Power consumption</b></span>
    </div>
  </div>
  <electric-OneVue />
</div>
  
</template>

<script setup>
import ElectricOneVue from './ElectricOne.vue';
</script>

<style scoped>
.electric {
  position: absolute;
  left: 1400px;
  top: 753px;
  width: 413px;
  height: 298px;
  /* border: 1px solid red; */
}

.icon {
  /* 组 1 */
  position: absolute;
  left: 1px;
  top: 3.5px;
  width: 38.5px;
  height: 33px;
}

.text {
  position: absolute;
  left: 35px;
  top: -4px;
  width: 417px;
  height: 47px;
  font-family: "box font", -apple-system, BlinkMacSystemFont;
  text-shadow: 3px 3px 15px rgba(92, 211, 254, 1);
  font-size: 28px;
  font-weight: normal;
  line-height: NaNpx;
  letter-spacing: 0em;
  color: #ffffff;
}
</style>
