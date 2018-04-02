const express = require('express');
const request = require('request');
const app = express();

app.listen(8888, function () {
    console.log('Example app listening on port 8888!');
});

const getUri = (start, number, mkt) => 'https://www.bing.com/HPImageArchive.aspx?format=js&idx=' + start + '&n=' + number + '&mkt=' + mkt;

const getWallpaper = (res, days_ago, mkt) => {
    let uri;
    if (days_ago <= 7) {
        uri = getUri(days_ago, 1, mkt)
    } else {
        uri = getUri(7, days_ago - 6, mkt)
    }
    request(uri, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            let images = JSON.parse(body).images;
            res.redirect('https://www.bing.com' + images[images.length - 1].url)
        } else {
            res.send('request error!')
        }
    })
}

const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getWallpaperByCondition = (req, res) => {
    let days_ago = req.query.days_ago || 0;
    let mkt = req.query.mkt || 'zh-CN';
    getWallpaper(res, days_ago, mkt)
}

const getWallpaperByRandom = (req, res) => {
    let days_ago = getRandomInteger(0,15);
    var mkt = getRandomInteger(0,1) ? 'zh-CN' : 'en-US';
    getWallpaper(res, days_ago, mkt)
}

app.get('/', function (req, res) {
    res.sendfile('index.html')
});
app.get('/wallpaper/random', getWallpaperByRandom);
app.get('/wallpaper', getWallpaperByCondition);