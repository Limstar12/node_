var express = require('express')
var router = express.Router();

router.post('/', (req, res, next) => {
    res.send({
        'postdbtitle':'Post 전송 방식은 좀 이렇게 xml 혹은 xjson과 같은 구조가 단순하지 않음',
        'postdbtitle2' : '좀 더 내용을 넣어보는데 key와 value가 구분되는 json 포맷으로',
        'key' : 'value'

    })
})

module.exports = router
