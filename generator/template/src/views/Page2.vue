<template>
  <div>
    <el-form :model="searchForm" label-width="80px" inline>
      <el-form-item label="option1:" prop="value1">
        <el-input v-model="searchForm.value1" placeholder="value1" clearable />
      </el-form-item>
      <el-form-item label="option2:" prop="value2">
        <el-select v-model="searchForm.value2" placeholder="value2" value-key="id" clearable>
          <el-option v-for="item in options" :key="item.id" :label="item.label" :value="item"></el-option>
        </el-select>
      </el-form-item>
      <el-button type="primary" @click="search">search</el-button>
    </el-form>
    <el-table :data="tableData" v-loading="loading" element-loading-spinner="el-icon-loading">
      <el-table-column align="center" type="index" label="serial" width="60"/>
      <el-table-column align="center" prop="projectName" label="projectName"/>
      <el-table-column align="center" prop="companyName" label="companyName"/>
      <el-table-column align="center" prop="date" label="date" :formatter="dateFormatter"/>
    </el-table>
  </div>
</template>

<script>
import { getData } from '../network/modules/page1'
export default {
  name: "page1",
  data() {
    return {
      searchForm: {
        value1: "",
        value2: {}
      },
      tableData: [],
      options: [],
      loading: false,
    };
  },
  methods: {
    search() {
      this.loading = true,
      getData().then(res => {
        this.tableData = res.data
        this.loading = false
      });
    },
    dateFormatter(row, column, cellValue) {
      return new Date(cellValue).toLocaleString()
    }
  },
  mounted() {
    this.options = [
      {
        id: 1,
        label: "selctor-option-1",
        value1: "1"
      },
      {
        id: 2,
        label: "selctor-option-2",
        value1: "2"
      }
    ];
    this.search()
  }
};
</script>

<style>
</style>
