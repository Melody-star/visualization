<template>
  <div class="time">
    <div class="dataYear">{{ dateYear }}</div>
    <div class="dateDay">{{ dateDay }}</div>
    <span></span>
    <iframe
      scrolling="no"
      src="https://tianqiapi.com/api.php?style=ty&skin=sogou&city=孝感&color=fff&fontsize=200"
      frameborder="0"
      width="300"
      height="75"
      allowtransparency="true"
    ></iframe>
  </div>
</template>

<script>
import dayjs from "dayjs";
export default {
  data() {
    return {
      dateDay: null,
      dateYear: null,
      dateWeek: null,
      weekday: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
      timer: null,
    };
  },
  mounted() {
    this.timer = setInterval(() => {
      const date = dayjs(new Date());
      this.dateDay = date.format("HH:mm:ss");
      this.dateYear = date.format("YYYY-MM-DD");
      this.dateWeek = date.format(this.weekday[date.day()]);
    }, 1000);
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  },
};
</script>

<style scoped>
.time {
  position: absolute;
  color: aliceblue;
  font-size: 18px;
  left: -29px;
}

.dataYear {
  position: absolute;
  left: 1520px;
  top: 45px;
  width: 150px;
}

.dateDay {
  position: absolute;
  left: 1536px;
  top: 68px;
}

iframe {
  position: absolute;
  left: 1665px;
  top: 38px;
}

span {
  position: absolute;
  left: 1643px;
  border: solid white;
  border-width: 0px 3px 40px 0px;
  top: 50px;
}
</style>
