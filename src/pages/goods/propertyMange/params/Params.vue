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
              label="参数名称">
              <el-input
                v-model="inputName"
                placeholder="请输入参数名称"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col
            :span=8
          >
            <el-form-item
              label="输入类型"
            >
              <el-select
                v-model="inputType"
              >
                <el-option
                  v-for="(option, index) in optionType"
                  :key="index"
                  :value="option.value"
                  :label="option.label"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col
            :span=8
          >
            <el-form-item
              label="状态"
            >
              <el-select
                v-model="inputStatus"
              >
                <el-option
                  v-for="(optionT, index) in optionStatus"
                  :key="index"
                  :value="optionT.value"
                  :label="optionT.label"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col
            :span=1.1
            v-for="(btn, index) in button"
            :key="index"
            class="right_btn"
          >
            <el-button
              :class="btn.class"
              :type="btn.type"
              :native-type="btn.nType"
            >{{btn.title}}</el-button>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div>
      <el-table
        :data="tableLists"
      >
        <el-table-column
          label="参数编码"
          prop="id"
        ></el-table-column>
        <el-table-column
          label="参数名称"
          prop="name"
        ></el-table-column>
        <el-table-column
          label="输入类型"
          prop="paramType.describe"
        >
        </el-table-column>
        <el-table-column
          label="状态"
        >
          <template
            slot-scope="scope"
            >
            {{scope.row.enable ? '启用' : '停用'}}
          </template>
        </el-table-column>
        <el-table-column
          label="添加时间"
          prop="createTime"
        ></el-table-column>
        <el-table-column
          label="添加人"
          prop="operator"
        ></el-table-column>
        <el-table-column
          label="操作"
        ></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Params',
  data () {
    return {
      inputName: '',
      inputType: '',
      inputStatus: '',
      optionType: [
        {value: '1', label: '全部'},
        {value: '2', label: '单选框'},
        {value: '3', label: '复选框'},
        {value: '4', label: '下拉选择'},
        {value: '5', label: '单行输入框'},
        {value: '6', label: '多行输入框'}
      ],
      optionStatus: [
        {value: '1', label: '全部'},
        {value: '2', label: '启用'},
        {value: '3', label: '停用'}
      ],
      button: [
        {title: '添加参数', class: 'right_btn', type: 'primary', nType: ''},
        {title: '查询', class: 'right_btn', type: 'primary', nType: ''},
        {title: '清空', class: 'right_btn', type: 'danger', nType: 'reset'}
      ],
      tableLists: []
    }
  },
  created () {
    this.ajaxFun()
  },
  methods: {
    ajaxFun () {
      const url = '/api/web/commodity/baseParamOption/query'
      axios
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
          }
        })
    }
  }
}
</script>

<style scoped>

</style>
