<template>
  <div id="gata"></div>
</template>

<script>
import { onMounted } from "vue";
import * as echarts from "echarts";
export default {
  setup() {
    onMounted(() => {
      var chartDom = document.getElementById("gata");
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        xAxis: {
          axisLine: {
            show: true,
            lineStyle: {
              color: "rgba(255, 255, 255, 0.2)",
            },
          },
          axisLabel: {
            color: "#fff",
          },
          type: "category",
          data: [
            "0时-2时",
            "2时-4时",
            "4时-6时",
            "6时-8时",
            "8时-10时",
            "10时-12时",
            "12时-14时",
            "14时-16时",
            "16时-18时",
            "18时-20时",
            "20时-22时",
            "22时-24时",
          ],
        },
        yAxis: {
          axisLabel: {
            color: "#fff",
          },
          type: "value",
          splitLine: {
            show: false,
          },
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        series: [
          {
            itemStyle: {
              color: "#abcdef",
            },
            data: [
              120, 200, 150, 80, 70, 110, 130, 120, 200, 150, 80, 70, 110, 130,
            ],
            type: "bar",
          },
        ],
      };

      option && myChart.setOption(option);
    });
  },
};
</script>

<style>
#gata {
  height: 300px;
  width: 410px;
  position: absolute;
  top: 300px;
  left: 80px;
}
</style>
