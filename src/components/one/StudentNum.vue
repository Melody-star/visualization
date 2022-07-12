<template>
  <div class="animate__animated animate__fadeInLeft">
    <div class="box">
      <div class="icon">
        <img src="../../assets/组1.png" style="height: 24px; width: auto" />
      </div>
      <div class="text">
        <b>学校总人数 </b>
        <span style="font-size: 15px"><b>Total school population</b></span>
      </div>
      <div class="student">
        <img src="../../assets/学生.png" />
        <span style="margin-left: 6px">{{ dataapi.StudentNum }}</span>
        <hr />
        <b>学生人数</b>
      </div>
      <div class="student" style="left: 120px">
        <img src="../../assets/w_老师.png" />
        <span style="margin-left: 11px">{{ dataapi.TeacherNum }}</span>
        <hr />
        <b class=".student b">教师人数</b>
      </div>
      <div class="student" style="left: 233px; top: 47px">
        <img
          src="../../assets/人物-人.png"
          alt=""
          style="height: 33px; width: auto"
        />
        <span style="top: 3px; margin-left: 16px">{{ dataapi.WorkerNum }}</span>
        <hr style="top: 36px" />
        <b class=".student b">职工人数</b>
      </div>
    </div>
    <grade-vue :dataapi="dataapi"></grade-vue>
  </div>
</template>

<script>
import GradeVue from "./Grade.vue";

export default {
  data() {
    return {
      dataapi: {},
    };
  },
  created() {
    this.getapi();
  },
  methods: {
    getapi() {
      var that = this;
      this.axios.get("http://127.0.0.1:8000/api/student").then(
        function (response) {
          that.dataapi = response.data.list[0].fields;
        },
        function (error) {
          console.log(error);
        }
      );
    },
    timer() {
      return setTimeout(() => {
        this.getapi();
      }, 5000);
    },
  },
  watch: {
    dataapi() {
      this.timer();
    },
  },
  destroyed() {
    clearTimeout(this.timer);
  },
  components: {
    GradeVue,
  },
};
</script>

<style scoped>
.box {
  /* 学生人数 */
  position: absolute;
  left: 84px;
  top: 153px;
  width: 413px;
  height: 298px;
  /* border: 1px solid red; */
}

.text {
  /* 学生人数 */
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

span {
  font-size: 18px;
}

.icon {
  /* 组 1 */
  position: absolute;
  left: 1px;
  top: 3.5px;
  width: 38.5px;
  height: 33px;
}

.student {
  height: 100px;
  width: 130px;
  position: absolute;
  top: 43px;
}

.student span {
  font-size: 18px;
  font-family: "aaa font", -apple-system, BlinkMacSystemFont;
  color: #d77;
  position: absolute;
  top: 9px;
  transform: scale(1, 2);
}

hr {
  border: 0;
  border-bottom: 1px dashed #ccc;
  background: #d77;
  width: 101px;
  position: absolute;
  top: 39px;
}

.student img {
  height: 38px;
  width: auto;
  position: relative;
  left: 5px;
}

.student b {
  font-family: "box font", -apple-system, BlinkMacSystemFont;
  color: #ffffff;
  font-size: 19px;
  display: block;
  margin-top: 11px;
  margin-left: 11px;
}

b {
  text-shadow: 3px 3px 15px rgba(92, 211, 254, 1);
}

@font-face {
  font-family: "box font";
  src: url(../../assets/站酷仓耳渔阳体-W01.ttf);
}

@font-face {
  font-family: "aaa font";
  src: url(../../assets/YouSheBiaoTiHei-2.ttf);
}
</style>
