# new-wallpaper-everyday
get a new wallpaper every | 每天一张新壁纸

***

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
    http://127.0.0.1:888/wallpaper?days_ago=13&mkt=en-US
```

欢迎使用、提意见~