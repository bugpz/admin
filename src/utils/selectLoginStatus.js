/*
 * @Description:selectLoginStatus.js
 * @CreatedBy:WebStorm
 * @Author: BugP
 * @Date: 2021-02-22 09:45
 * @LastEditTime: 2021-02-22 09:45
 * @LastEditors: BugP
*/

const LoginStatusVerification = function () {
  location.replace(`/login?r=${Math.floor(Math.random() * 10000)}`)
  localStorage.clear()
}
export {LoginStatusVerification}
