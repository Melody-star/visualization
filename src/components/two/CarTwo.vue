<template>
  <div id="biaa"></div>
</template>

<script>
import { onMounted } from "vue";
import * as echarts from "echarts";
export default {
  setup() {
    onMounted(() => {
      var chartDom = document.getElementById("biaa");
      var myChart = echarts.init(chartDom);
      var option;

      var datas = [
        {
          value: 60,
          name: "进入",
        },
        {
          value: 50,
          name: "离开",
        },
      ];
      var colorList = ["#bedcaf", "#abcdef "];
      var maxArr = new Array(datas.length).fill(100);
      option = {
        backgroundColor: "transparent",
        grid: {
          left: 40,
          right: 40,
          bottom: 1000,
          top: 100,
          containLabel: true,
        },
        tooltip: {
          trigger: "item",
          axisPointer: {
            type: "none",
          },
          formatter: function (params) {
            return params[0].name + " : " + params[0].value;
          },
        },
        xAxis: {
          show: false,
          type: "value",
        },
        yAxis: [
          {
            color: "#fff",
            type: "category",
            inverse: true,
            axisLabel: {
              show: true,
              align: "right",
              textStyle: {
                color: "#fff",
              },
            },
            splitLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            data: datas.map((item) => item.name),
          },
          {
            type: "category",
            inverse: true,
            axisTick: "none",
            axisLine: "none",
            show: true,
            axisLabel: {
              textStyle: {
                color: "#fff",
                fontSize: "12",
              },
              formatter: "{value}%",
            },
            data: datas.map((item) => item.value),
          },
        ],
        series: [
          {
            name: "值",
            type: "bar",
            zlevel: 1,
            itemStyle: {
              normal: {
                barBorderRadius: 6,
                color: (params) => {
                  return colorList[params.dataIndex];
                },
              },
            },
            barWidth: 20,
            data: datas,
          },
          {
            name: "背景",
            type: "bar",
            barWidth: 20,
            barGap: "-100%",
            data: maxArr,
            itemStyle: {
              normal: {
                color: "#ededed",
                barBorderRadius: 6,
              },
            },
          },
        ],
      };
      option && myChart.setOption(option);
    });
  },
};
</script>

<style scoped>
#biaa {
  height: 1000px;
  width: 400px;
  position: absolute;
  left: 0px;
  top: 160px;
}
</style>
