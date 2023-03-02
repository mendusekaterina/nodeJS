// const fs=require ('node:fs');
// const {LogToConsole}= require('./test/text.txt')
// const os=require('node:os');
const fs=require('node:fs');
const path=require('node:path');
// const joinedPath=path.join(__dirname,'test','test.js');
// console.log(joinedPath);
// LogToConsole();
// console.log(path.join(__dirname,'test','test.js'));
// console.log(path.normalize('///nodeJS///test//test.js//'));
// console.log(path.resolve('test', 'test.js'));
// console.log(os.arch());
// console.log(os.cpus());

// fs.writeFile(path.join('test','text2.txt'),'Hello Hello Hello!!!',(err)=>{
//     if (err) throw new Error(err.message)
// })
// fs.readFile(path.join('test','text.txt'),(err, data)=>{
//     if (err) throw new Error(err.message);
//     // console.log(data.toString());
//     fs.writeFile(path.join('text','text.txt'),data,(err,data)=>{
//         console.log(err.message);
//     })
// });

// fs.appendFile('./test/text2.txt','new added text\n',(err)=>{
//    if (err) throw new Error(err.message)
// });
// const users = [
//     {id: 1, name: 'katya', age: 30, status: true},
//     {id: 2, name: 'kostya', age: 31, status: true},
//     {id: 3, name: 'elena', age: 30, status: false},
//     {id: 4, name: 'olya', age: 30, status: true},
//     {id: 5, name: 'petya', age: 33, status: true},
//     {id: 6, name: 'alex', age: 35, status: true},
//     {id: 7, name: 'anna', age: 25, status: false},
//     {id: 8, name: 'kolya', age: 31, status: false},
//     {id: 9, name: 'alina', age: 27, status: true},
//     {id: 10, name: 'sasha', age: 21, status: false},
// ];
// fs.writeFile('./test/users.json',JSON.stringify(users),(err)=>{
//     console.log(err);
// })
// fs.truncate(path.resolve('test','test.js'),(err)=>{
//     console.log(err);
// });
// fs.unlink(path.join('test','test.js'),(err)=>{
//     console.log(err);
// })

// fs.readdir(path.join(__dirname, 'test'),{withFileTypes:true},(err,data)=>{
//     console.log(err);
//     console.log(data);
// });

// fs.readdir(path.join(__dirname, 'test'),{withFileTypes:true},(err,data)=>{
//     if (err) throw new Error();
//     data.forEach(file=>{console.log(file.isFile())})
// });

// fs.stat('./test',(err, stats)=>{
//     console.log(err);
//     console.log(stats.isDirectory());
// })


