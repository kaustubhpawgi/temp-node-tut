const {readFile,writeFile}= require('fs')       // async vale
// const fs= require('fs')
console.log('start')
// callback is executed once the functionality we wanted to execute is completed
//first arg is path of the file, second arg is the callback function whose first parameter is error and second is result
readFile('./content/first.txt','utf8',(err,result) =>{
    if(err){
        console.log(err);
        return;
    }
    // console.log(result)
    const first=result;
    readFile('./content/second.txt','utf-8',(err,result) =>{
        if(err){
            console.log(err);
            return;
        }
        const second= result
        writeFile('./content/result-async.txt',`Here is the result: ${first}, ${second}`,(err,result)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log('doing this task');
        })
    })
})
console.log('next task')
// <Buffer 68 65 6c 6c 6f 20 74 68 69 73 20 69 73 20 66 69 72 73 74 20 74 65 78 74 20 66 69 6c 65 2e> result of aboove without utf-8
// although the above code returns undefined, the result-async file has content in it correctly