<template>
  <div id="box">
    <div class="logo">
      <img src="../../assets/logo.png" alt="" />
    </div>
    <div class="text">三维可视化智慧校园平台</div>

    <router-link to="/CampusOverview">
      <div class="but">
        <div class="start">进入</div>
        <div class="placeholder">
          <img src="../../assets/placeholder.png" alt="" />
        </div>
      </div>
    </router-link>

    <time-vue></time-vue>

    <router-view></router-view>
  </div>
</template>

<script setup>
import TimeVue from "../Time.vue";
</script>

<style scoped>
#box {
  height: 1080px;
  width: 1920px;
  background-color: #c5d7eb;
  position: absolute;
}

.logo {
  height: 105px;
  width: 621px;
  position: absolute;
  left: 561px;
  top: 323px;
  width: 621px;
  height: 105px;
  background-repeat: no-repeat;
}

img {
  height: 100%;
  width: 100%;
}

.text {
  /* 三维可视化智慧校园平台 */
  position: absolute;
  left: 563px;
  top: 473px;
  width: 794px;
  height: 133px;
  font-family: OPPOSans-B;
  font-size: 72px;
  font-weight: bold;
  line-height: 63px;
  letter-spacing: 0em;
  color: #ffffff;
}

.but {
  /* Button */
  position: absolute;
  left: 886px;
  top: 709px;
  width: 128px;
  height: 48px;
  display: flex;
  padding: 12px 32px;
  border-radius: 100px;
  box-sizing: border-box;
  border: 1px solid #2563eb;
  /* box-shadow: 5px 5px 10px 0px #bebebe, -5px -5px 10px 0px #ffffff; */
}

.start {
  /* Label */
  position: static;
  left: 32px;
  top: 12px;
  width: 32px;
  height: 24px;
  font-family: SourceHanSansCN-Regular;
  font-size: 16px;
  font-weight: normal;
  line-height: 24px;
  letter-spacing: 0px;
  color: #2563eb;
}

.placeholder {
  /* placeholder */
  position: absolute;
  left: 70px;
  top: 12px;
  width: 24px;
  height: 24px;
}
</style>
