
var express = require('express')
var mysql = require('mysql')
var dbconfig = require('../db/config.js')
var connection = mysql.createConnection(dbconfig)

var router = express.Router();

router.get('/', (req,res) => {
    connection.query('SELECT * FROM reactinterview.interview', (error, result) =>{
        if(error) throw error;
        res.send(result)
        })
})

module.exports = router;