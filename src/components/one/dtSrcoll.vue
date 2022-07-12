<template>
  <div
    @mouseover="stopSrcoll"
    @mouseout="startSrcoll"
    @mousewheel="handleWheel"
  >
    <el-table
      :data="tableData"
      :border="showBorder"
      style="width: 100%"
      ref="everTable"
      :header-cell-style="headerStyle"
      :cell-style="cellStyle"
    >
      <slot></slot>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "DtSrcoll",
  props: {
    // 表格主体
    tableData: {
      type: Array,
      default: () => [],
    },
    lineHeight: {
      // 页面需要显示的行数
      type: Number,
      default: 8,
    },
    rowTime: {
      // 每一行滚动切换等待的时间（毫秒）
      type: Number,
      default: 1500,
    },
    duration: {
      // 过渡时间
      type: Number,
      default: 500,
    },
    tableHeight: {
      // 行高
      type: Number,
      default: 50,
    },
    isClear: {
      // 数据滚动到最后一行是否停止滚动
      type: Boolean,
      default: false,
    },
    isAgain: {
      // 数据滚动到最后一行是否重新开始滚动
      type: Boolean,
      default: true,
    },
    isScroll: {
      // 是否允许内容滚动
      type: Boolean,
      default: true,
    },
    headerStyle: {
      // 表头样式
      type: [Object, Function],
    },
    cellStyle: {
      // 单元格样式
      type: [Object, Function],
    },
  },
  data() {
    return {
      // 标识
      active: 0,
      // 定时器
      timer: "",
      // 容器
      elwrapper: undefined,
    };
  },
  mounted() {
    this.startSrcoll();
  },
  methods: {
    // 开始滚动
    startSrcoll() {
      let _this = this;
      // console.log(this.$refs.everTable.$el);
      let everTable = this.$refs.everTable.$el;
      this.$nextTick(() => {
        let elwrapper = everTable.getElementsByClassName(
          "el-table__body-wrapper"
        )[0];

        this.elwrapper = elwrapper;

        let elBody = everTable.getElementsByClassName("el-table__body")[0];
        _this.elBody = elBody;

        elBody.style.position = "absolute";
        elBody.style.transition = "all 500ms linear";

        setTimeout(() => {
          let elRow = everTable.getElementsByClassName("el-table__row");
          for (let node of elRow) {
            node.style.height = _this.tableHeight + "px";
          }
          elwrapper.style.height = _this.lineHeight * _this.tableHeight + "px";
        }, 1000);

        elBody.style.top = 0;

        elBody.style.transactionDuration = this.duration + "ms";

        if (_this.isScroll) {
          _this.timer = setInterval(function () {
            if (
              _this.active <
              parseInt(_this.tableData.length) - parseInt(_this.lineHeight)
            ) {
              _this.active += 1;
              elBody.style.top =
                parseInt(elBody.style.top) - parseInt(_this.tableHeight) + "px";
            } else {
              if (this.isClear) {
                clearInterval(this.timer);
              }
              if (_this.isAgain) {
                _this.active = 0;
                elBody.style.top = 0;
              } else {
                clearInterval(_this.timer);
              }
            }
          }, _this.rowTime);
        }
      });
    },
    // 停止滚动
    stopSrcoll() {
      clearInterval(this.timer);
    },
    // 处理滑轮事件
    handleWheel(e) {
      //  console.log('容器：',this.elwrapper);
      // 负加正减
      if (e.wheelDeltaY < 0) {
        this.elwrapper.scrollTop += 10;
      } else {
        this.elwrapper.scrollTop -= 10;
      }

      // console.log(this.elwrapper.scrollTop);
    },
  },
  destroyed() {
    clearInterval(this.timer);
  },
};
</script>

<style lang="less" scoped>
/*最外层透明*//*最外层透明*/
/deep/ .el-table, /deep/ .el-table__expanded-cell{
  background-color: transparent;
}
/* 表格内背景颜色 */
/deep/ .el-table td,
/deep/ .el-table tr,
/deep/ .el-table th {
  background-color: transparent;
}

/deep/ .el-table{
/* 表格字体颜色 */
color:white;
}

/deep/ .el-table th.el-table__cell{
  background-color: transparent;
}


/deep/ .el-table thead {
color: white;
font-size: 15px;
}
</style>
