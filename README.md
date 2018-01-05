# new-wallpaper-everyday
get a new wallpaper every | 每天一张新壁纸

***

项目介绍文章：[【Node.js线上部署小项目】让自己的博客每次打开都有不同的封面](http://http://tuobaye.com/2017/12/26/%E3%80%90Node.js%E7%BA%BF%E4%B8%8A%E9%83%A8%E7%BD%B2%E5%B0%8F%E9%A1%B9%E7%9B%AE%E3%80%91%E8%AE%A9%E8%87%AA%E5%B7%B1%E7%9A%84%E5%8D%9A%E5%AE%A2%E6%AF%8F%E6%AC%A1%E6%89%93%E5%BC%80%E9%83%BD%E6%9C%89%E4%B8%8D%E5%90%8C%E7%9A%84%E5%B0%81%E9%9D%A2/)

使用方法：

```
    git clone https://github.com/tuobaye0711/new-wallpaper-everyday.git
    cd new-wallpaper-everyday
    node app.js
```

接口调用：

今日壁纸：
```
    http://127.0.0.1:8888/wallpaper
```
另外支持参数：
```
    days_ago | int    | 查询几天前的壁纸 | n <= 15
    mkt      | string | 查询某地区的壁纸 | zh-CN(默认)/en-US
```
一个例子，查询en-US地区13天前的壁纸：
```
    http://127.0.0.1:8888/wallpaper?days_ago=13&mkt=en-US
```

随机返回一张壁纸——地区随机、日期随机（15日内）：
```
    http://127.0.0.1:8888/wallpaper/random
```

欢迎使用、提意见~