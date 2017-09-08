const fs = require('fs');
const path = require('path');
const home = require('os').homedir();   //  C:\Users\Administrator
const child = require('child_process');

const downloadpath = path.join(home, 'Downloads');   //到电脑的下载目录下
const dist = path.join(home, 'Pictures');

let arr = [];
let timerId;
let id = 1;
fs.watch(downloadpath, (type, filename) => {
    console.log(filename);
    arr.push(filename);
    clearTimeout(timerId);
    timerId = setTimeout(() => {
        let file = arr.pop();
        let date = new Date();
        let riqi = [date.getFullYear(), date.getMonth() + 1, date.getDate()].join('-');
        let old = path.join(downloadpath, `${file}`);
        let newadd = path.join(dist, riqi, `${file}`);  //以前的
         // id+=1;
        // let newadd = path.join(dist, riqi, `a${id}.jpg`);   // 新的操作  添加.jpg
        let dpath = path.join(dist, riqi);
        if (!fs.existsSync(dpath)) {
            fs.mkdirSync(dpath);
            console.log('--1--创建日期文件夹--ok--');
        }
        fs.rename(old, newadd, (err) => {
                console.log('--rename--ok--');
                // child.spawnSync('explorer', [dpath]);
                arr = [];
            }
        )
    }, 500);
});

