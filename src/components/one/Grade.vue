<template>
  <div id="myChart" ref="myChart"></div>
</template>

<script>
import * as echarts from "echarts";

export default {
  props: {
    dataapi: Object,
   
  },

  watch: {
    dataapi: {
      handler(newValue, oldValue) {
        this.initLine(); // 数据更新触发
      },
      deep: true, // 深度监听
    },
  },

  data() {
    return {};
  },

  methods: {
    initLine() {
      let option = {
        color: ["#abcdef", "#bedcaf", "#cafedb", "#decafb"],
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "vertical",
          left: "left",
          show: false,
        },
        series: [
          {
            name: "学生人数",
            type: "pie",
            radius: ["40%", "55%"],
            data: [
              { value: this.dataapi.Freshman, name: "大一年级" },
              { value: this.dataapi.Sophomore, name: "大二年级" },
              { value: this.dataapi.Junior, name: "大三年级" },
              { value: this.dataapi.Senior, name: "大四年级" },
            ],
            itemStyle: {
              borderRadius: 10,
              borderColor: "#fff",
              borderWidth: 0,
            },
            itemStyle: {
              borderRadius: 10,
              borderColor: "#fff",
              borderWidth: 0,
            },
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
            label: {
              fontSize: 15,
              color: "#fff",
              fontStyle: "normal",
            },
          },
        ],
      };
      let myChart = echarts.init(document.getElementById("myChart"), null, {
        renderer: "svg",
      });
      myChart.setOption(option);
    },
  },
  mounted() {
    this.initLine();
  },
};
</script>

<style scoped>
#myChart {
  position: absolute;
  top: 248px;
  left: 0px;
  height: 250px;
  width: 500px;
}
</style>
