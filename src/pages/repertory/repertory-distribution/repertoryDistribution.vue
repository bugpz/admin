<template>
  <div>
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
</style>
