const scpClient = require('scp2')
// const ora = require('ora')

// const publishTips = ora('----开始发布上传----')


// publishTips.start()
scpClient.scp('./dist',{ // 文件夹是当对于根目录来查找
    host: '39.105.153.195',
    username: 'root',
    password: 'Wyf3257165',
    path: '/usr/local/blog-note/build'
},(err)=>{
    if(err){
        // publishTips.fail('----------发布线上环境失败----------')
        console.log('错误信息:', err)
    } else{
        console.log('=====>发布成功')
        // publishTips.succeed('----------发布线上环境成功----------')
    }
})

