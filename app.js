/**
 * Created by 10202386 on 2017/12/28.
 */
const express = require('express');
const request = require('request');
const app = express();

app.get('/', function (req, res) {
    res.sendfile('index.html')
});
app.get('/wallpaper/random', getWallpaperByRandom);
app.get('/wallpaper', getWallpaperByCondition);

app.listen(8888, function () {
    console.log('Example app listening on port 8888!');
});

function getUri(start, number, mkt) {
    return 'https://www.bing.com/HPImageArchive.aspx?format=js&idx=' + start + '&n=' + number + '&mkt=' + mkt
}

function getWallpaper(res, days_ago, mkt) {
    var uri;
    if (days_ago <= 7){
        uri = getUri(days_ago, 1, mkt)
    }else {
        uri = getUri(7, days_ago-6, mkt)
    }
    request(uri, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            var data = JSON.parse(body);
            var images = data.images;
            res.redirect('https://www.bing.com'+images[images.length-1].url)
        }else{
            res.send('request error!')
        }
    })
}

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getWallpaperByCondition(req, res) {
    var days_ago = req.query.days_ago || 0;
    var mkt = req.query.mkt || 'zh-CN';
    getWallpaper(res, days_ago, mkt)
}

function getWallpaperByRandom(req, res) {
    var days_ago = getRandomInteger(0,15);
    var mkt = getRandomInteger(0,1) ? 'zh-CN' : 'en-US';
    getWallpaper(res, days_ago, mkt)
}
