<template>
  <div class="animate__animated animate__fadeInLeft">
    <div class="gata">
      <div class="icon">
        <img
          src="../../assets/组1.png"
          alt=""
          style="height: 24px; width: auto"
        />
      </div>
      <div class="text">
        <b>测温门禁系统 </b>
        <span style="font-size: 15px"><b>Access control system</b></span>
      </div>
    </div>

    <div class="total">
      <div>设备数量</div>
      <div>103</div>
      <b>个</b>
    </div>
    <div class="use">
      <div>使用中</div>
      <div>98</div>
      <b>个</b>
    </div>
    <div id="biao"></div>

    <div class="gata1">
      <div class="icon-one">
        <img
          src="../../assets/组1.png"
          alt=""
          style="height: 20px; width: auto"
        />
      </div>
      <div class="text-one">
        <b>各时间段人流量 </b>
      </div>
    </div>

    <gata-OneVue />
    <div class="gata1" style="top: 585px">
      <div class="icon-one">
        <img
          src="../../assets/组1.png"
          alt=""
          style="height: 20px; width: auto"
        />
      </div>
      <div class="text-one">
        <b>今日通过情况 </b>
      </div>
    </div>
    <gata-TwoVue />
  </div>
</template>

<script>
import GataOneVue from "./GataOne.vue";
import GataTwoVue from "./GataTwo.vue";
import "echarts-liquidfill"; //使用水波图
import { onMounted } from "vue";
import * as echarts from "echarts";
export default {
  setup() {
    onMounted(() => {
      var chartDom = document.getElementById("biao");
      var myChart = echarts.init(chartDom);
      var option;
      var value = 0.56;
      var value1 = 0.76;
      var data = [value];
      var option = {
        backgroundColor: "transparent",
        title: [
          {
            x: "50%",
            y: "70%",
            textStyle: {
              //   fontSize: 5,
              fontWeight: "100",
              //   color: "red",
              lineHeight: 16,
              textAlign: "center",
            },
          },
        ],
        graphic: [
          {
            type: "group",
            left: "center",
            top: "30%",
            children: [
              {
                type: "text",
                z: 100,
                left: "40",
                top: "middle",
                style: {
                  fill: "#aab2fa",
                  text: "完好率",
                  font: "10px Microsoft YaHei", //大小
                },
              },
            ],
          },
        ],
        series: [
          {
            type: "liquidFill",
            radius: "47%",
            center: ["50%", "45%"],
            color: [
              {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "#89A7BF",
                  },
                  {
                    offset: 1,
                    color: "#abcdef",
                  },
                ],
                globalCoord: false,
              },
            ],
            data: [value],
            backgroundStyle: {
              borderWidth: 1,
              color: "RGBA(222, 202, 251, 0.3)",
            },
            label: {
              normal: {
                textStyle: {
                  fontSize: 20,
                  color: "#fff",
                },
              },
            },
            outline: {
              show: false,
              borderDistance: 10,
              itemStyle: {
                borderWidth: 2,
                borderColor: "#112165",
              },
            },
          },
        ],
      };
      option && myChart.setOption(option);
    });
  },
  components: { GataOneVue, GataTwoVue },
};
</script>

<style scoped>
.gata {
  position: absolute;
  left: 84px;
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

.gata1 {
  position: absolute;
  left: 90px;
  top: 300px;
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

.total {
  position: absolute;
  left: 84px;
  top: 200px;
  width: 130px;
  height: 80px;
  background: rgba(211, 211, 211, 0.3);
  text-shadow: 3px 3px 15px rgba(92, 211, 254, 1);
}

/* 设备数量 */
.total div:nth-child(1) {
  font-family: "box font", -apple-system, BlinkMacSystemFont;
  color: #ffffff;
  font-size: 25px;
  font-weight: bold;
  padding-left: 15px;
  padding-top: 10px;
}

/* 103 */
.total div:nth-child(2) {
  font-size: 18px;
  font-family: "aaa font", -apple-system, BlinkMacSystemFont;
  color: #d77;
  transform: scale(1, 2);
  float: left;
  padding-left: 45px;
  padding-top: 5px;
}

/* 个 */
.total b {
  color: rgba(255, 255, 255, 0.5);
  float: left;
  font-size: 18px;
  padding-top: 5px;
  padding-left: 8px;
}

.use {
  position: absolute;
  left: 230px;
  top: 200px;
  text-shadow: 3px 3px 15px rgba(92, 211, 254, 1);
  width: 130px;
  height: 80px;
  background: rgba(211, 211, 211, 0.3);
}

.use div:nth-child(1) {
  font-family: "box font", -apple-system, BlinkMacSystemFont;
  color: #ffffff;
  font-size: 25px;
  font-weight: bold;
  padding-left: 30px;
  padding-top: 10px;
}

/* 98 */
.use div:nth-child(2) {
  font-size: 18px;
  font-family: "aaa font", -apple-system, BlinkMacSystemFont;
  color: #d77;
  transform: scale(1, 2);
  float: left;
  padding-left: 50px;
  padding-top: 5px;
}

/* 个 */
.use b {
  color: rgba(255, 255, 255, 0.5);
  float: left;
  font-size: 18px;
  padding-top: 5px;
  padding-left: 8px;
}

#biao {
  height: 150px;
  width: 150px;
  position: absolute;
  top: 175px;
  left: 340px;
}

.iot {
  position: absolute;
  /* border: 1px solid red; */
  width: 360px;
  height: 200px;
  left: 88px;
  top: 305px;
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
