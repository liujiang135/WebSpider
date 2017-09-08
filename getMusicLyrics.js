const http = require('http');
const fs = require('fs');
const path = require('path');
const child = require('child_process');
const query = require('querystring');
const request = require('request');

//······························    ······································
//抓取网络信息
// http.get()   //request

const currentpath = require('os').homedir();
const cpath = path.join(currentpath, '/Desktop/node/007-express&request');
console.log(cpath);

var arr=['天路','一生有你','朋友','光辉岁月','海阔天空'];

arr.forEach(v=>{
    request.post({
            // url: 'http://music.163.com/api/search/pc',
            url: 'http://music.163.com/api/search/pc',
            form: {
                s: v,
                type: '1'
            }
        },
        (err, res, body) => {
            let data = JSON.parse(body).result.songs[0];
            let name = data.name;
            let id = data.id;
            console.log(id);
            request.get(
                `http://music.163.com/api/song/lyric?os=osx&id=${id}&lv=-1&kv=-1&tv=-1`,
                (err, res, body) => {
                    if (err) {
                        console.log('get文件出错');
                    }
                    // console.log(err,res,body);
                    fs.writeFile(`./${name}.json`,body,()=>{
                        console.log(`${name}.json文件下载成功`)
                    })
                }
            )
            //      request.get('地址',()=>{
            // fs.writeFile(`./${name}.json`)  写入成功
        }
    );
})