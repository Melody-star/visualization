<template>
  <div id="carone"></div>
</template>

<script>
import { onMounted } from "vue";
import * as echarts from "echarts";
export default {
  setup() {
    onMounted(() => {
      var chartDom = document.getElementById("carone");
      var myChart = echarts.init(chartDom);
      var option;

      let bgColor = "Transparent";
      let title = "总量";
      let color = [
        "#abcdef",
        "#bedcaf",
        "#cafedb",
        "#decafb",
        "#b8dafd",
        "#c5e8ff",
      ];
      let echartData = [
        {
          name: " 同大北区",
          value: "3720",
        },
        {
          name: "同大南区",
          value: "2920",
        },
        {
          name: "三园区",
          value: "2200",
        },
        {
          name: "西区",
          value: "1420",
        },
        {
          name: "三里",
          value: "3200",
        },
        {
          name: "东区",
          value: "2420",
        },
      ];

      let formatNumber = function (num) {
        let reg = /(?=(\B)(\d{3})+$)/g;
        return num.toString().replace(reg, ",");
      };
      let total = echartData.reduce((a, b) => {
        return a + b.value * 1;
      }, 0);

      option = {
        backgroundColor: bgColor,
        color: color,
        tooltip: {
          trigger: "item",
        },
        title: [
          {
            text: "{name|" + title + "}\n{val|" + formatNumber(total) + "}",
            top: "center",
            left: "center",
            textStyle: {
              rich: {
                name: {
                  fontSize: 12,
                  fontWeight: "normal",
                  color: "#fff",
                  padding: [10, 0],
                },
                val: {
                  fontSize: 16,
                  fontWeight: "bolder",
                  color: "#fff",
                },
              },
            },
          },
          {
            text: "单位：个",
            top: 20,
            left: 20,
            textStyle: {
              fontSize: 14,
              color: "#666666",
              fontWeight: 400,
            },
            show: false,
          },
        ],
        series: [
          {
            type: "pie",
            roseType: "radius",
            radius: ["25%", "60%"],
            center: ["50%", "50%"],
            data: echartData,
            hoverAnimation: false,
            itemStyle: {
              normal: {
                borderColor: bgColor,
                borderWidth: 2,
              },
            },
            labelLine: {
              normal: {
                length: 20,
                length2: 20,
                lineStyle: {
                  // color: '#e6e6e6'
                },
              },
            },
            label: {
              normal: {
                formatter: (params) => {
                  return (
                    "{icon|●}{name|" +
                    params.name +
                    "}\n{value|" +
                    formatNumber(params.value) +
                    "}"
                  );
                },
                // padding: [0 , -100, 25, -100],
                rich: {
                  icon: {
                    fontSize: 16,
                    color: "inherit",
                  },
                  name: {
                    fontSize: 18,
                    padding: [0, 0, 0, 10],
                    color: "#fff",
                  },
                  value: {
                    fontSize: 14,
                    fontWeight: "bolder",
                    padding: [10, 0, 0, 20],
                    color: "inherit",
                    // color: '#333333'
                  },
                },
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

<style>
#carone {
  height: 250px;
  width: auto;
  top: 320px;
}
</style>
