<template>
  <div class="animate__animated animate__fadeInRight">
    <div class="car">
      <div class="icon">
        <img
          src="../../assets/组1.png"
          alt=""
          style="height: 24px; width: auto"
        />
      </div>
      <div class="text">
        <b>车辆概览 </b>
        <span style="font-size: 15px"><b>Vehicle overview</b></span>
      </div>

      <div class="car-num">
        <div style="text-shadow: 3px 3px 15px rgba(92, 211, 254, 1)">
          实时车辆总数
        </div>
        <div style="color:rgb(221, 119, 119);font-size:20px">103</div>
        <b>辆</b>
      </div>

      <div class="gata">
        <div class="icon-one">
          <img
            src="../../assets/组1.png"
            alt=""
            style="height: 20px; width: auto"
          />
        </div>
        <div class="text-one">
          <b>今日离开与进入数量 </b>
        </div>
      </div>

      <car-TwoVue />

      <div class="gata" style="top: 270px">
        <div class="icon-one">
          <img
            src="../../assets/组1.png"
            alt=""
            style="height: 22px; width: auto"
          />
        </div>
        <div class="text-one">
          <b>车辆分布</b>
        </div>
      </div>

      <car-OneVue />
    </div>
  </div>
</template>

<script setup>
import CarTwoVue from "./CarTwo.vue";
import CarOneVue from "./CarOne.vue";
</script>

<style lang="less" scoped>
.car {
  position: absolute;
  left: 1400px;
  top: 153px;
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

.car-num {
  position: absolute;
  left: 0px;
  top: 49px;
  width: 330px;
  height: 50px;
  background: rgba(211, 211, 211, 0.3);
}

/* 实时车辆总数 */
.car-num div:nth-child(1) {
  font-family: "box font", -apple-system, BlinkMacSystemFont;
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
  padding-left: 18px;
  padding-top: 13px;
}

/* 103 */
.car-num div:nth-child(2) {
  font-size: 18px;
  font-family: "aaa font", -apple-system, BlinkMacSystemFont;
  color: #ffffff;
  transform: scale(1, 1.5);
  position: relative;
  left: 250px;
  top: -25px;
}

/* 辆 */
.car-num b {
  color: rgba(255, 255, 255, 0.5);
  font-size: 16px;
  position: relative;
  left: 290px;
  top: -45px;
}

.gata {
  position: absolute;
  left: 0px;
  top: 123px;
  width: 413px;
  height: 298px;
  /* border: 1px solid red; */
}

.icon-one {
  /* 组 1 */
  position: absolute;
  left: 3px;
  top: -2px;
  width: 38.5px;
  height: 33px;
}

.text-one {
  position: absolute;
  left: 35px;
  top: -4px;
  width: 417px;
  height: 47px;
  font-family: "box font", -apple-system, BlinkMacSystemFont;
  text-shadow: 3px 3px 15px rgba(92, 211, 254, 1);
  font-size: 20px;
  font-weight: normal;
  line-height: NaNpx;
  letter-spacing: 0em;
  color: #ffffff;
}
</style>
