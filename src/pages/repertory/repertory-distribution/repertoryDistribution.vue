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
            >
              <el-input
                v-model="inputCode"
                size="medium"
                maxlength=12
                :placeholder="inputMsg"
              >
              </el-input>
            </el-form-item>
          </el-col>
          <el-col
            :span=16
          >
            <el-form-item class="right_btn">
              <el-button type="primary" size="small" @click="handleSelect">查询</el-button>
              <el-button type="success" size="small" native-type="reset">清空</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div>
      <el-table
        :data="tableLists"
      >
        <el-table-column
          label="规格"
        >
          <template
            slot-scope="scope"
          >{{JSON.parse(scope.row.skuInfo.substring(1, scope.row.skuInfo.length - 1)).name}}</template>
        </el-table-column>
        <el-table-column
          prop="saleStock"
          label="销售库存数"
        >
        </el-table-column>
        <el-table-column
          prop="virtualStock"
          label="虚拟库存数"
          >
        </el-table-column>
        <el-table-column
        prop="availableStock"
        label="可用库存数"
        >
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'index',
  data () {
    return {
      inputCode: '',
      inputMsg: '请输入12位数字的基础商品编码',
      tableLists: []
    }
  },
  methods: {
    handleSelect () {
      const url = '/api/web/commodity/stock/stockList'
      if (this.inputCode.length === 12) {
        axios
          .post(url, {
            'orderby': 'commodityStockType',
            'sort': 'desc',
            'searchs': '[{"tempMatchType":"4","propertyName":"commodityNo","propertyValue1":' + '"' + this.inputCode + '"' + ',"tempType":"String"}]'}, {
            headers: {
              authorization: localStorage.getItem('token')
            }})
          .then(res => {
            this.tableLists = res.data.result
          })
      } else {
        this.inputCode = ''
      }
    }
  }
}
</script>

<style scoped>

</style>
