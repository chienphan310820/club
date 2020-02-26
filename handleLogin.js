$(document).ready(function () {
    $('#buttom-login').click(function () {
        var username = $('#username').val();
        var password = $('#password').val();
        console.log(username, "======", password);

        var body = {
            username: $('#username').val(),
            password: $('#password').val()
        }
    })
    
    console.log(body);
})
