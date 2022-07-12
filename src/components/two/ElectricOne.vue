<template>
  <div id="electricone"></div>
</template>

<script>
import { onMounted } from "vue";
import * as echarts from "echarts";
export default {
  setup() {
    onMounted(() => {
      var chartDom = document.getElementById("electricone");
      var myChart = echarts.init(chartDom);
      var option;

      function randomData() {
        now = new Date(+now + oneDay);
        value = value + Math.random() * 21 - 10;
        return {
          name: now.toString(),
          value: [
            [now.getFullYear(), now.getMonth() + 1, now.getDate()].join("/"),
            Math.round(value),
          ],
        };
      }
      let data = [];
      let now = new Date(2010, 9, 3);
      let oneDay = 24 * 3600 * 1000;
      let value = Math.random() * 1000;
      for (var i = 0; i < 1000; i++) {
        data.push(randomData());
      }
      option = {
        tooltip: {
          trigger: "axis",
          formatter: function (params) {
            params = params[0];
            var date = new Date(params.name);
            return (
              date.getDate() +
              "/" +
              (date.getMonth() + 1) +
              "/" +
              date.getFullYear() +
              " : " +
              params.value[1]
            );
          },
          axisPointer: {
            animation: false,
          },
        },
        xAxis: {
          type: "time",
          splitLine: {
            show: false,
          },
          axisLabel: {
            color: "#fff",
          },
        },
        yAxis: {
          type: "value",
          boundaryGap: [0, "100%"],
          splitLine: {
            show: false,
          },
          axisLabel: {
            color: "#fff",
          },
        },
        series: [
          {
            name: "Fake Data",
            type: "line",
            showSymbol: false,
            data: data,
          },
        ],
      };
      setInterval(function () {
        for (var i = 0; i < 5; i++) {
          data.shift();
          data.push(randomData());
        }
        myChart.setOption({
          series: [
            {
              data: data,
            },
          ],
        });
      }, 1000);
      option && myChart.setOption(option);
    });
  },
};
</script>

<style>
#electricone {
  height: 300px;
  width: 400px;
  left: 1410px;
  top: 750px;
  position: absolute;
}
</style>
