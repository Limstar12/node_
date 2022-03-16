var express = require('express')
var app = express(); //express모듈 인스턴스 app
var time = new Date();

var postsend = require('./api/postsend')
var getsend = require('./api/getsend')

app.set('port', 8080)
app.get('/',(req, res) => {
    res.send('루트요청 있었음');
})

//리액트에서 비동기로 정보 요청할 주소 셋팅
app.use('/postsend', postsend);
app.use('/getsend', getsend);

app.listen(app.get('port'), () =>{
    console.log(time + '콘솔에서 시간으로 확인해보면 바로 알게됨')
})