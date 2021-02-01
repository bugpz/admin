# admin

> A Vue.js project

## Build Setup

``` bash
#Server deployment
服务器使用Nginx部署，nginx.conf在config目录中 监听端口需修改为自己想部署的端口
if 需要跨域请求 nginx.conf需添加代理  可参考108-111行
注：如代理https，nginx需添加SSL模块  参照https://www.jianshu.com/p/3191f6d52a53


# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
