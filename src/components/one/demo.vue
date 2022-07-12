<template>
  <div class="box">
    <dt-srcoll showBorder :tableData="dutyRateData">
      <el-table-column prop="num" label="楼栋" width="133px" align="center" />
      <el-table-column
        prop="date"
        label="总教室数"
        width="133px"
        align="center"
      />
      <el-table-column
        prop="name"
        label="使用中"
        width="133px"
        align="center"
      />
    </dt-srcoll>
  </div>
</template>

<script>
import dtSrcoll from "./dtSrcoll.vue";
export default {
  props: {
    dataapi: Object,
  },

  data() {
    return {
      dutyRateData: [
        {
          num: "科技楼",
          date: "80",
          name: "66",
        },
        {
          num: "生科楼",
          date: "90",
          name: "56",
        },
        {
          num: "化材楼",
          date: "85",
          name: "43",
        },
        {
          num: "三园区",
          date: "256",
          name: "198",
        },
        {
          num: "同大综合楼",
          date: "75",
          name: "65",
        },
        {
          num: "教一",
          date: "80",
          name: "64",
        },
        {
          num: "天工楼",
          date: "85",
          name: "79",
        },
        {
          num: "天成楼",
          date: "95",
          name: "90",
        },
        {
          num: "计科楼",
          date: "110",
          name: "96",
        },
        {
          num: "美术楼",
          date: "245",
          name: "126",
        },
      ],
    };
  },

  computed:{
    jisuan:{
      get(){
        console.log("111");
        return this.dataapi.list[0].fields.name;
      }
    }
  },

  components: { dtSrcoll },
};
</script>

<style scoped>
.box {
  height: 200px;
  width: 399px;
  margin: 0 1%;
  position: absolute;
  top: 550px;
  left: 70px;
}
</style>
