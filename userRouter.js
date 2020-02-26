var Router= require('express').Router
var path= require('path')
var express= require('express')

var test= Router()

test.use('/', express.static(path.join(__dirname, '../html/test.html')));


test.get('/info', function(request, response, nextt){
    response.send('CHIENPHAN RAT DZAI')
})



module.exports = test