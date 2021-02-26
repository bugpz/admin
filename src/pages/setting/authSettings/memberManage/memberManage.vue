<!--
 * @Description:memberManage.vue
 * @CreatedBy:WebStorm
 * @Author: BugP
 * @Date: 2021-02-02 11:28
 * @LastEditTime: 2021-02-02 11:28
 * @LastEditors: BugP
-->
<template>
  <div>
    <el-row>
      <el-col
        :span="4"
      >
        <el-card>
          <template
            slot="header">
            <span>组织机构</span>
          </template>
          <el-tree
            :data="trees"
            :props="treesPort"
            @node-click="handleNodeClick"
          ></el-tree>
        </el-card>
      </el-col>
      <el-col
        :span="19"
      >
        <el-card>
          <el-form
            inline="inline"
          >
            <el-row>
              <el-col
                :span="6"
              >
                <el-form-item
                  label="登录手机"
                >
                  <el-input
                    v-model="userPhone"
                    maxlength="11"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col
                :span="6"
              >
                <el-form-item
                  label="员工姓名"
                >
                  <el-input
                    v-model="username"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col
                :span="6"
              >
                <el-form-item
                  label="员工状态"
                >
                  <el-select
                    v-model="inputStatus"
                  >
                    <el-option
                      v-for="(status, index) in userStatus"
                      :key="index"
                      :label="status.label"
                      :value="status.value"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col
                :span="6"
              >
                <el-form-item
                  label="员工角色"
                >
                  <el-select
                    v-model="inputUserRole"
                  >
                    <el-option
                      v-for="(role, index) in userRoles"
                      :key="index"
                      :label="role.name"
                      :value="role.id"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col
                :span="3"
                class="right_btn"
              >
                <el-button class="right_btn" type="primary" @click="handleSelect">查询</el-button>
              </el-col>
            </el-row>
          </el-form>
          <el-table
            :data="userList"
          >
            <el-table-column
              label="姓名"
              prop="fullName"
            ></el-table-column>
            <el-table-column
              label="登录手机"
              prop="phone"
            ></el-table-column>
            <el-table-column
              label="主属部门"
              prop="mainDept.name"
            ></el-table-column>
            <el-table-column
              label="附属部门"
              prop="slaveDept.name"
            ></el-table-column>
            <el-table-column
              label="角色"
              prop="roleStr"
            ></el-table-column>
            <el-table-column
              label="状态"
            >
              <template slot-scope="scope">
                <span>
                  {{scope.row.enable ? '正常' : '停用'}}
                </span>
              </template>
            </el-table-column>
            <el-table-column
              label="操作"
            ></el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {LoginStatusVerification} from '../../../../utils/selectLoginStatus'

export default {
  name: 'memberManage',
  data () {
    return {
      userPhone: '',
      username: '',
      inputStatus: '',
      userStatus: [
        {value: '', label: '全部'},
        {value: 'true', label: '启用'},
        {value: 'false', label: '停用'}
      ],
      inputUserRole: '',
      userRoles: [
        {id: 1, name: '全部'}
      ],
      trees: [],
      treesPort: {
        children: 'childDeptList',
        label: 'name'
      },
      userList: []
    }
  },
  created () {
    this.ajaxFun()
  },
  methods: {
    handleNodeClick (id) {
      console.log(id.id)
      this.$axios
        .post('/api/web/account/user/loadPage', {
          'pageNo': 1,
          'pageSize': 20,
          'searchs': '[{"tempMatchType":"4","propertyName":"mainDepartment.id","propertyValue1":' + id.id + ',"tempType":"Long"}]'}, {headers: {
          authorization: localStorage.getItem('token')
        }})
        .then(res => {
          if (res.data.code === 200) {
            this.userList = res.data.result.itemVOs
            console.log(this.userList)
            localStorage.setItem('mainDepartment.id', id.id)
          } else {
            LoginStatusVerification()
          }
        })
    },
    ajaxFun () {
      this.$axios // 获取组织结构
        .post('/api/web/account/department/search', {}, {headers: {
          authorization: localStorage.getItem('token')
        }})
        .then(res => {
          if (res.data.code === 200) {
            this.trees = res.data.result
          } else {
            LoginStatusVerification()
          }
        })
      this.$axios // 所有获取人员角色
        .post('/api/web/account/role/loadPage/', {}, {headers: {
          authorization: localStorage.getItem('token')
        }})
        .then(res => {
          if (res.data.code === 200) {
            this.userRoles = res.data.result.itemVOs
          } else {
            LoginStatusVerification()
          }
        })
    },
    handleSelect () {
      this.$axios
        .post('/api/web/account/department/search', {
          'pageNo': 1,
          'pageSize': 20,
          'searchs': '[{"tempMatchType":"5","propertyName":"phone","propertyValue1":' + '"' + this.userPhone + '"' + ',"tempType":"String"},' +
            '{"tempMatchType":"4","propertyName":"mainDepartment.id","propertyValue1":' + localStorage.getItem('mainDepartment.id') + ',"tempType":"Long"}],' +
            '{"tempMatchType":"5","propertyName":"fullName","propertyValue1":' + '"' + this.username + '"' + ',"tempType":"String"},' +
            '{"tempMatchType":"4","propertyName":"enable","propertyValue1":' + this.inputStatus + ',"tempType":"boolean"},' +
            '{"tempMatchType":"4","propertyName":"roleList.id","propertyValue1":' + this.inputUserRole + ',"tempType":"Number"}'
        }, {headers: {
          authorization: localStorage.getItem('token')
        }})
        .then(res => {
          if (res.data.code === 200) {
            this.userList = res.data.result.itemVOs
            console.log(this.userList)
          }
        })
    }
  }
}
</script>

<style scoped>

</style>
