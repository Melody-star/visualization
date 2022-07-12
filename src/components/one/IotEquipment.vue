<template>
  <div class="animate__animated animate__fadeInRight">
    <div class="iotequipment">
      <div class="icon">
        <img src="../../assets/组1.png" style="height: 24px; width: auto" />
      </div>
      <div class="text">
        <b>物联设备总览 </b>
        <span style="font-size: 15px"><b>Overview of IOT devices</b></span>
      </div>
      <iot-NumVue :dataapi="dataapi"/>
      <div class="iot">
        <span class="title" style="margin-left: 70px;text-shadow: 3px 3px 15px rgba(92, 211, 254, 1);"><b>完好率</b></span>
        <span class="title" style="margin-left: 100px;text-shadow: 3px 3px 15px rgba(92, 211, 254, 1);"><b>使用率</b></span>
        <el-divider class="_main_divider" />
      </div>
    </div>
    <Iot-vue />
    <iot-TwoVue />
  </div>
</template>

<script>
import IotNumVue from './IotNum.vue';
import IotVue from "./Iot.vue";
import IotTwoVue from "./IotTwo.vue";

export default {
  // data() {
  //   return {
  //     dataapi: {},
  //   };
  // },
  // created() {
  //   this.getapi();
  // },
  // methods: {
  //   getapi() {
  //     var that = this;
  //     this.axios.get("http://127.0.0.1:8000/api/iotequipment").then(
  //       function (response) {
  //         that.dataapi = response.data;
  //       },
  //       function (error) {
  //         console.log(error);
  //       }
  //     );
  //   },
  //   timer() {
  //     return setTimeout(() => {
  //       this.getapi();
  //     }, 5000);
  //   },
  // },
  // watch: {
  //   dataapi() {
  //     this.timer();
  //   },
  // },
  // destroyed() {
  //   clearTimeout(this.timer);
  // },
  components: {
    IotNumVue,IotVue,IotTwoVue
  },
};
</script>

<style scoped>
.iotequipment {
  position: absolute;
  left: 1400px;
  top: 460px;
  width: 413px;
  height: 550px;
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

.iot {
  position: relative;
  /* border: 1px solid red; */
  width: 360px;
  height: 200px;
  left: 24px;
  top: 5px;
}

.title {
  color: white;
  font-size: 20px;
  font-family: "box font", -apple-system, BlinkMacSystemFont;
}

._main_divider {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
