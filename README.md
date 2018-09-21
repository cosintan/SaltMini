# SaltMini
Salt Value Develops
- 后台开发语言：Node.js
- 数据库：mysql
 - 代码管理：Git
- 工作分支：dev_1(合入代码所用分支)
- 网络代理：nginx
- 网络方式：HTTPS
- 域名：https://www.cosintan.cn
- 推荐开发工具： VS Code
- 推荐测试工具：Postman
# 编码规范
# 项目结构
## 模块
### 1. 路由模块
### 2. 日志模块
# restful 接口开发
###  hello cosintan
#### 功能：测试Get请求和路由
#### 请求URL：https://www.cosintan.cn/applet/photos/index
#### 请求方法：GET
#### 返回：
#### 200 
Hello cosintan!
### GET OBJECTS
#### 功能：获取所有图片信息
#### 请求URL：https://www.cosintan.cn/applet/photos/list
#### 请求方法：GET
#### 返回：
#### 200 
{
    "code": 0,
    "msg": "ok",
    "data": [
        "https://tan-1257176610.cos.ap-chengdu.myqcloud.com/1534675750175-H1C7spUIX.jpg"
    ]
}
# api 开发
# 数据库表设计 SALTMINI
### 用户类
#### 1.1 用户基本信息表 tUser

| 字段 | 类型 | 含义 |备注|
| ------ | ------ | ------ |----|
| UId | int | 标识 |-|
| UName | varchar | 用户名 |微信用户名|
|UType|int|用户类型|个人用户/企业用户|
> Uid作为主键

#### 2.1 操作记录表 tOperRecord

| 字段 | 类型 | 含义 |备注|
| ------ | ------ | ------ |----|
| OpId | int | 标识 |-|
| UId | int | 用户ID |用户标识|
|OpType|int|操作类型|登陆/浏览/删除|
|OpTime|datetime|操作时间|具体动作时间|

> Oid作为主键,Uid作为外键


