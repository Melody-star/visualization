<template>
  <div class="box">
    <el-table :data="tableData" style="width: 350px" align="center">
      <el-table-column prop="date" label="位置" width="116" />
      <el-table-column prop="name" label="通过人数" width="116" />
      <el-table-column prop="address" label="体温异常人数" width="116" />
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "同大北区",
          name: "234",
          address: "0",
        },
        {
          date: "同大南区",
          name: "543",
          address: "1",
        },
        {
          date: "三园区",
          name: "345",
          address: "0",
        },
        {
          date: "西二门",
          name: "643",
          address: "2",
        },
        {
          date: "南大门",
          name: "345",
          address: "0",
        },
        {
          date: "154",
          name: "东门",
          address: "1",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.box {
  position: absolute;
  top: 630px;
  left: 100px;
}

/deep/ .el-table,
/deep/ .el-table__expanded-cell {
  background-color: transparent;
}

/deep/ .el-table td,
/deep/ .el-table tr,
/deep/ .el-table th {
  background-color: transparent;
}

/deep/ .el-table {
  /* 表格字体颜色 */
  color: white;
}

/deep/ .el-table th.el-table__cell {
  background-color: transparent;
}

/deep/ .el-table thead {
  color: white;
  font-size: 15px;
}
</style>
