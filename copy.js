//    流 <-- 事件
// const request = require('request');
const fs = require('fs');
const path = require('path');
const os = require('os');
// const events = require('events');

let paths = os.userInfo().homedir;
console.log(paths)
///   拷贝文件    ///////////////////////////////////////////

// let filepath = path.join(os.userInfo().homedir,'Videos','bian形jin刚5 zui后de骑shi（版本3）.mp4');
let filepath = path.join(os.userInfo().homedir, 'Downloads', '1.jpg');

let dist = path.resolve('./2.jpg');
var rs = fs.createReadStream(filepath);
var ws = fs.createWriteStream(dist);
rs.on('data', (chunk) => {
    console.log(chunk);
    ws.write(chunk);
});
rs.on('end', () => {
    console.log('拷贝完成');
});
