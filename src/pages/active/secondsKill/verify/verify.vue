<template>
  <div>
    <div class="form">
      <el-form
        inline="inline"
      >
        <el-row>
          <el-col
            :span="10"
            :offset="2"
          >
            <el-form-item
              label="发起人"
            >
              <el-input
                v-model="inputPeople"
              >
              </el-input>
            </el-form-item>
          </el-col>
          <el-col
            :span="10"
            :offset="2"
          >
            <el-form-item
              label="审核状态"
            >
              <el-select
                v-model="inputState"
              >
                <el-option
                  v-for="(option, index) in optionState"
                  :key="index"
                  :value="option.value"
                  :label="option.label"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div class="leftSpace">
      <el-table>
        <el-table-column
          v-for="(data, index) in dataList"
          :key="index"
          :label="data.label"
        ></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'verify',
  data () {
    return {
      inputPeople: '',
      inputState: '',
      optionState: [
        {value: '1', label: '全部'},
        {value: '2', label: '待审核'},
        {value: '3', label: '通过'},
        {value: '4', label: '驳回'}
      ],
      dataList: [
        {label: '审核编号'},
        {label: '投放业务'},
        {label: '秒杀日期'},
        {label: '秒杀商品数'},
        {label: '优惠金额'},
        {label: '查看详情'},
        {label: '发起人'},
        {label: '发起时间'},
        {label: '审核人'},
        {label: '审核状态'},
        {label: '处理时间'},
        {label: '操作'}
      ]
    }
  }
}
</script>

<style scoped>

</style>
