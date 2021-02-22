<template>
  <div>
    <div>
      <div
      class="form"
    >
      <el-form
        inline="inline"
      >
        <el-row>
          <el-col
            :offset="1"
            :span="7"
          >
            <el-form-item
              label="所属分类"
            >
              <el-select
                v-model="Classification"
              >
              </el-select>
            </el-form-item>
          </el-col>
          <el-col
            :span="8"
          >
            <el-form-item
              label="基础商品编码"
            >
              <el-input
                v-model="goodsCode"
                placeholder="请输入商品编码"
                maxlength="12"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col
            :span="8"
          >
            <el-form-item
              label="商品名称"
            >
              <el-input
                v-model="goodsName"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col
            :offset="1"
            :span="7"
          >
            <el-form-item
              label="商品状态"
            >
              <el-select
                v-model="goodsStatue"
              >
                <el-option
                  v-for="(statue, index) in goodsStatusOptions"
                  :key="index"
                  :label="statue.label"
                  :value="statue.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
    </div>
    <div>
      <el-table
        :data="tableLists"
      >
        <el-table-column
          label="商品编码"
          prop="commodityNo"
        ></el-table-column>
        <el-table-column
          label="商品图片"
        >
          <template
            slot-scope="scope"
          >
            <el-image
              style="width: 40px; height: 40px"
              :src="scope.row.thumbnailImage"
            ></el-image>
          </template>
        </el-table-column>
        <el-table-column
          label="商品名称"
          prop="commodityName"
        ></el-table-column>
        <el-table-column
          label="供应商"
        >
          <template
            slot-scope="scope"
          >
            {{scope.row.supplierCount === 0 ? '暂无供应商' : '有' + scope.row.supplierCount + '个供应商'}}
          </template>
        </el-table-column>
        <el-table-column
          label="税后供货价"
          prop="costPrice"
        ></el-table-column>
        <el-table-column
          label="市场价"
          prop="marketPrice"
        ></el-table-column>
        <el-table-column
          label="可用库存"
          prop="stock"
        ></el-table-column>
        <el-table-column
          label="状态"
        >
          <template
            slot-scope="scope"
          >
            {{scope.row.enable ? '启用' : '停用'}}
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import {LoginStatusVerification} from '../../../../utils/selectLoginStatus'

export default {
  name: 'Index',
  data () {
    return {
      Classification: '',
      goodsCode: '',
      goodsName: '',
      goodsStatue: '',
      goodsStatusOptions: [
        {label: '全部', value: 'all'},
        {label: '启用', value: 'started'},
        {label: '停用', value: 'stop'}
      ],
      tableLists: []
    }
  },
  created () {
    this.ajaxFun()
  },
  methods: {
    ajaxFun () {
      const url = '/api/web/commodity/baseCommodity/query'
      this.$axios
        .post(url, {
          'pageNo': 1,
          'pageSize': 20,
          'orderby': 'createTime',
          'sort': 'desc',
          'searchs': '[]'
        }, {
          headers: {
            authorization: localStorage.getItem('token')
          }
        })
        .then(res => {
          if (res.data.code === 200) {
            this.tableLists = res.data.result.itemVOs
            console.log(this.tableLists)
            console.log(this.tableLists[0].commodityNo)
          } else if (res.data.code === 401) {
            LoginStatusVerification()
          }
        })
    }
  }
}
</script>

<style scoped>

</style>
