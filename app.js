/**
 * Created by 10202386 on 2017/12/28.
 */
let express = require('express');
let request = require('request');
let app = express();

app.get('/', function (req, res) {
    res.send('new wallpaper everyday!')
});
app.get('/today', getWallpaperToday);

app.listen(80, function () {
    console.log('Example app listening on port 80!');
});

function getUri(start, number, mkt) {
    return 'https://www.bing.com/HPImageArchive.aspx?format=js&idx=' + start + '&n=' + number + '&mkt=' + mkt
}
function getWallpaperToday(req, res) {
    let uri = getUri(0, 1, 'zh-CN');
    request(uri, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            let data = JSON.parse(body);
            let images = data.images;
            res.redirect('https://www.bing.com'+images[0].url)
        }else{
            res.send('request error!')
        }
    })
}