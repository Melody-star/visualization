<template>
  <div class="animate__animated animate__fadeInRight">
    <div class="information">
      <div class="icon">
        <img
          src="../../assets/组1.png"
          alt=""
          style="height: 24px; width: auto"
        />
      </div>
      <div class="text">
        <b>信息通知 </b>
        <span style="font-size: 15px"><b>Information notification</b></span>
      </div>

      <el-scrollbar height="220px" style="margin-top: 35px" always="true">
        <p class="scrollbar-demo-item">
          <span
            style="
              position: relative;
              left: 10px;
              font-size: 15px;
              color: rgba(255, 255, 255, 0.8);
            "
            >{{dataapi1}}</span
          >
          <span
            style="position: relative; left: -128px; top: 20px; font-size: 18px"
            >{{dataapi}}</span
          >
          <span
            style="
              position: relative;
              font-size: 23px;
              right: 0px;
              top: 9px;
              color: rgba(255, 255, 255, 0.9);
            "
            >{{dataapi2}}</span
          >
        </p>
        <p class="scrollbar-demo-item">
          <span
            style="
              position: relative;
              left: 10px;
              font-size: 15px;
              color: rgba(255, 255, 255, 0.8);
            "
            >2022-3-25 10:45:25</span
          >
          <span
            style="position: relative; left: -128px; top: 20px; font-size: 18px"
            >{{dataapi3}}</span
          >
          <span
            style="
              position: relative;
              font-size: 23px;
              right: -45px;
              top: 9px;
              color: rgba(255, 255, 255, 0.9);
            "
            >{{dataapi4}}</span
          >
        </p>
        <p class="scrollbar-demo-item">
          <span
            style="
              position: relative;
              left: 10px;
              font-size: 15px;
              color: rgba(255, 255, 255, 0.8);
            "
            >{{dataapi5}}</span
          >
          <span
            style="position: relative; left: -128px; top: 20px; font-size: 18px"
            >{{dataapi6}}</span
          >
          <span
            style="
              position: relative;
              font-size: 23px;
              right: -56px;
              top: 9px;
              color: rgba(255, 255, 255, 0.9);
            "
            >{{dataapi7}}</span
          >
        </p>
        <p class="scrollbar-demo-item">
          <span
            style="
              position: relative;
              left: 10px;
              font-size: 15px;
              color: rgba(255, 255, 255, 0.8);
            "
            >2022-3-31 20:22:42</span
          >
          <span
            style="position: relative; left: -128px; top: 20px; font-size: 18px"
            >{{dataapi}}</span
          >
          <span
            style="
              position: relative;
              font-size: 23px;
              right: -23px;
              top: 9px;
              color: rgba(255, 255, 255, 0.9);
            "
            >西二门</span
          >
        </p>
        <p class="scrollbar-demo-item">
          <span
            style="
              position: relative;
              left: 10px;
              font-size: 15px;
              color: rgba(255, 255, 255, 0.8);
            "
            >2022-3-31 20:22:42</span
          >
          <span
            style="position: relative; left: -128px; top: 20px; font-size: 18px"
            >{{dataapi}}</span
          >
          <span
            style="
              position: relative;
              font-size: 23px;
              right: -23px;
              top: 9px;
              color: rgba(255, 255, 255, 0.9);
            "
            >南大门</span
          >
        </p>
      </el-scrollbar>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [{ message: "Foo" }, { message: "Bar" }],
      dataapi: {},
      dataapi1:{},
      dataapi2:{},
      dataapi3:{},
      dataapi4:{},
      dataapi5:{},
      dataapi6:{},
      dataapi7:{},
    };
  },
  created() {
    this.getapi();
  },
  methods: {
    getapi() {
      var that = this;
      this.axios.get("http://127.0.0.1:8000/api/news").then(
        function (response) {
          that.dataapi = response.data.list[0].fields.title;
          that.dataapi1 = response.data.list[0].fields.time;
          that.dataapi2 = response.data.list[0].fields.place;

          that.dataapi3 = response.data.list[1].fields.title;
          that.dataapi4 = response.data.list[1].fields.place;
          that.dataapi5 = response.data.list[1].fields.time;

          that.dataapi6 = response.data.list[2].fields.title;
          that.dataapi7 = response.data.list[2].fields.place;
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
};
</script>

<style scoped>
.information {
  position: absolute;
  left: 1400px;
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

.scrollbar-demo-item {
  display: flex;
  /* align-items: center; */
  /* justify-content: center; */
  height: 50px;
  margin: 10px;
  /* text-align: center; */
  border-radius: 4px;
  background: rgba(211, 211, 211, 0.3);
  color: white;

  /* position: relative; */
  /* top: 25px; */
}

.iot {
  position: absolute;
  border: 1px solid red;
  width: 360px;
  height: 200px;
  left: 1428px;
  top: 800px;
}
</style>
