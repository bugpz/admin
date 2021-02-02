<template>
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
              label="基础商品编码"
              :rules="[
          {required: true, message: '请输入邮箱地址', trigger: 'blur'}
        ]"
            >
              <el-input
                placeholder="基础商品编码"
                v-model="input"
                size="medium"
                style="width: 100%"
                maxlength=10
              >
              </el-input>
            </el-form-item>
          </el-col>
          <el-col
            :span=16
          >
            <el-form-item class="right_btn">
              <el-button type="primary" size="small">查询</el-button>
              <el-button type="success" size="small" native-type="reset">清空</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div class="form">
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          prop="date"
          label="规格"
          >
        </el-table-column>
        <el-table-column
          prop="name"
          label="销售库存数"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="虚拟库存数"
          >
        </el-table-column>
        <el-table-column
        prop="can"
        label="可用库存数"
        >
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      input: ''
    }
  }
}
</script>

<style scoped>
.right_btn{
  float: right;
}
.form{
  width: 98%;
  height: 10vh;
  box-shadow: 0 2px 4px rgb(0, 0, 0), 0 0 6px rgba(0, 0, 0, .04);
  margin: 1%;
}
</style>
