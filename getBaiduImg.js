const http = require('http');
const fs = require('fs');
const path = require('path');
const child = require('child_process');
const query = require('querystring');
const request = require('request');


//  抓取百度的图片
http.get('http://www.baidu.com/img/bd_logo1.png', (data) => {
    let body = "";
    let ws = fs.createWriteStream(path.resolve('./baidu1.png'));
    data.socket.pipe(ws);
    // child.spawnSync('explorer',[cpath]); //打开文件夹
});