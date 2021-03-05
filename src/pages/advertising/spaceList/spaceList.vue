<template>
  <div>
    <div class="form">
      <el-form
        inline="inline"
        >
        <el-row>
          <el-col
            :span="7"
            :offset="1"
            >
            <el-form-item
              label="广告位类型"
              >
              <el-select
                v-model="inputType"
                placeholder="全部"
                >
                <el-option
                  v-for="(option, index) in optionType"
                  :key="index"
                  :label="option.label"
                  :value="option.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col
            :span="7"
            :offset="1"
            >
            <el-form-item
              label="所属终端"
              >
              <el-select
                v-model="inputTerminal"
                placeholder="全部"
                >
                <el-option
                  v-for="(option, index) in optionTerminal"
                  :key="index"
                  :value="option.value"
                  :label="option.label"
                  ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col
            :span="7"
            :offset="1"
          >
            <el-form-item
              label="状态"
            >
              <el-select
                v-model="inputStatus"
                placeholder="全部"
              >
                <el-option
                  v-for="(option, index) in optionStatus"
                  :key="index"
                  :value="option.value"
                  :label="option.label"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col
            :span="1.1"
            class="leftSpace right_btn"
            >
            <el-button
              class="right_btn"
              type="primary"
            >
              添加广告位
            </el-button>
            <el-button
              class="right_btn"
              type="danger"
              native-type="reset"
              @click="handleReset"
            >
              重置
            </el-button>
            <el-button
              class="right_btn"
              type="primary"
            >
              查询
            </el-button>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div>
      <el-table
        :data="tableLists"
      >
        <el-table-column
          label="广告位编码"
          prop="positionCode"
          ></el-table-column>
        <el-table-column
          label="广告位名称"
          prop="positionName"
        ></el-table-column>
        <el-table-column
          label="所属终端"
          prop="positionTerminalDesc"
        ></el-table-column>
        <el-table-column
          label="广告位类型"
          prop="positionTypeDesc"
        ></el-table-column>
        <el-table-column
          label="添加时间"
          prop="createTime"
        ></el-table-column>
        <el-table-column
          label="广告位状态"
          prop="statusDesc"
        ></el-table-column>
        <el-table-column
          label="操作"
        >
          <el-button
            type="primary"
          >
            查看
          </el-button>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import {LoginStatusVerification} from '../../../utils/selectLoginStatus'

export default {
  name: 'spaceList',
  data () {
    return {
      inputType: '',
      inputTerminal: '',
      inputStatus: '',
      optionType: [
        {value: '1', label: '全部'},
        {value: '2', label: '浮窗广告'},
        {value: '3', label: '文字广告'},
        {value: '4', label: '图片广告'},
        {value: '5', label: '弹屏广告'},
        {value: '6', label: '开屏广告'},
        {value: '7', label: 'Banner类型广告'}
      ],
      optionTerminal: [
        {value: '0', label: '全部'},
        {value: '1', label: '天呈净菜小程序'},
        {value: '2', label: '天呈生活小程序'},
        {value: '3', label: '天呈生活APP'}
      ],
      optionStatus: [
        {value: '0', label: '全部'},
        {value: '1', label: '已启用'},
        {value: '2', label: '已禁用'}
      ],
      tableLists: []
    }
  },
  created () {
    this.ajaxFun()
  },
  methods: {
    ajaxFun () {
      const url = '/api/web/cms/advertWeb/queryAdvertPositionPage'
      this.$axios
        .post(url, {
          'searchs': '[]',
          'pageNo': 1,
          'pageSize': 20,
          'orderby': 'createTime',
          'sort': 'desc'
        }, {headers: {
          authorization: localStorage.getItem('token')}})
        .then(res => {
          if (res.data.code === 200) {
            this.tableLists = res.data.result.itemVOs
          } else {
            LoginStatusVerification()
          }
        })
    },
    handleReset () {
      this.inputType = ''
      this.inputTerminal = ''
      this.inputStatus = ''
    }
  }
}
</script>

<style scoped>

</style>
