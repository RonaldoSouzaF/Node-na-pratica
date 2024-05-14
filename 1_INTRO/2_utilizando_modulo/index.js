const  fs = require('fs') // file system , convenção

fs.readFile('arquivo.txt', 'utf8',(err,data) => {
    if(err){
        console.log(err)
        return
    }

    console.log(data)
})