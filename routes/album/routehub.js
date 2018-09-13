const path=require('path');
module.exports = (router) => {
    console.log('routehub');
    // Hello cos
    router.get('/index',function(req,res){
        console.log(req.url);
        res.send('Hello cosintan!');
    });
    // 获取图片列表i
    router.get('/list', require(path.join(__dirname,'handlers/list')));

    // 上传图片
    router.post('/upload', require(path.join(__dirname,'handlers/upload')));

    // 删除图片
    router.post('/delete', require(path.join(__dirname,'handlers/delete')));
};