var express = require('express')
var server = express()
var path = require('path')


server.use('/public', express.static(path.join(__dirname, '/public')))

server.get('/', function (request, response, next) {
  response.sendFile(path.join(__dirname, 'public/html/clb.html'))
})

server.get('/dowload', function (request, response, next) {
  response.download(path.join(__dirname, 'public/img/logo-clb-01.png'))
})
server.use(express.urlencoded());

var isLogin = false;

server.post('/api', function (request, response, next) {
  if (request.body.username === "admin" && request.body.password === "12345") {
    isLogin = true;
    response.cookie("token","absmcvNNGVmnmc")

    response.redirect('http://localhost:3000')
  } else {
    response.redirect('http://localhost:3000/login')
  }
});

server.get('/success', function (request, response, next) {
  if (isLogin) {
    response.sendFile(path.join(__dirname, 'public/html/success.html'))
  } else {
    response.redirect('http://localhost:3000/login')
  }
});
server.get('/login', function (request, response, next) {
  response.sendFile(path.join(__dirname, './public/html/login.html'))
})
// dowload

// server.use('/api', userRouter)
// server.get('/dowload', function (request, response, next) {
//   response.sendFile(path.join(__dirname, './public/html/clb.html/dowload'))
// })


server.listen(3000, function () {
  console.log('success')
});