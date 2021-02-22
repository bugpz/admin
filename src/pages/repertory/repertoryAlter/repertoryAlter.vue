<!--
 * @Description:
 * @Author: bug_pz
 * @Date: 2021-01-24 17:18
 * @LastEditTime: 2021-01-24 17:18
 * @LastEditors: bug_pz
-->
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
              label="商品基础编码"
              :rules="[
                {required: true, message: '请输入商品编码', trigger: 'blur'}
                ]"
            >
              <el-input
                placeholder="商品基础编码"
                v-model="inputCode"
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
          <el-button class="right_btn" type="primary" @click="handleSelect">查询</el-button>
        </el-row>
      </el-form>
    </div>
    <div>
      <el-row>
        <el-col
          :span="4"
          style="height: 5vh; text-align: center"
        >
          <span
            :v-model="skuList.skuNo"
            @click="handleSelectSku"
          >
            <el-button>{{ skuList.specificationValue.name }}</el-button>
          </span>
        </el-col>
        <el-col
          :span="20"
        >
          <el-table
            :data="tableLists"
          >
            <el-table-column
              label="商品编码"
              prop="commodityNo"
            ></el-table-column>
            <el-table-column
              label="库存类型"
              prop="commodityStockTypeDesc"
            ></el-table-column>
            <el-table-column
              label="变动类型"
              prop="stockChangeTypeDesc"
            ></el-table-column>
            <el-table-column
              label="库存变动"
              prop="stockChange"
            ></el-table-column>
            <el-table-column
              label="变动后库存"
              prop="stock"
            ></el-table-column>
            <el-table-column
              label="变动时间"
              prop="changeTime"
            ></el-table-column>
            <el-table-column
              label="标识"
              prop="changeSigns"
            ></el-table-column>
            <el-table-column
              label="变动说明"
              prop="stockChangeDescribeDesc"
            ></el-table-column>
            <el-table-column
              label="变动来源"
              prop="stockChangeSourceDesc"
            ></el-table-column>
          </el-table>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import {LoginStatusVerification} from '../../../utils/selectLoginStatus'
export default {
  name: 'repertoryAlter',
  data () {
    return {
      inputCode: '',
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
      ],
      skuList: {'specificationValue': 'sku'},
      tableLists: []
    }
  },
  methods: {
    handleSelect () {
      this.skuList = {'specificationValue': 'sku'} // 每次搜索时初始化,不然新请求没值时会显示上一次返回的值
      const url = '/api/web/commodity/stock/querySkuInfoByCommodity'
      const tableUrl = '/api/web/commodity/stock/stockChangeLogList'
      axios
        .post(url,
          {
            'commodityNo': this.inputCode
          }, {
            headers: {
              authorization: localStorage.getItem('token')
            }})
        .then(res => {
          if (res.data.code === 200) {
            const resultSku = res.data.result
            for (let i in resultSku) {
              console.log(resultSku[i].specificationValue)
              const specificationValue = JSON.parse(resultSku[i].specificationValue.substring(1, resultSku[i].specificationValue.length - 1)) // JSON.parse(resultSku[i].specificationValue.substring(1, resultSku[i].specificationValue.length - 1))
              // this.skuList = JSON.parse(resultSku[i].specificationValue.substring(1, resultSku[i].specificationValue.length - 1))
              this.skuList = {'skuNo': resultSku[i].skuNo, 'specificationValue': specificationValue}
              console.log(specificationValue)
              console.log(this.skuList)
            }
            axios
              .post(tableUrl, {
                'pageNo': 1,
                'pageSize': 20,
                'orderby': 'createTime',
                'sort': 'desc',
                'searchs': '[{"tempMatchType":"4","propertyName":"commodityNo","propertyValue1":' + '"' + this.inputCode + '"' + ',"tempType":"String"},' +
                  '{"tempMatchType":"4","propertyName":"skuNo","propertyValue1":' + this.skuList.skuNo + ',"tempType":"Integer"}]'}, {
                headers: {
                  authorization: localStorage.getItem('token')
                }
              })
              .then(res => {
                this.tableLists = res.data.result.itemVOs
              })
          } else if (res.data.code === 401) {
            LoginStatusVerification()
          }
        })
    },
    handleSelectSku () { // 点击sku时的搜索
      const tableUrl = '/api/web/commodity/stock/stockChangeLogList'
      axios
        .post(tableUrl, {
          'pageNo': 1,
          'pageSize': 20,
          'orderby': 'createTime',
          'sort': 'desc',
          'searchs': '[{"tempMatchType":"4","propertyName":"commodityNo","propertyValue1":' + '"' + this.inputCode + '"' + ',"tempType":"String"},' +
            '{"tempMatchType":"4","propertyName":"skuNo","propertyValue1":' + this.skuList.skuNo + ',"tempType":"Integer"}]'}, {
          headers: {
            authorization: localStorage.getItem('token')
          }
        })
        .then(res => {
          this.tableLists = res.data.result.itemVOs
        })
    }
  }
}
</script>

<style scoped>

</style>
