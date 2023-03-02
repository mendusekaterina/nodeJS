const fs=require('node:fs');
const path=require('node:path');
fs.mkdir(path.join(__dirname,'folder'),{recursive:true},(err)=>{
    if (err) throw  Error(err.message);
});
for (let i = 0; i < 5; i++) {
    fs.mkdir(path.join('folder',`folder${i+1}`),{recursive:true},(err)=>{
        if (err) throw  Error(err.message);
    });
};
for (let j = 0; j < 5; j++) {
    fs.writeFile(path.join(__dirname,'folder',`file${j+1}.txt`),`text${j+1}`,(err)=>{
        if (err) throw  Error();
    });
};
fs.readdir(path.join(__dirname,'folder'),(err,data)=>{
    console.log(data)
    for (const item of data) {
        fs.stat(path.join(__dirname,'folder',item),(err, stats)=>{
            if (err) throw new Error();
           if (stats.isFile()) {
               console.log(`${item} - is file`)
           } else{
               console.log(`${item} - is folder`)
           }
        });
    }
})






