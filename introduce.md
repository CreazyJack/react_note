# 笔记管理系统项目介绍

## 0. 项目介绍

### **主要页面**： 登录页面、首页、笔记列表、编辑笔记、导出excel、个人设置

## 1. 使用技术

### react、redux、router、ajax(axios)、antd

## 2. 主要插件

``` js
  "dependencies": {
    "antd": "^3.24.3",
    "axios": "^0.19.0",
    "babel-plugin-import": "^1.12.2",
    "echarts": "^4.6.0",
    "echarts-for-react": "^2.0.15-beta.1",
    "moment": "^2.24.0",
    "react": "^16.10.2",
    "react-app-rewired": "^2.1.4",
    "react-dom": "^16.10.2",
    "react-loadable": "^5.5.0",
    "react-redux": "^7.1.3",
    "react-router-dom": "^5.1.2",
    "react-scripts": "3.2.0",
    "redux": "^4.0.4",
    "redux-thunk": "^2.3.0",
    "wangeditor": "^3.1.1",
    "xlsx": "^0.15.4"
  }
```

## 3. 主要功能实现

### A. 使用 ANTD 框架来创建各个页面。 

### B. 使用 react-router-dom 插件实现各页面的跳转，传参，默认页面以及权限判断。

### C.使用 react-loadable 插件实现组件的懒加载。

### D. 使用 axios 插件实现数据请求。

### E. 通过 wangeditor 插件实现富文本编辑器。

### F. 通过 redux 管理全局数据，并配合 local Storage和sessionStorage实现用户信息的存储和自动登录功能。

设置页面使用了响应式布局。

在设置页面和文章编辑页面中，form 组件的setFieldsValue 方法非常实用，可以自主设置 form.item 中的value

## 4. 各页面细节

1. 首页：使用 echarts 制作一个最近浏览量的图表
2. 文章管理页面：使用 antd 的 card 和 table 组件建立文章列表，包括标题，创建时间，作者等属性，每篇文章后面添加编辑和删除功能，并在最上方添加新建文章和导出excel功能（使用xlsx插件），点击删除会弹出 modal 组件，点击编辑或新建文章会进入 edit 页面，点击导出 excel 会弹出浏览器下载对话框，下载由当前数据转换成的xlsx文件
3. 文章编辑页面：由编辑按钮进入此页面，会自动填充各输入框，自新建按钮进入的，则所有输入框为空白
4. 个人设置页面：在 table 组件中添加了 upload 组件，来实现用户头像的上传，配合 redux 实现同步上传并更换头像的功能
5. 通知中心页面，从右上角下拉菜单中进入，配合 redux 和 badge 组件实现消息的已阅读和待阅读标识，以及单条消息的已阅读功能和全部消息的已阅读功能
6. 整体框架：最上方为 headbar，集成了logo，换肤，头像用户名展示，未读消息数提示，以及下拉菜单导航功能
7. 用户登录页面，由未登录用户或者由右上角下拉菜单中的退出登录按钮进入，结合 localstorage 和sessionstorage实现用户的存储和自动登录以及清除存储信息的功能。