<!--
 * @Description:
 * @Author: bug_pz
 * @Date: 2021-01-24 17:18
 * @LastEditTime: 2021-01-24 17:18
 * @LastEditors: bug_pz
-->
<template xmlns:el-col="http://www.w3.org/1999/html">
  <div>
    <div class="form">
      <el-form
      :inline=true
      >
        <el-row>
          <el-col
          :span=8
          >
            <el-form-item
              label="商品基础编码"
              :rules="[
                {required: true, message: '请输入商品编码', trigger: 'blur'}
                ]"
            >
              <el-input
                placeholder="商品基础编码"
                v-model="input"
                manlength=10
                size="medium"
              >
              </el-input>
            </el-form-item>
          </el-col>
          <el-col
            :span=8
          >
            <el-form-item
              label="变动类型"
            >
              <el-select v-model=value
                placeholder="请选择"
              >
                <el-option
                  v-for="(lab, index) in options" :key="index"
                  :value="lab.value"
                  :label="lab.label"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col
            :span=8
          >
            <el-form-item
              label="变动来源"
            >
              <el-select
                v-model=valueT
                placeholder="请选择"
              >
                <el-option
                  v-for="(idea, index) in optionsFrom"
                  :key="index"
                  :value="idea.value"
                  :label="idea.label"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-button class="right_btn" type="success">清空</el-button>
          <el-button class="right_btn" type="primary">查询</el-button>
        </el-row>
      </el-form>
    </div>
    <div class="form">
      <el-table
        style="width: 100%"
      >
        <el-table-column label="商品编码"></el-table-column>
        <el-table-column label="库存类型"></el-table-column>
        <el-table-column label="变动类型"></el-table-column>
        <el-table-column label="库存变动"></el-table-column>
        <el-table-column label="变动后库存"></el-table-column>
        <el-table-column label="变动时间"></el-table-column>
        <el-table-column label="标识"></el-table-column>
        <el-table-column label="变动说明"></el-table-column>
        <el-table-column label="变动来源"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'repertoryAlter',
  data () {
    return {
      input: '',
      value: '',
      valueT: '',
      options: [
        {value: '选项一', label: '全部'},
        {value: '选项二', label: '增加'},
        {value: '选项三', label: '扣减'}
      ],
      optionsFrom: [
        {value: '选项一', label: '全部'},
        {value: '选项二', label: '订单'},
        {value: '选项三', label: '商品'},
        {value: '选项四', label: 'OMS'}
      ]
    }
  }
}
</script>

<style scoped>

</style>
