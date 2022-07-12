<template>
  <div id="bbb"></div>
</template>

<script>
import { onMounted } from "vue";
import * as echarts from "echarts";
export default {
  setup() {
    onMounted(() => {
      var chartDom = document.getElementById("bbb");
      var myChart = echarts.init(chartDom);
      var option;
      const category = [
        {
          name: "同大",
          value: 1820,
        },
        {
          name: "东区",
          value: 780,
        },
        {
          name: "三里",
          value: 1200,
        },
        {
          name: "西区",
          value: 1186,
        },
        {
          name: "教学楼",
          value: 540,
        },
      ]; // 类别
      const total = 2000; // 数据总数
      const a = ["20%", "40%", "60%", "80%", "100%"];
      var datas = [];
      category.forEach((value) => {
        datas.push(value.value);
      });
      option = {
        backgroundColor: "transparent",
        grid: {
          left: "13%",
          top: "3%",
          right: "14%",
          //   bottom: "5%",
        },
        xAxis: {
          splitLine: {
            show: true,
            lineStyle: {
              color: "rgba(255,255,255,0.3)",
              type: "dashed",
            },
          },
          axisLine: {
            show: false,
          },
          axisLabel: {
            show: true,
            color: "rgba(255,255,255,0.9)",
          },
          axisTick: {
            show: false,
          },
        },
        yAxis: [
          {
            type: "category",
            inverse: false,
            data: category,
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              show: false,
            },
          },
        ],
        series: [
          {
            // 内
            type: "bar",
            barWidth: 14,
            legendHoverLink: false,
            silent: true,
            itemStyle: {
              normal: {
                color: function (params) {
                  var color;
                  if (params.dataIndex == 3) {
                    color = {
                      type: "linear",
                      x: 0,
                      y: 0,
                      x2: 1,
                      y2: 0,
                      colorStops: [
                        {
                          offset: 0,
                          color: "#2961D8", // 0% 处的颜色
                        },
                        {
                          offset: 1,
                          color: "#7BB2FF", // 100% 处的颜色
                        },
                      ],
                    };
                  } else if (params.dataIndex == 2) {
                    color = {
                      type: "linear",
                      x: 0,
                      y: 0,
                      x2: 1,
                      y2: 0,
                      colorStops: [
                        {
                          offset: 0,
                          color: "#2961D8", // 0% 处的颜色
                        },
                        {
                          offset: 1,
                          color: "#7BB2FF", // 100% 处的颜色
                        },
                      ],
                    };
                  } else if (params.dataIndex == 4) {
                    color = {
                      type: "linear",
                      x: 0,
                      y: 0,
                      x2: 1,
                      y2: 0,
                      colorStops: [
                        {
                          offset: 0,
                          color: "#cafedb", // 0% 处的颜色
                        },
                        {
                          offset: 1,
                          color: "#7BB2FF", // 100% 处的颜色
                        },
                      ],
                    };
                  } else if (params.dataIndex == 1) {
                    color = {
                      type: "linear",
                      x: 0,
                      y: 0,
                      x2: 1,
                      y2: 0,
                      colorStops: [
                        {
                          offset: 0,
                          color: "#2961D8", // 0% 处的颜色
                        },
                        {
                          offset: 1,
                          color: "#7BB2FF", // 100% 处的颜色
                        },
                      ],
                    };
                  } else {
                    color = {
                      type: "linear",
                      x: 0,
                      y: 0,
                      x2: 1,
                      y2: 0,
                      colorStops: [
                        {
                          offset: 0,
                          color: "#3CB254", // 0% 处的颜色
                        },
                        {
                          offset: 1,
                          color: "#A7EFAE", // 100% 处的颜色
                        },
                      ],
                    };
                  }
                  return color;
                },
              },
            },
            label: {
              normal: {
                show: true,
                position: "left",
                formatter: "{b}",
                textStyle: {
                  color: "#fff",
                  fontSize: 14,
                },
              },
            },
            data: category,
            z: 2,
            animationEasing: "elasticOut",
          },
          {
            // 分隔
            type: "pictorialBar",
            // itemStyle: {
            //   normal: {
            //     color: "#fff",
            //   },
            // },
            // symbolRepeat: "fixed",
            // symbolMargin: 6,
            // symbol: "rect",
            // symbolClip: true,
            symbolSize: [1, 21],
            // symbolPosition: "start",
            symbolOffset: [1, -1],
            //symbolBoundingData: this.total,
            // data: category,
            // z: 2,
            animationEasing: "elasticOut",
          },
          {
            // 外边框
            type: "pictorialBar",
            symbol: "rect",
            symbolBoundingData: total,
            itemStyle: {
              normal: {
                color: "none",
              },
            },
            label: {
              normal: {
                formatter: (params) => {
                  var text;
                  if (params.dataIndex == 1) {
                    text =
                      "{a| " +
                      params.data +
                      "}{f|  |  " +
                      (params.data / total) * 100 +
                      "%}";
                  } else if (params.dataIndex == 2) {
                    text =
                      "{b| " +
                      params.data +
                      "}{f|  |  " +
                      (params.data / total) * 100 +
                      "%}";
                  } else if (params.dataIndex == 3) {
                    text =
                      "{c| " +
                      params.data +
                      "}{f|  |  " +
                      (params.data / total) * 100 +
                      "%}";
                  } else {
                    text =
                      "{d| " +
                      params.data +
                      "}{f|  |  " +
                      (params.data / total) * 100 +
                      "%}";
                  }
                  return text;
                },
                rich: {
                  a: {
                    color: "#D5E9FF",
                  },
                  b: {
                    color: "#D5E9FF",
                  },
                  c: {
                    color: "#D5E9FF",
                  },
                  d: {
                    color: "#D5E9FF",
                  },
                  f: {
                    color: "##D5E9FF",
                  },
                },
                position: "right",
                distance: 1,
                show: true,
              },
            },
            data: datas,
            z: 0,
            animationEasing: "elasticOut",
          },
          {
            name: "外框",
            type: "bar",
            barGap: "-120%",
            data: [
              total,
              total,
              total,
              total,
              total,
              total,
              total,
              total,
              total,
              total,
              total,
              total,
              total,
              total,
              total,
              total,
              total,
              total,
              total,
            ],
            barWidth: 20,
            itemStyle: {
              normal: {
                color: "transparent",
                barBorderColor: "transparent",
                barBorderWidth: 1,
                // barBorderRadius: 0, //圆角半径
                label: {
                  // 标签显示位置
                  show: false,
                  position: "top", // insideTop 或者横向的 insideLeft
                },
              },
            },
            z: 0,
          },
        ],
      };
      option && myChart.setOption(option);
    });
  },
};
</script>

<style scoped>
#bbb {
  height: 350px;
  width: auto;
  position: relative;
  top: 30px;
}
</style>
