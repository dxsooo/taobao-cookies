# 暴力猴脚本获取淘宝页面cookies

dddd，当前只支持商品详情页

## 使用方式

安装暴力猴（Violentmonkey）插件到浏览器后，添加新脚本，将 `item_cookies.js` 内容拷贝进去并保存

clone项目代码后，本地启动服务：

```bash
# 没有安装 flask 则需要先安装
# pip install flask

cd taobao-cookies
flask run
```

打开任意的商品详情页（需要先手动登录），然后启用本脚本并手动刷新页面一次

cookie 将每隔20s追加写入到当前路径的 `cookies.txt`

## 注意

1. 代码中的时间间隔不宜减少，dddd
2. 没有长时间测试过，不保证淘宝侧没有其他限制措施

## 免责声明

本代码仅供学习参考，后续基于cookie的任何行为和本项目无关
