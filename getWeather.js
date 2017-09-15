const http = require('http');
const fs = require('fs');
const os = require('os');
const path = require('path');
const child = require('child_process');
const query = require('queryString');
const request = require('request');

const currentpath = os.homedir();
const cpath = os.homedir();

let name = '天气预报信息';
request.get({
        url: 'https://www.toutiao.com/stream/widget/local_weather/data/?city=%E5%8C%97%E4%BA%AC',
    },
    (err, res, body) => {
        if (err) {
            console.log('get请求失败')
        }
        let data = JSON.parse(body).data.weather;
        let diwen = data.low_temperature;
        let gaowen = data.high_temperature;
        let cwendu = data.current_temperature;
        let fengxiang = data.wind_direction;
        let tianqi = data.current_condition;

        console.log(`当前温度：${cwendu}度 ${diwen}/${gaowen} 风向：${fengxiang} 天气：${tianqi}`)

        fs.exists(`./${name}.json`, function(exists) {
            // console.log(exists ? `没有<<${name}.json>>文件` : `<<${name}.json>>文件已存在`);

            if(!exists){
                fs.writeFile(`./${name}.json`,body,()=>{
                    console.log(`${name}.json文件下载成功`)
                })
            }
        });


    })
